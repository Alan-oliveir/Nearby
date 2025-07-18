# Changelog

Todas as mudanças notáveis neste projeto serão documentadas aqui.

## [2.0.0] - 2025-07-18

### ✨ Adicionado
- **Sistema de Cache** na API para melhorar performance
- **CORS configurado** adequadamente para requests cross-origin
- **Script de descoberta de IP** (`npm run get-ip`) para facilitar configuração
- **Configuração dinâmica de ambiente** no mobile (dev/prod)
- **Middleware de cache** com limpeza automática
- **Validações aprimoradas** com mensagens específicas
- **Arquivos .env.example** para API e mobile
- **Documentação detalhada** das melhorias implementadas

### 🔧 Melhorado
- **Timeout da API** aumentado de 700ms para 10s
- **Geração de cupons** com timestamp para garantir unicidade
- **Headers HTTP** adequados configurados
- **Tratamento de erros** mais robusto
- **Loading states** granulares na tela home
- **Validação de parâmetros** antes da navegação

### 🐛 Corrigido
- **11 vulnerabilidades** de segurança no mobile
- **IP hardcoded** substituído por configuração dinâmica
- **Problemas de CORS** entre API e mobile
- **Transações no banco** para operações de cupons
- **Console.log** desnecessário removido

### 🛡️ Segurança
- **Validação de UUIDs** rigorosa
- **Transações atomicas** no banco de dados
- **Cupons únicos** com hash seguro
- **Vulnerabilidades corrigidas** (de 11 para 0)

### 📚 Documentação
- **README atualizado** com seção de melhorias
- **Comparação** com projeto original NLW
- **Instruções detalhadas** de configuração
- **Scripts úteis** documentados

---

## [1.0.0] - 2024-10-16

### ✨ Versão Inicial (NLW Pocket Mobile)
- Aplicativo React Native com Expo
- API Node.js com Express e Prisma
- Sistema de mapas com marcadores
- Listagem de estabelecimentos por categoria
- Sistema de cupons com QR Code
- Banco SQLite com dados de exemplo
