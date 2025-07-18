import { Router } from "express"

import { CategoriesController } from "@/controllers/categories-controller"
import { cacheMiddleware } from "@/middlewares/cache"

const categoriesRoutes = Router()
const categoriesController = new CategoriesController()

// Cache de 10 minutos para categorias (dados que mudam pouco)
categoriesRoutes.get("/", cacheMiddleware(10 * 60 * 1000), categoriesController.index)

export { categoriesRoutes }
