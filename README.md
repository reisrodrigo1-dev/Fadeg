# FADEG - E-commerce Platform

## 📋 Descrição

Plataforma de e-commerce desenvolvida para a FADEG (Faculdade de Direito de Guarulhos), oferecendo cursos online e presenciais, materiais didáticos e serviços educacionais.

## 🚀 Tecnologias Utilizadas

- **Next.js** - Framework React com SSR/SSG
- **TypeScript** - Tipagem estática
- **Material-UI** - Biblioteca de componentes
- **Zustand** - Gerenciamento de estado
- **Axios** - Cliente HTTP
- **NextAuth.js** - Autenticação
- **ReCAPTCHA** - Verificação de captcha

## 📦 Funcionalidades

### 🛒 E-commerce
- Catálogo de produtos e cursos
- Carrinho de compras
- Sistema de checkout
- Integração com meios de pagamento

### 👤 Autenticação
- Login/Cadastro de usuários
- Recuperação de senha
- Perfil do usuário
- Histórico de pedidos

### 📚 Cursos e Conteúdo
- Cursos de OAB (1ª e 2ª Fase)
- Pós-graduação
- Cursos de atualização profissional
- Materiais didáticos
- Recursos de IA para elaboração de peças

### 🎨 Interface
- Design responsivo
- Tema customizável
- Navegação intuitiva
- Componentes reutilizáveis

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Git

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/reisrodrigo1-dev/Fadeg.git
cd Fadeg
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Configure as seguintes variáveis no arquivo `.env.local`:
```env
# OpenAI API Key (para funcionalidades de IA)
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key_here

# Google reCAPTCHA
NEXT_PUBLIC_CAPTCHA_KEY=your_captcha_key_here
```

5. Execute o projeto:
```bash
npm run dev
```

## 📁 Estrutura do Projeto

```
├── components/          # Componentes reutilizáveis
├── pages/              # Páginas Next.js
├── pages-sections/     # Seções de páginas
├── public/             # Arquivos estáticos
├── src/
│   ├── components/     # Componentes específicos
│   ├── contexts/       # Contextos React
│   ├── data/          # Dados estáticos
│   ├── hooks/         # Hooks customizados
│   ├── models/        # Modelos de dados
│   ├── pages-sections/# Seções de páginas
│   ├── store/         # Estado global (Zustand)
│   ├── theme/         # Configuração de tema
│   └── utils/         # Utilitários
├── styles/            # Estilos globais
└── types/             # Tipos TypeScript
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter
- `npm run type-check` - Verifica tipos TypeScript

## 🌐 Deploy

O projeto está configurado para deploy no Vercel com as seguintes otimizações:

- **Static Generation** para páginas públicas
- **Server-Side Rendering** para páginas dinâmicas
- **Image Optimization** com Next.js
- **API Routes** para funcionalidades backend

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto é propriedade da FADEG e seu uso é restrito aos fins educacionais da instituição.

## 📞 Contato

**FADEG - Faculdade de Direito de Guarulhos**
- Website: [fadeg.com.br](https://fadeg.com.br)
- Instagram: [@fadegoficial](https://www.instagram.com/fadegoficial)

---

**Desenvolvido com ❤️ para a comunidade jurídica**
