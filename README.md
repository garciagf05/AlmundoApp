# API - Almundo

A continuación se detalla como usar los servicios de la API.

# Heroku

Para el despliegue de la aplicación se empleó Heroku, la url donde se encuentran alojados los servicios es la siguiente:

**https://api-servicios-almundo.herokuapp.com/api**

## Listado de Hoteles
El listado de hoteles se obtiene a través del siguiente enlace:
Método: **GET** 
Endpoint:  https://api-servicios-almundo.herokuapp.com/api/hotels/list

Las posibles respuestas y ejemplos de respuesta y ejemplos son los siguientes:

Status: **200**
````
{
    "status": "successful",
    "message": "# hotel(s) was found",
    "hotels" : [
        {
            "images":[
                "https://url1.com"
            ],
            "_id": "ab1cd2ef3gh4ij5kl6mn7op8",
            "name": "Example Hotel",
            "stars": "3",
            "price": "100000",
            "country": "Colombia",
            "state": "Antioquia",
            "city": "Medellín",
            "address": "calle 1 10-20"
            "latitude": "6.0000000000",
            "longitude": "-75.000000000"         
        }
   ]
}
````

Status: **204**
````
{
    "status": "successful",
    "message": "0 hotels was found"
}
````
> El cuerpo del mensaje solo es visible a través de de un cliente previamente configurado como **Axios** o **Request**.

Status: **500**
````
{
    "status": "error",
    "message": "INTERNAL_SERVER_ERROR"
}
````


## Información de un hotel

La información de un hotel especifico se pude obtener a través del siguiente enlace:
Método: **GET** 
Endpoint:  https://api-servicios-almundo.herokuapp.com/api/hotels/info/:id

Estos son algunos id de prueba:
- 5e1dd4fb481c59b7b1675a82
- 5e1f131ac7ec85be65d615f0
- 5e1f1611c7ec85be65d72734

Las posibles respuestas y ejemplos de respuesta y ejemplos son los siguientes:

Status: **200**
````
{
    "status": "successful",
    "message": "A hotel was found",
    "hotel" : {
            "images":[
                "https://url1.com"
            ],
            "_id": "ab1cd2ef3gh4ij5kl6mn7op8",
            "name": "Example Hotel",
            "stars": "3",
            "price": "100000",
            "country": "Colombia",
            "state": "Antioquia",
            "city": "Medellín",
            "address": "calle 1 10-20"
            "latitude": "6.0000000000",
            "longitude": "-75.000000000"         
    }
}
````


Status: **204**
````
{
    "status": "successful",
    "message": "0 hotels was found"
}
````
> El cuerpo del mensaje solo es visible a través de de un cliente previamente configurado como **Axios** o **Request**.

Status: **500**
````
{
    "status": "error",
    "message": "INTERNAL_SERVER_ERROR"
}
````

## Desplegar en local

Para desplegar el proyecto de manera local ejecutar estos comandos en la raíz del proyecto:
- npm install
- npm run build && npm start

## Dependencias

Listado de dependencias  empleadas en el proyecto:

````
"dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "mongoose": "^5.8.7",
    "typescript": "^3.7.4"
}
````