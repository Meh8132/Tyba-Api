### Building and running your application

When you're ready, start your application by running:
`docker compose up --build`.

Your application will be available at http://localhost:3000.

### Deploying your application to the cloud

First, build your image, e.g.: `docker build -t myapp .`.
If your cloud uses a different CPU architecture than your development
machine (e.g., you are on a Mac M1 and your cloud provider is amd64),
you'll want to build the image for that platform, e.g.:
`docker build --platform=linux/amd64 -t myapp .`.

Then, push it to your registry, e.g. `docker push myregistry.com/myapp`.

Consult Docker's [getting started](https://docs.docker.com/go/get-started-sharing/)
docs for more detail on building and pushing.

### References
* [Docker's Node.js guide](https://docs.docker.com/language/nodejs/)
## Variables de entorno
Las variables de entorno necesarias son:
```
GOOGLE_API_KEY= {GOOGLE_API_KEY}
JWT_SECRET= {JWT_SECRET}
DATABASE_URL= {postgres://postgres:CHGjcu@localhost:5434/tybaDB}
```
## Ejecutar localmente
Para ejecutar localmente sin usar docker primero es necesario instalar las dependencias usando

```npm install```

Luego es necesario levantar la base de datos usando 

```docker compose up db -d```

Finalmente, se puede ejecutar usando 

```npm run start```

## Documentación de API:

El link de la documentación y las peticiones usadas como prueba es: https://documenter.getpostman.com/view/21069316/2sAXjNZXGC
