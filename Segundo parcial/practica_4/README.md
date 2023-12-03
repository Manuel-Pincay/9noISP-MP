# Taller 4 - Segundo Parcial

### ESTUDIANTE:

- Lucas Lucas Caroline


## Documentacion del taller

### Crear repositorio
El primer paso es crear un repositorio en Git Y subir la codificacion

![Alt text](/images/image.png)

Usamos los comandos para subir el codigo fuente

![Alt text](/images/image-1.png)

### Crear Docker_User y Docker_Password

Crear los Secrets Docker_User y Docker_Password en la Plataforma GITHUB

![Alt text](/images/image-2.png)

Agregamos un nuevo secret 

![Alt text](/images/image-3.png)

Tendremos los secrets creados dentro del repositorio

![Alt text](/images/image-4.png)

Dentro de Docker Hub debemos crear el Token y copiarlo para usarlo en Docker_Password

![Alt text](/images/image-5.png)

### Docker y Docker Hub

Dockerizamos el codigo y creamos la imagen en Docker Hub:

```
docker build --target dev-deps -t tagname .
```

![Alt text](/images/image-6.png)

```
docker build --target builder -t tagname .
```

![Alt text](/images/image-7.png)

```
docker build --target prod-deps -t tagname .
```

![Alt text](/images/image-8.png)

```
docker build --target prod -t tagname .
```

![Alt text](/images/image-9.png)

```
docker build --tag carol018/docker-graphql:0.0.1 .
```

![Alt text](/images/image-10.png)

```
docker push carol018/docker-graphql:0.0.1
```

![Alt text](/images/image-11.png)

![Alt text](/images/image-12.png)

### Agregar el Workflow

![Alt text](/images/image-13.png)

Realizamos cambios en el repositorio para mostrar que el Actions y el Docker Hub realizan los cambios correctamente

![Alt text](/images/image-14.png)

![Alt text](/images/image-15.png)