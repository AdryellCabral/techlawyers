# API para cadastrar advogados

## Descrição
​
</br>
​
Backend de um app para cadastrar advogados.

</br>

## Rodando a aplicação

### IMPORTANTE!
> É necessário ter o mongodb instalado e rodando na sua máquina. Certifique-se de que o serviço dele está ativo com o seguinte comando:

```Shell
sudo service mongod status
```

> Para rodar a aplicação é necessário insalar as dependências, criar o arquivo .env como indica o .env.example e rodar com o comando 'yarn dev'

- Depois de clonar o projeto, dentro da pasta dele instale as dependências:

```Shell
yarn
```

- Com as dependências instaladas, crie o arquivo .env:

```Shell
cp .env.example .env
```
> Como a url para o banco de dados é o mongo rodando localmente, pode somente clonar o arquivo.

- Agora rode a aplicação:

```Shell
yarn dev
```

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
- Usar as views para redirecionar para páginas (no caso de front e back no mesmo app)
- Nomes mais descritivos
- Usar o Multer para receber foto de perfil no cadastro
- Mandar email de confirmação de cadastro com o nodemail
