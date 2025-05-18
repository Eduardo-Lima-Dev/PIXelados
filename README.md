
<div align="center">
  <h1>PIXelados</h1>
  <h3>Aplicativo de Controle de Despesas Compartilhadas</h3>
  <p>
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Em%20Desenvolvimento-FF5722?style=for-the-badge" alt="Em Desenvolvimento" />
  </p>
</div>

## 📋 Sobre o Projeto

**PIXelados** é uma aplicação web que facilita o controle de despesas em residências compartilhadas. Com funcionalidades como registro de despesas, divisão automática de valores e compartilhamento via link, o aplicativo visa simplificar a gestão financeira entre moradores.

### Principais Funcionalidades

- Criação e autenticação de contas de usuário
- Registro de despesas com opções de recorrência e compartilhamento
- Visualização do status de pagamento de cada despesa
- Cálculo automático do valor total e divisão igualitária entre moradores
- Filtros por categoria, usuário e status de pagamento
- Compartilhamento de despesas via link de convite
- Cadastro e visualização da chave Pix de cada usuário

## 🚀 Tecnologias Utilizadas

- **Framework**: Next.js
- **Banco de Dados**: PostgreSQL
- **Estilização**: Tailwind CSS
- **Linguagem**: TypeScript
- **ORM**: Prisma
- **Autenticação**: NextAuth.js
- **Validações**: Zod
- **Formulários**: React Hook Form
- **Testes**: Jest e React Testing Library

## 🔧 Requisitos

- Node.js (v14.x ou superior)
- npm
- PostgreSQL

## ⚙️ Instalação e Configuração

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/pixelados.git
   cd pixelados
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env.local
   # Edite o arquivo .env.local com suas configurações
   ```

4. **Configure o banco de dados**
   ```bash
   npx prisma migrate dev
   ```

5. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

   O aplicativo estará disponível em `http://localhost:3000`.

## 📦 Estrutura do Projeto

```
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── services/
│   ├── store/
│   ├── styles/
│   └── types/
├── prisma/
└── next.config.js
```

## 🌲 Padrão de Branches

### Nomenclatura
- **✨ Feature** - Para novas funcionalidades
- **🐛 Bugfix** - Para correção de bugs
- **🚨 Hotfix** - Para correções urgentes
- **🚀 Release** - Para novas versões
- **📚 Docs** - Para documentação

### Exemplos

#### Nova Funcionalidade
```bash
git checkout -b Feature-Criacao-Tela-de-Login
```
#### Correção de Bug
```bash
git checkout -b Bugfix-Erro-Upload-Imagem
```
#### Correção Urgente
```bash
git checkout -b Hotfix-Falha-Seguranca-Login
```
#### Nova Versão
```bash
git checkout -b Release-v1.0.0
```
#### Documentação
```bash
git checkout -b Docs-Atualizacao-README
```

## 📝 Padrão de Commits

### Estrutura do Commit
```
<emoji> <tipo>(<escopo>): <descrição>
```

### Exemplo
```
✨ feat(auth): implementar tela de login
```

### Prefixos (tipos)
- **✨ feat**: Nova funcionalidade
- **🔨 refac**: Refatoração
- **🐛 fix**: Correção de bugs
- **📚 docs**: Documentação
- **💅 style**: Estilo e formatação

### Escopos Comuns
- **auth** - Autenticação
- **dashboard** - Dashboard principal
- **tasks** - Gerenciamento de tarefas
- **ui** - Interface do usuário
- **api** - Integrações com API
- **state** - Gerenciamento de estado
- **tests** - Testes

### Exemplos de Commits

#### Nova Funcionalidade
```bash
git commit -m "✨ feat(auth): implementar login com Google"
```
#### Refatoração
```bash
git commit -m "🔨 refac(components): reorganizar estrutura de componentes"
```
#### Correção de Bug
```bash
git commit -m "🐛 fix(ui): corrigir responsividade do menu"
```
#### Documentação
```bash
git commit -m "📚 docs(components): adicionar documentação de componentes"
```
#### Estilo
```bash
git commit -m "💅 style(ui): ajustar tema e paleta de cores"
```

## 🔄 Fluxo de Trabalho

1. Crie uma nova branch a partir da main:
```bash
git checkout main
git pull origin main
git checkout -b Feature-Nova-Funcionalidade
```

2. Faça seus commits seguindo o padrão estabelecido

3. Envie para o repositório:
```bash
git push origin Feature-Nova-Funcionalidade
```

4. Abra um Pull Request para a main

## 🧪 Testes

#### Executar todos os testes
```bash
npm test
```
#### Executar testes com relatório de cobertura
```bash
npm run test:coverage
```
#### Executar testes em modo de observação
```bash
npm run test:watch
```

## 📱 Responsividade

- Mobile: 375px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1440px+

## 🚀 Build e Implantação

```bash
npm run build
npm start
```