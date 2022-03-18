# API para cadastrar advogados

## Descrição
​
</br>
​
Backend de um app para cadastrar advogados.

</br>

## Tecnologias:

- Linguagem:
  - Javascript/NodeJS
- Framework:
  - ExpressJS
- Banco de dados:
  - MongoDB

​<br>


## Endpoints

### Cadastro

#### POST `/api/register/`

> Rota responsável pela criação de novo registro.

- Corpo requisição:

```json
{
	"before_name": "Sr.",
	"name": "Saul Goodman",
	"email": "bettercallsaul@email.com",
	"phone_number": "31984578453",
	"state": "MG",
	"oab_num": "12345645678"
}
```

- Corpo da resposta:

```json
{
	"user": {
		"before_name": "Sr.",
		"name": "Saul Goodman",
		"email": "bettercallsaul@email.com",
		"phone_number": "31984578453",
		"state": "MG",
		"oab_num": "12345645678",
		"_id": "6233c7ee244ff61f7aee6d3f",
		"createdAt": "2022-03-17T23:44:46.598Z",
		"__v": 0
	}
}
```

- Status: 201 CREATED
- Caso haja a tentativa de cadastro de um email já utilizado, vai responder com HTTP 400 - Bad Request.
- Caso falte algum dos campos necessários, o sistema responde com HTTP 400 - Bad Request.

<br>

### List lawyers

#### GET `/api/list_lawyers`

> Rota responsável por listar todos os registros. 

- Corpo requisição:

```json

```

- Corpo da resposta:

```json
[
    {
		"before_name": "Sr.",
		"name": "Saul Goodman",
		"email": "bettercallsaul@email.com",
		"phone_number": "31984578453",
		"state": "MG",
		"oab_num": "12345645678",
		"_id": "6233c7ee244ff61f7aee6d3f",
		"createdAt": "2022-03-17T23:44:46.598Z",
		"__v": 0
	}
]
```

- Status: 200 OK

<br>

### Update

#### PUT `/api/update_lawyer/:id`

> Rota responsável pela atualização de um registro. Por questões de agilidade, só atualiza o objeto inteiro, por isso o método PUT.

- Corpo requisição:

```json
{
	"before_name": "Sr.",
	"name": "Saul Goodman",
	"email": "bettercallsaul@email.com",
	"phone_number": "31984578453",
	"state": "MG",
	"oab_num": "12345645678"
}
```

- Corpo da resposta:

```json
{
	"msg": "Succesfully saved."
}
```

- Status: 200 OK
- Caso falte algum dos campos necessários, o sistema responde com HTTP 400 - Bad Request.

<br>

### Delete

#### DELETE `/api/delete_lawyer/:id`

> Rota responsável por deletar registro a partir do ID.

- Corpo requisição:

```json

```

- Corpo da resposta:

```json
{
	"msg": "Lawyer removed!"
}
```

- Status: 200 OK

<br>

### Listando os 5 registros mais recentes

#### GET `/api/list_last_5`

> Rota responsável por listar os 5 registros mais recentes.

- Corpo requisição:

```json
```

-Corpo da resposta:

```json
[
	{
		"_id": "6233c502b80b657853815298",
		"before_name": "Sr.",
		"name": "bAdryell Cabral primeirissimo",
		"email": "adryeaaaaaaaaaaaaall@mail.com",
		"phone_number": "31984578453",
		"state": "MG",
		"oab_num": "123456",
		"createdAt": "2022-03-17T23:32:18.302Z",
		"__v": 0
	},
	{
		"_id": "6233c4a7b80b657853815291",
		"before_name": "Sr.",
		"name": "Adryell Cabral primeirissimo",
		"email": "adryeaaaaaaaaaaaall@mail.com",
		"phone_number": "31984578453",
		"state": "MG",
		"oab_num": "123456",
		"createdAt": "2022-03-17T23:30:47.681Z",
		"__v": 0
	},
	{
		"_id": "6233c4545b5f8d5802babbbf",
		"before_name": "Sr.",
		"name": "Adryell Cabral primeiro",
		"email": "adryeaaaaaaaaaaall@mail.com",
		"phone_number": "31984578453",
		"state": "MG",
		"oab_num": "123456",
		"createdAt": "2022-03-17T23:29:24.359Z",
		"__v": 0
	},
	{
		"_id": "6233c4445b5f8d5802babbbb",
		"before_name": "Sr.",
		"name": "Adryell Cabral",
		"email": "adryeaaaaaaaaaall@mail.com",
		"phone_number": "31984578453",
		"state": "MG",
		"oab_num": "123456",
		"createdAt": "2022-03-17T23:29:08.440Z",
		"__v": 0
	},
	{
		"_id": "6233c1ec1ea131b0f542ca44",
		"before_name": "Sr.",
		"name": "Adryell Cabral alterado denovo",
		"email": "adryell@mail.com",
		"phone_number": "31984578453",
		"state": "MG",
		"oab_num": "123456",
		"createdAt": "2022-03-17T23:19:08.475Z",
		"__v": 0
	}
]
```


### Listando em ordem alfabética

#### GET `/api/list_alphabetic`

> Rota para listar todos os registros em ordem alfabética.

- Corpo da requisição

```json
```

- Corpo da resposta

```json
[
    {
		"_id": "6233c4545b5f8d5802babbbf",
		"before_name": "Sr.",
		"name": "Adryell Cabral primeiro",
		"email": "adryeaaaaaaaaaaall@mail.com",
		"phone_number": "31984578453",
		"state": "MG",
		"oab_num": "123456",
		"createdAt": "2022-03-17T23:29:24.359Z",
		"__v": 0
	},
	{
		"_id": "6233c502b80b657853815298",
		"before_name": "Sr.",
		"name": "bAdryell Cabral primeirissimo",
		"email": "adryeaaaaaaaaaaaaall@mail.com",
		"phone_number": "31984578453",
		"state": "MG",
		"oab_num": "123456",
		"createdAt": "2022-03-17T23:32:18.302Z",
		"__v": 0
	}
]
```


### Pontos de melhoria

> Por falta de tempo não foi possível fazer tudo o que eu queria ter feito.

- Validação dos dados do request com Yup e middlewares para gerenciar isso
- Testes unitáirios
- Deploy no heroku para o front funcionar independente
- Arquivos melhor estruturados
- Usar as views para retornar para páginas
- Nomes mais descritivos

