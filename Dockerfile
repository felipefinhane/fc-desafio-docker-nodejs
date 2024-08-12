FROM golang:alpine3.20 as builder
run mkdir /app
add . /app

WORKDIR /app

RUN go build -o main .

FROM scratch
COPY --from=builder /app/main /app/main
CMD ["/app/main"]
