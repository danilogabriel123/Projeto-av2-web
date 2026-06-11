Projeto AV2 - Web
=================

Resumo
------

O objetivo deste projeto é a confecção de um e-commerce basico, com lista de produtos, detalhes, carrinho, cadastro de usuários via banco de dados MongoDB. Ele foi desenvolvido com Node.js para o backend juntamente com Vite e React para o frontend. 

Por que este README?
--------------------

Esse README foi desenvolvido para um melhor entendimento sobre o projeto e os requisitos para rodá-lo em sua máquina de forma simples e direta.

Estrutura principal
-------------------

- ProjetoWeb/ - frontend (Vite + React);
- server/ - backend (Node.js, servidor Express ou similar);
- banco_config/ - scripts para popular o banco de dados;
- modelos/ - modelos Mongoose (ou equivalente) para Usuario, Produto, Pedido.

Passo a passo de como rodar o projeto
--------------------------

Requisitos: ter node e npm instalados.

1) Instalar dependências do frontend:

bash
cd ProjetoWeb
npm install
npm run dev


Isso deve iniciar o servidor de desenvolvimento do frontend (Vite). Abra o endereço mostrado no terminal (normalmente http://localhost:5173).

2) Instalar e rodar o backend:

bash
cd server
npm install
node server.js


Ou verifique package.json dentro de server/ para scripts alternativos (npm start, npm run dev).

3) Banco de dados

Se houver um script para popular o banco de dados, ele está em banco_config/. Execute-o conforme instruções (ex.: node banco_config/preencherBanco.js) — lembre-se de ter o banco em execução e as variáveis de ambiente configuradas.

Variáveis de ambiente importantes
-------------------------------

- MONGO_URI — string de conexão com o MongoDB.
- JWT_SECRET — segredo para assinar tokens (se o projeto usar autenticação JWT).
- PORT — porta do servidor backend (opcional).

Verifique os arquivos de configuração ou a documentação interna para confirmar nomes e formatos exatos.

Scripts úteis
------------

- Frontend: ver ProjetoWeb/package.json (dev, build, preview).
- Backend: ver server/package.json (start, dev).

O que você pode testar rápido
---------------------------

- Abrir a página inicial e verificar a listagem de produtos.
- Fazer login/cadastro (se implementado) e simular um pedido até a página de checkout.

Dicas e observações
-------------------

- Se algo não subir, olhe o console do terminal: mensagens de erro normalmente explicam o problema (dependência ausente, porta em uso, variável de ambiente faltando).
- Para ajustar a API, confira server/server.js e os arquivos em modelos/ e servicos/.

Contribuição
-----------

Se encontar algum erro ou precisar alterar algo para a melhoria do projeto, abra um issue, descreva o problema ou faça um fork, crie uma branch e com as alteraç~oes feitas, abra um Pull Request.