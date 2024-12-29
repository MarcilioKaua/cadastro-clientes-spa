# Cadastro de Clientes SPA

Este projeto é uma aplicação web desenvolvida em **Java** usando **Spring Boot** no back-end e **Angular** no front-end. Ele permite gerenciar o cadastro de clientes, integrando-se ao serviço **ViaCEP** para buscar endereços automaticamente com base no CEP. A aplicação utiliza **JPA** para persistência e **H2 Database** para armazenamento temporário dos dados.

---

## 🚀 Tecnologias Utilizadas

- **Java 17**
- **Spring Boot**
- **JPA**
- **Angular**
- **H2 Database**
- **ViaCEP API**

---

## 🔧 Funcionalidades Implementadas

### Back-End

- **Cadastro de Clientes**: Adicionar informações de clientes.
- **Listagem de Clientes**: Exibir todos os clientes cadastrados.
- **Edição de Clientes**: Atualizar informações dos clientes cadastrados.
- **Exclusão de Clientes**: Remover clientes cadastrados.
- **Busca de Endereço**: Integração com o serviço **ViaCEP** para busca automática de endereço por CEP.

### Front-End

- Interface amigável para gerenciar clientes.
- Comunicação com o back-end por meio de APIs REST.
- Máscaras aplicadas nos campos de entrada para guiar o usuário e formatar automaticamente os dados inseridos.
- Regras de validação implementadas nos formulários para garantir a consistência dos dados.

---

## 🛠️ Configuração do Ambiente

### Pré-requisitos

#### Back-End:
- **Java 17** instalado
- **Maven** instalado

#### Front-End:
- **Node.js** instalado
- **Angular CLI** instalado globalmente (`npm install -g @angular/cli`)

---

## ⚙️ Configuração do Projeto

### Clonar o Repositório

1. Clone o repositório para seu ambiente local:
   ```bash
   git clone https://github.com/MarcilioKaua/cadastro-clientes-spa.git

### Back-End

1. Navegue para a pasta `cadastro-cliente-api`

2. Certifique-se de que o **Java 17** e o **Maven** estão instalados no seu ambiente.

3. Se necessário instale as dependências do maven, abrindo a opção do maven e selecionando Reload All Maven Projects

### Front-End

1. Navegue para a pasta do front-end `cadastro-cliente-angular`

2. Instale as dependências do Angular:
   ```bash
   npm install
   
## ▶️ Executando a Aplicação

### Back-End

1. Execute o projeto rodando a classe CadastroClienteApiApplication

2. O back-end será iniciado na porta 8085. As principais rotas disponíveis são:

- Listar Clientes: GET http://localhost:8085/api/cliente/listar
- Salvar Cliente: POST http://localhost:8085/api/cliente/salvar
- Editar Cliente: PUT http://localhost:8085/api/cliente/{id}
- Excluir Cliente: DELETE http://localhost:8085/api/cliente/{id}
- Buscar Endereço pelo CEP: POST http://localhost:8085/api/cliente/buscarEndereco

### Front-End

1. Inicie o servidor de desenvolvimento Angular:
    ```bash
    ng serve

2. O front-end estará disponível em:
   ```bash
   http://localhost:4200/clientes

## 🗄️ Acesso ao Console do H2

1. Durante a execução da aplicação, o console do banco de dados H2 estará disponível no seguinte endereço:

   ```bash
   http://localhost:8085/h2-console

2. Detalhes da Configuração
- Driver Class: org.h2.Driver
- JDBC URL: jdbc:h2:mem:testdb
- User Name: sa
- Password: (Deixar em branco)

## 📝 Observações

- O banco de dados H2 é configurado para rodar em memória, o que significa que os dados serão apagados quando a aplicação for encerrada.
