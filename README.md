# Desafio Docker Go

## Descrição

Desafio de criar uma imagem docker comi:
 - Um programa em Go que imprime "Full Cycle Rocks!!"
 - A imagem tem que ter menos de 2MB
 - Deve ser disponibilizada no Docker Hub

## Como rodar

### Docker Hub
Imagem no docker hub: https://hub.docker.com/repository/docker/felipefinhane/fc-docker-desafio-go

```bash
docker run felipefinhane/fc-docker-desafio-go
```

## Localmente

```bash
docker build -t go-docker .
docker run go-docker
```


