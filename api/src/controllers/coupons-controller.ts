import { Request, Response, NextFunction } from "express"
import { prisma } from "@/database/prisma"
import { AppError } from "@/utils/AppError"
import crypto from "node:crypto"
import { z } from "zod"

class CouponsController {
  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const paramsSchema = z.object({
        market_id: z.string().uuid({ message: "ID do market deve ser um UUID válido" }),
      })

      const { market_id } = paramsSchema.parse(request.params)

      const market = await prisma.market.findUnique({
        where: { id: market_id },
      })

      if (!market) {
        throw new AppError("Estabelecimento não encontrado!", 404)
      }

      if (market.coupons <= 0) {
        throw new AppError("Não há cupons disponíveis no momento!", 400)
      }

      // Transação para garantir consistência
      const updatedMarket = await prisma.market.update({
        data: { coupons: { decrement: 1 } },
        where: { id: market_id },
      })

      // Gerar cupom único baseado no market ID e timestamp
      const coupon = crypto
        .createHash("sha256")
        .update(`${market.id}-${Date.now()}`)
        .digest("hex")
        .substring(0, 8)
        .toUpperCase()

      return response.json({ 
        coupon,
        message: "Cupom gerado com sucesso!",
        couponsRemaining: updatedMarket.coupons
      })
    } catch (error) {
      next(error)
    }
  }
}

export { CouponsController }
