# Harry Potter Character Cards

Este projeto é uma aplicação React que exibe uma lista de personagens do universo Harry Potter. A aplicação faz uma chamada a uma API para buscar dados dos personagens e os exibe em cards interativos com um efeito de flip. O projeto também inclui a funcionalidade de carregar mais personagens conforme necessário.

## Sumário

- [Descrição do Projeto](#descrição-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Configuração do Projeto](#configuração-do-projeto)
- [Uso](#uso)
- [Testes](#testes)
- [Licença](#licença)

## Descrição do Projeto

O projeto é uma aplicação React que busca dados de personagens do universo Harry Potter a partir de uma API pública. Os dados são exibidos em cards que podem ser girados para mostrar mais informações. A aplicação suporta a funcionalidade de carregamento de mais personagens quando o botão "Carregar Mais" é clicado.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Sass**: Pré-processador CSS para estilização.
- **Jest**: Framework de testes para JavaScript.
- **React Testing Library**: Biblioteca para testes de componentes React.
- **ESLint**: Ferramenta de linting para garantir a qualidade do código.

## Configuração do Projeto

Para configurar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/vinicius3g/lp-harry-potter.git
   cd lp-harry-potter 

2. **Instale as dependências:**

   ```bash
    npm install

    ou
  
    yarn install

3. **Inicie o servidor de desenvolvimento:**

   ```bash
    npm start

    ou
  
    yarn install

## Uso

A aplicação exibe uma lista de personagens em cards. Cada card mostra a imagem e o nome do personagem na frente e informações detalhadas na parte de trás. Você pode carregar mais personagens clicando no botão "Carregar Mais" no final da lista.

## Testes de Componentes

Os testes do componente CharacterCard verificam se os dados do personagem são exibidos corretamente e se o efeito de flip está funcionando. O teste do componente App garante que a chamada à API funciona e o botão "Carregar Mais" carrega mais personagens como esperado.

## Licença

Este projeto é licenciado sob a MIT License.