# Use uma imagem base do JDK 17
FROM openjdk:21-jdk-slim

# Define o diretório de trabalho dentro do contêiner
WORKDIR /home/gabrizord/projects

# Copie os arquivos fonte do seu projeto para o diretório de trabalho
COPY . .

# Execute a aplicação diretamente
CMD ["./mvnw", "spring-boot:run"]
