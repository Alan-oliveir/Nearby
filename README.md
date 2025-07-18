# Nearby App - Pocket-Mobile

## 📱 Sobre o Projeto

O Nearby App é um aplicativo desenvolvido em React Native com Expo que permite aos usuários encontrar estabelecimentos próximos e utilizar cupons de desconto. O projeto foi desenvolvido durante o evento NLW Pocket Mobile da Rocketseat.

## 🏗️ Arquitetura do Projeto

O projeto está estruturado em duas partes principais:

### 📂 API (Backend)
- **Tecnologias**: Node.js, Express, TypeScript, Prisma, SQLite
- **Porta**: 3333
- **Banco de dados**: SQLite com Prisma ORM
- **Funcionalidades**:
  - Gerenciamento de categorias
  - Listagem de estabelecimentos (markets)
  - Sistema de cupons

### 📱 Mobile (Frontend)
- **Tecnologias**: React Native, Expo, TypeScript, Expo Router
- **Funcionalidades**:
  - Navegação entre telas
  - Mapa interativo com marcadores
  - Listagem de estabelecimentos por categoria
  - Sistema de cupons
  - Geolocalização

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (v16+)
- npm ou yarn
- Expo CLI
- Android Studio ou Xcode (para emulador)
- Expo Go (para testar no dispositivo físico)

### 🔧 Configuração da API

1. **Navegue para o diretório da API:**
   ```bash
   cd api
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   ```bash
   cp .env.example .env
   # Edite o arquivo .env se necessário
   ```

4. **Configure o banco de dados:**
   ```bash
   npx prisma generate
   npx prisma db seed
   ```

5. **Descubra o IP da sua máquina (para configurar no mobile):**
   ```bash
   npm run get-ip
   ```

6. **Inicie o servidor:**
   ```bash
   npm start
   ```
   
   O servidor estará rodando em `http://localhost:3333`

### 📱 Configuração do Mobile

1. **Navegue para o diretório mobile:**
   ```bash
   cd mobile
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o IP da API (se necessário):**
   - O app detecta automaticamente se está em desenvolvimento ou produção
   - Para desenvolvimento, edite `src/services/api.ts` e altere `developmentIP`
   - Use o comando `npm run get-ip` na pasta da API para descobrir seu IP local

4. **Inicie o projeto:**
   ```bash
   npm start
   ```

5. **Execute no dispositivo:**
   - Use o Expo Go para escanear o QR code
   - Ou pressione `a` para Android / `i` para iOS (se tiver emulador configurado)

## 📋 Funcionalidades

### ✅ Funcionalidades Implementadas

- [x] Tela de boas-vindas com instruções
- [x] Listagem de categorias
- [x] Mapa interativo com marcadores dos estabelecimentos
- [x] Filtro de estabelecimentos por categoria
- [x] Detalhes do estabelecimento
- [x] Sistema de cupons
- [x] Navegação entre telas
- [x] API REST completa
- [x] Banco de dados com seed

### 🔄 Status do Projeto

**✅ PROJETO FUNCIONAL** - Ambas as partes (API e Mobile) estão executando corretamente.

#### API Status:
- ✅ Servidor rodando na porta 3333
- ✅ Banco de dados SQLite configurado
- ✅ Rotas funcionando:
  - `GET /categories` - Lista categorias
  - `GET /markets` - Lista estabelecimentos
  - `GET /markets/category/:id` - Filtra por categoria
  - `PATCH /coupons/:id` - Utiliza cupom

#### Mobile Status:
- ✅ Expo Metro Bundler rodando
- ✅ Navegação configurada (Expo Router)
- ✅ Componentes estilizados
- ✅ Integração com mapas
- ✅ Fontes customizadas carregadas

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **TypeScript** - Superset do JavaScript
- **Prisma** - ORM para banco de dados
- **SQLite** - Banco de dados
- **Zod** - Validação de schemas
- **CORS** - Middleware para Cross-Origin Resource Sharing
- **Crypto** - Para geração segura de cupons

### Frontend
- **React Native** - Framework mobile
- **Expo** - Plataforma de desenvolvimento
- **TypeScript** - Tipagem estática
- **Expo Router** - Navegação
- **React Native Maps** - Mapas nativos
- **Expo Location** - Geolocalização
- **Expo Camera** - Para leitura de QR codes
- **Axios** - Cliente HTTP

## 📁 Estrutura de Pastas

```
Pocket-Mobile/
├── api/                     # Backend da aplicação
│   ├── prisma/             # Configurações do banco
│   │   ├── schema.prisma   # Schema do banco
│   │   ├── seed.ts         # Dados iniciais
│   │   └── dev.db          # Banco SQLite
│   ├── scripts/            # Scripts utilitários
│   │   └── get-ip.js       # Script para descobrir IP local
│   ├── src/
│   │   ├── controllers/    # Controladores
│   │   ├── routes/         # Rotas da API
│   │   ├── database/       # Configuração Prisma
│   │   ├── middlewares/    # Middlewares (cache, CORS, etc)
│   │   └── server.ts       # Servidor principal
│   ├── .env.example        # Exemplo de configuração
│   └── package.json
├── mobile/                  # App React Native
│   ├── src/
│   │   ├── app/            # Telas (Expo Router)
│   │   ├── components/     # Componentes reutilizáveis
│   │   ├── services/       # Configuração da API
│   │   ├── styles/         # Temas e estilos
│   │   └── utils/          # Utilitários
│   ├── assets/             # Imagens e ícones
│   ├── .env.example        # Exemplo de configuração
│   └── package.json
└── README.md
```

## 🔧 Possíveis Melhorias

1. ~~**Configuração de IP automática**~~ ✅ **IMPLEMENTADO** - Detecta automaticamente o ambiente dev/prod
2. **Autenticação** - Sistema de login/registro
3. **Push notifications** - Notificações para novos cupons
4. ~~**Cache**~~ ✅ **IMPLEMENTADO** - Sistema de cache em memória na API
5. **Testes** - Adicionar testes unitários e E2E
6. **Docker** - Containerização do projeto

## � Melhorias Implementadas

### ✨ **Novos Recursos Adicionados (Além do Projeto Original NLW)**

#### 🔧 **API Backend**
- ✅ **CORS Configurado** - Permite requests cross-origin do mobile
- ✅ **Sistema de Cache** - Cache em memória para melhorar performance das consultas
- ✅ **Validações Aprimoradas** - Mensagens de erro mais específicas com Zod
- ✅ **Geração de Cupons Melhorada** - Cupons únicos com timestamp para evitar duplicatas
- ✅ **Transações no Banco** - Consistência garantida na atualização de cupons
- ✅ **Script de Descoberta de IP** - Comando `npm run get-ip` para facilitar configuração
- ✅ **Headers HTTP Adequados** - Content-Type e configurações de segurança

#### 📱 **Mobile App**
- ✅ **Configuração Dinâmica de Ambiente** - Detecta automaticamente dev/prod
- ✅ **Timeout Otimizado** - Aumentado de 700ms para 10s para conexões mais estáveis
- ✅ **Loading States** - Indicadores de carregamento na tela home
- ✅ **Validações de Parâmetros** - Verificação de IDs antes de navegação
- ✅ **Tratamento de Erros Melhorado** - Mensagens mais claras para o usuário

#### 🛡️ **Segurança e Performance**
- ✅ **Vulnerabilidades Corrigidas** - 0 vulnerabilidades no mobile (era 11)
- ✅ **Cache Automático** - Limpeza periódica de cache desnecessário
- ✅ **Validação de UUIDs** - Verificação rigorosa de IDs de markets e categorias
- ✅ **Middleware de Cache** - Cache de 10 minutos para categorias

### 🆚 **Comparação com o Projeto Original NLW**

| Funcionalidade | Projeto NLW Original | Versão Melhorada |
|---|---|---|
| **Configuração IP** | IP fixo hardcoded | ✅ Detecção automática de ambiente |
| **Timeout API** | 700ms (muito baixo) | ✅ 10 segundos (mais estável) |
| **Cache** | Sem cache | ✅ Sistema de cache inteligente |
| **CORS** | Não configurado | ✅ CORS adequado para mobile |
| **Validações** | Básicas | ✅ Validações robustas com mensagens |
| **Vulnerabilidades** | 11 vulnerabilidades | ✅ 0 vulnerabilidades |
| **Cupons** | Hash simples | ✅ Hash com timestamp único |
| **Loading States** | Básico | ✅ Loading granular por operação |
| **Descoberta IP** | Manual | ✅ Script automatizado |

## 🐛 ~~Problemas Conhecidos~~ ✅ **Problemas Resolvidos**

1. ~~**IP fixo na API**~~ ✅ **RESOLVIDO** - Configuração dinâmica implementada
2. ~~**Timeout baixo**~~ ✅ **RESOLVIDO** - Timeout aumentado para 10s
3. ~~**Vulnerabilidades**~~ ✅ **RESOLVIDO** - Todas as 11 vulnerabilidades corrigidas

### 🔧 **Comandos Úteis Adicionados**

```bash
# Descobrir IP local da máquina
cd api
npm run get-ip

# O comando irá mostrar:
# IP Local encontrado: 192.168.1.100
# Configure no mobile: http://192.168.1.100:3333
# Arquivo: mobile/src/services/api.ts
```

## 📝 Notas Adicionais

- **Projeto base**: Desenvolvido durante o evento NLW Pocket Mobile da Rocketseat
- **Melhorias**: Esta versão inclui otimizações de performance, segurança e usabilidade
- **Banco de dados**: Já vem populado com dados de exemplo para São Paulo
- **Coordenadas**: Configuradas para região da Avenida Paulista, São Paulo
- **Ambiente**: Detecta automaticamente desenvolvimento vs produção
- **Cache**: Sistema inteligente para melhorar performance da API
- **Segurança**: Todas as vulnerabilidades foram corrigidas

### 🎯 **Diferencial desta Versão**

Esta não é apenas uma cópia do projeto NLW, mas uma **versão aprimorada** com:
- ✅ Correções de problemas do projeto original
- ✅ Melhorias de performance e segurança  
- ✅ Facilidades para desenvolvedores (script de IP, configuração automática)
- ✅ Código mais robusto e profissional
- ✅ Documentação detalhada das melhorias

### 👨‍💻 **Créditos**

- **Projeto Original**: [Rocketseat](https://rocketseat.com.br) - NLW Pocket Mobile
- **Melhorias e Otimizações**: Alan Oliveira (@Alan-oliveir)

### 📋 **Changelog**

Para ver todas as mudanças e melhorias implementadas, consulte o arquivo [CHANGELOG.md](./CHANGELOG.md).
