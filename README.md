<div align="center">

[![CI Test](https://github.com/gabrizord/GZGestao/actions/workflows/test-maven.yml/badge.svg)](https://github.com/gabrizord/GZGestao/actions/workflows/test-maven.yml)
[![build](https://github.com/gabrizord/GZGestao/actions/workflows/maven.yml/badge.svg)](https://github.com/gabrizord/GZGestao/actions/workflows/maven.yml)
[![Build and Deploy to VPS](https://github.com/gabrizord/GZGestao/actions/workflows/deploy.yml/badge.svg)](https://github.com/gabrizord/GZGestao/actions/workflows/deploy.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=gabrizord_GZGestao&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=gabrizord_GZGestao)
</div>
<div align="center">

![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![Thymeleaf](https://img.shields.io/badge/Thymeleaf-005F0F?style=for-the-badge&logo=thymeleaf&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
</div>

# GZGestão - Manutenção e Preventivas
Este projeto é um sistema de gerenciamento de manutenção e preventivas, projetado para automatizar e facilitar a gestão de manutenções em empresas diversas. 
Inclui funcionalidades para autenticação de usuários, gestão de funcionários e empresas, solicitações de manutenção, e muito mais.

# Funcionalidades
- **Autenticação e Autorização**: Gerencie o acesso ao sistema com roles definidas para administradores e técnicos.
- **Gestão de Colaboradores**: CRUD completo para gerenciamento de funcionários.
- **Gestão de Empresas**: CRUD completo para gerenciamento de Empresas.
- **Gestão de Solicitações de Manutenção**: CRUD para gerenciamento e registro de solicitações de manutenção.
- **Relatórios e Dashboards**: Visualização de dados estatísticos e operacionais.
- **Notificações**: Sistema de notificações para manter usuários informados sobre atualizações importantes.

# Pré-requisitos
- Java JDK 21 ou superior
- Maven 3.6 ou superior
- PostgreSQL

# Configuração Inicial
1. Clone o repositório:
   ```bash
   git clone github.com/gabrizord/GZGestao.git

2. Gere as chaves RSA para JWT:
   ```bash
   openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
   openssl rsa -pubout -in private_key.pem -out public_key.pem

3. Adicione as chaves ao arquivo de propriedades de desenvolvimento
   application-dev.yml:
   ````yaml
   jwt:
      public:
         key: |
            -----BEGIN PUBLIC KEY-----
            MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7QmG...-----END PUBLIC KEY-----
     private:
         key: |
            -----BEGIN PRIVATE KEY-----
            MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQClKcMZ...-----END PRIVATE KEY-----

4. Configurando o banco de dados:
   ````bash
   Certifique-se de que o PostgreSQL está instalado e rodando. 
   Crie um banco de dados para a aplicação e configure as variáveis de ambiente necessárias no arquivo application-dev.yml ou no seu ambiente de desenvolvimento.

5. Executando a Aplicação:
   Para iniciar a aplicação localmente com o perfil de desenvolvimento, certifique-se de que as variáveis de ambiente estão configuradas corretamente.
   Utilize o perfil `dev` do Maven ao executar o seguinte comando:
   ```bash
   mvn spring-boot:run -Pdev

6. Executando Testes
   Para executar os testes unitários e de integração utilizando o perfil de testes, utilize o seguinte comando:
   **Atenção:** Certifique-se de que as chaves JWT (`JWT_PUBLIC_KEY` e `JWT_PRIVATE_KEY`) estejam corretamente configuradas nas variáveis de ambiente antes de executar a aplicação ou os testes.
   ````bash
   mvn test