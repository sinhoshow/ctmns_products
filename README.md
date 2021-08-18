
# Requisitos
- [docker](https://docs.docker.com/engine/install/)
- [docker-compose](https://docs.docker.com/compose/install/)
- yarn ou npm



## Executar Localmente

Clonar o projeto

```bash
  git clone https://github.com/sinhoshow/ctmns_products.git
```

Ir para o diretório do projeto

```bash
  cd ctmns_products
```

Instalar dependências

```bash
  yarn
```

Iniciando ambiente (banco e servidor)

```bash
  docker-compose up -d
```

Configurando banco

```bash
  cp ormconfig.example.js ormconfig.js
```

Logs do servidor

```bash
  docker logs ctmns_products -f
```

Rodando migrations

```bash
  yarn typeorm migration:run
```

Rodando seed

```bash
  yarn seed:run
```

Acessando aplicação

- http://localhost:3333
- [Documentação](http://localhost:3333/api-docs/)



## Rodando testes

Para rodas os testes, executar o seguinte comando

```bash
  yarn test
```


## Acesso público

- O projeto foi hospedado em uma instância gratuita ES2 da AWS e está configurado CI/CD através das git actions

URL Pública: http://18.224.184.84/

