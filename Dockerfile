# Use uma imagem base do JDK 21
FROM openjdk:21-jdk-slim

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos fonte do seu projeto para o diretório de trabalho
COPY . .

# Certifique-se de que o Maven Wrapper tenha permissões de execução
RUN chmod +x mvnw

# Execute a aplicação diretamente
CMD ["./mvnw", "spring-boot:run"]
