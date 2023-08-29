# Refactor do Sistema de Cadastro

### Antes de começar

1. Entre na pasta `database-scripts` e abra um terminal nela.
        
2. Execute o seguinte comando para criar o banco de dados no seu computador:
        
    ```sql
    sudo bash ./create-database
    ```
        
3. Agora abra um terminal na pasta do back-end e execute o seguinte comando:
        
    ```bash
    npm i # para instalar todas as dependências
    ```

4. Para rodar o servidor, dê o comando abaixo:
        
    ```bash
    npm run dev
    ```

### Enunciado

- É importante dividir o nosso código em camadas para que possamos escalar com qualidade.
- O back-end dado neste exercício poderia estar mais bem organizado: todo o código da aplicação está no arquivo `src/app.js`. 
- Separe-o nas camadas `router`, `controller`, `service` e `repository`.