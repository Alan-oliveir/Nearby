import axios from "axios"

// Configuração dinâmica do IP baseada no ambiente
const getBaseURL = () => {
  // Para desenvolvimento, use o IP da sua máquina local
  // Para produção, substitua pelo IP/domínio do servidor
  const developmentIP = "192.168.1.5" // Altere para o IP da sua máquina
  const productionURL = "https://your-api-domain.com"
  
  // Detecta se está em desenvolvimento ou produção
  const isDevelopment = true // Para desenvolvimento, mude para false em produção
  
  return isDevelopment 
    ? `http://${developmentIP}:3333`
    : productionURL
}

export const api = axios.create({
  baseURL: getBaseURL(),
  timeout: 10000, // Aumentado para 10 segundos
  headers: {
    'Content-Type': 'application/json',
  }
})