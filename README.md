# FarmGo - Marketplace Agrícola

O **FarmGo** é uma plataforma desenvolvida com o objetivo de conectar pequenos produtores locais a consumidores finais, promovendo a agricultura familiar e facilitando o acesso a produtos frescos e sustentáveis.

---

## 📖 Sobre o Projeto e Contexto

Este portal foi criado como parte das atividades acadêmicas do curso de **Engenharia de Software da FIAP** (4º Semestre).

### A Origem do Repositório Atual
Inicialmente, o grupo desenvolveu **dois projetos paralelos e separados** que compartilhavam a mesma finalidade: dar vida ao ecossistema FarmGo. Com o avanço das disciplinas e a necessidade de preparar uma base estável para uma **futura etapa de testes de qualidade (QA e testes automatizados)**, as duas bases de código foram consolidadas e unificadas neste único repositório atual. 

Esta unificação servirá como o projeto base definitivo para as práticas de controle de qualidade, validação de fluxos e testes de software.

---

## 🚀 Como Clonar e Rodar o Projeto Localmente

Siga o passo a passo abaixo para colocar a aplicação para funcionar em sua máquina local.

### 📋 Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:
* **Node.js** (versão LTS recomendada)
* **NPM** (instalado automaticamente junto com o Node) ou **Yarn**
* **Git**

### 1. Clonar o Repositório
Abra o terminal em sua máquina e execute o comando abaixo para clonar este projeto:
```bash
git clone https://github.com/qa-eduarda/farmgo-qa-project.git
```

### 2. Acessar a Pasta do Projeto
Navegue para o diretório que foi criado:
```bash
cd farmgo-qa-project
```

### 3. Instalar as Dependências
Instale todos os pacotes e dependências necessárias listadas no `package.json`:
```bash
npm install
```

### 4. Executar a Aplicação em Modo de Desenvolvimento
Para iniciar o servidor local de desenvolvimento, execute:
```bash
npm start
```
Após o processo de inicialização, a aplicação abrirá automaticamente no seu navegador padrão no endereço:
👉 [http://localhost:3000](http://localhost:3000)

Se o código for alterado, a página recarregará automaticamente no navegador. Os alertas de lint ou possíveis erros de compilação aparecerão no console do terminal.

---

## 🛠️ Scripts Disponíveis (Create React App)

Este projeto foi inicializado utilizando o [Create React App](https://github.com/facebook/create-react-app). Abaixo estão os comandos padrões fornecidos pelo ecossistema do React para o gerenciamento do projeto:

### `npm start`
Executa o aplicativo em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

### `npm test`
Inicia o executor de testes em modo de observação interativa (watch mode).\
Consulte a documentação do Create React App sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests) para obter mais informações.

### `npm run build`
Compila o aplicativo de forma otimizada para o ambiente de produção dentro da pasta `/build`.\
O build é minificado e os nomes dos arquivos contêm hashes únicos para controle de cache. O projeto estará pronto para deploy!

Consulte a documentação do Create React App sobre [deploy em produção](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

### `npm run eject`
> [!WARNING]
> **Esta é uma operação sem volta! Uma vez executado o comando `eject`, você não poderá retornar ao estado anterior.**

Se você não estiver satisfeito com as configurações padrões e ferramentas de build pré-configuradas (Webpack, Babel, ESLint, etc.), você pode rodar este comando a qualquer momento. Ele removerá a dependência única de build do seu projeto e copiará todos os arquivos de configuração diretamente para a raiz do seu repositório para que você tenha controle total sobre eles.

---

## 📚 Saiba Mais

Para aprender mais sobre as ferramentas utilizadas:
* Documentação Oficial do [Create React App](https://facebook.github.io/create-react-app/docs/getting-started).
* Documentação Oficial do [React](https://reactjs.org/).
