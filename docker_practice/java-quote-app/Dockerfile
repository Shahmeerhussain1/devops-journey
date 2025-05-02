FROM openjdk:25-jdk-slim

WORKDIR /app

COPY /src/Main.java .

COPY /src/quotes.txt .

EXPOSE 8000

CMD "java" "Main.java"
