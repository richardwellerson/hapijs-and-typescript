# Typescript - Vehicle Protection Company
## Initial Info

Hello!

This is my first experience with those technologies:

- Typescript
- TypeORM
- HapiJS
- Postgres

This repo contains an API about a Vehicle Protection Company.

Follow those steps to install:

1. Clone this repo,
2. Run shell dependencies.sh (Open terminal in this folder and runs ./dependencies.sh. <b>Needs password</b>.),
3. Check http://localhost:3000. Suggestion: Use Postman/Insomnia/Paw.
___
## Routes

<b>GET /</b>
```JSON
{
    "message": "Hey! Access README to understand how this api works.",
    "readme": "https://github.com/richardwellerson/hapijs-and-typescript/blob/master/README.md"
}
```
___
<b>POST /client</b>

<i>Request</i>
```JSON
{
    "name" : "Elias",
    "email" : "elias@jose.com",
    "password" : "123456",
    "phone" : "31947256131",
    "driverLicense" : "1697513645"
}
```

<i>Response</i>
```JSON
{
    "status": "Created.",
    "data": {
        "name": "Elias",
        "email": "elias@jose.com",
        "password": "123456",
        "phone": "31947256131",
        "driverLicense": "1697513645",
        "role": true
    }
}

```
___
<b>POST /vehicle</b>

<i>Request</i>
```JSON
{
    "licensePlate" : "PGK1740",
    "model" : "VW Fox 2017",
    "user" : 1
}
```
<i>Response</i>

```JSON
{
    "status": "Created.",
    "data": {
        "licensePlate": "PGK1740",
        "model": "VW Fox 2017",
        "user": 1
    }
}
```
___

<b>POST /crashevent</b>

<i>Request</i>
```JSON
{
    "client" : 1,
    "thirdParties" : 3,
    "details" : "The VW Fox hit on Chevrolet Opala."
}
```

<i>Response</i>
```JSON
{
    "status": "Created.",
    "data": {
        "client": 1,
        "thirdParties": 3,
        "details": "The VW Fox hit on Chevrolet Opala."
    }
}
```
___

More details will be added.