import express from "express"
import cors from "cors"

import { routes } from "./routes"
import { errorHandling } from "./middlewares/error-handling"

const PORT = 3333
const app = express()

// Configuração de CORS para permitir requests do mobile
app.use(cors({
  origin: ['*'], // Em produção, especifique os domínios permitidos
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())
app.use(routes)

app.use(errorHandling)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
