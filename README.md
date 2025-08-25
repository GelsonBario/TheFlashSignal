### The Flash Signal App

## 📖 Sobre o Projeto

The Flash Signal é um aplicativo móvel, desenvolvido com React Native e Expo, que simula um "sinal de emergência" inspirado no universo do herói Flash. O app apresenta uma interface inicial temática que, ao ser acionada, revela um formulário para o usuário preencher dados de contato e localização. Após o envio, uma mensagem de sucesso é exibida, e o aplicativo retorna ao seu estado inicial.

Este projeto foi criado como um exercício prático para solidificar conceitos de desenvolvimento mobile, incluindo componentização, gerenciamento de estado e navegação simples entre telas.

# ✨ Funcionalidades
Tela Inicial Temática: Apresenta a logo do Flash e um botão de chamada ("The Flash Signal").

Formulário de Contato: Coleta informações essenciais como nome, telefone, localização e observações.

Navegação Condicional: O app alterna entre a tela inicial, o formulário e uma tela de sucesso sem o uso de uma biblioteca de navegação, controlando a visibilidade dos componentes através do estado.

Feedback Visual: Exibe uma mensagem de confirmação de envio por 3 segundos antes de retornar automaticamente à tela inicial.

Interface Responsiva e Estilizada: Os componentes foram estilizados para se adequar ao tema proposto.

# 🚀 Tecnologias Utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:

React Native: Framework para desenvolvimento de aplicativos móveis multiplataforma (iOS e Android) com JavaScript e React.

Expo: Plataforma e conjunto de ferramentas construídas sobre o React Native para facilitar o desenvolvimento, a construção e a implantação de apps.

TypeScript: Superset do JavaScript que adiciona tipagem estática ao código, aumentando a robustez e a manutenibilidade do projeto.

React Hooks: Foram utilizados principalmente o useState para gerenciar o estado dos componentes (como a visibilidade do formulário) e o useEffect para controlar o temporizador da mensagem de sucesso.

# 📂 Estrutura de Pastas

O projeto foi organizado de forma a separar responsabilidades, facilitando a manutenção e a escalabilidade. A estrutura principal é a seguinte:

```/FlashSignal
|
|-- /assets
|   |-- flash-logo.png
|
|-- /src
|   |-- /components
|   |   |-- /FlashButton
|   |   |   |-- FlashButton.tsx
|   |   |   |-- FlashButtonStyle.tsx
|   |   |
|   |   |-- /FlashContactForm
|   |   |   |-- ContactForm.tsx
|   |   |   |-- ContactFormStyle.tsx
|   |   |
|   |   |-- /FlashLogo
|   |   |   |-- FlashLogo.tsx
|   |   |   |-- FlashLogoStyle.tsx
|   |   |
|   |   |-- /SuccessMessage
|   |   |   |-- SuccessMessage.tsx
|   |   |   |-- SuccessMessageStyle.tsx
|   |
|   |-- /screen
|   |   |-- Home.tsx
|   |   |-- Style.tsx
|
|-- App.tsx
|-- package.json
|-- README.md
```

**/assets:** Contém todos os arquivos de mídia estáticos, como imagens e fontes.

**/src:** Pasta principal que contém todo o código-fonte da aplicação.

**/src/components:** Abriga os componentes reutilizáveis da aplicação. Cada componente possui sua própria pasta com o arquivo de lógica (.tsx) e o de estilo.

**/src/screen:** Contém as telas principais da aplicação. A tela Home é a tela central que organiza e exibe os componentes.

**App.tsx:** Ponto de entrada principal da aplicação.

# ⚙️ Como Executar o Projeto
Para executar este projeto localmente, siga os passos abaixo:

Clone o repositório:

```
git clone https://github.com/seu-usuario/the-flash-signal.git

```

*Navegue até a pasta do projeto:*

```
cd the-flash-signal
```
*Instale as dependências:*

```
npm install
```
*ou, se utilizar o Yarn:*

```
yarn install
```
*Inicie o servidor de desenvolvimento do Expo:*

```
npx expo start
```
Execute em um emulador ou dispositivo físico:

Após iniciar o servidor, um QR Code será exibido no terminal.

Baixe o aplicativo Expo Go na App Store (iOS) ou Google Play (Android).

Escaneie o QR Code com o aplicativo Expo Go para abrir o projeto no seu dispositivo.
