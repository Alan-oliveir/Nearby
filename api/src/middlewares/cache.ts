import { Request, Response, NextFunction } from "express"

// Cache simples em memória (para produção, usar Redis)
const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_TTL = 5 * 60 * 1000 // 5 minutos

export function cacheMiddleware(duration: number = CACHE_TTL) {
  return (request: Request, response: Response, next: NextFunction) => {
    const key = request.originalUrl

    // Verificar se existe cache válido
    const cached = cache.get(key)
    if (cached && Date.now() - cached.timestamp < duration) {
      return response.json(cached.data)
    }

    // Interceptar response.json para salvar no cache
    const originalJson = response.json
    response.json = function(data: any) {
      cache.set(key, { data, timestamp: Date.now() })
      return originalJson.call(this, data)
    }

    next()
  }
}

// Limpar cache periodicamente
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of cache.entries()) {
    if (now - value.timestamp > CACHE_TTL) {
      cache.delete(key)
    }
  }
}, CACHE_TTL)
