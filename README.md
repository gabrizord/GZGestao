# GZ Gestão de Manutenção e Preventivas

[![CI Test](https://github.com/gabrizord/GZGestao/actions/workflows/test-maven.yml/badge.svg)](https://github.com/gabrizord/GZGestao/actions/workflows/test-maven.yml)
[![build](https://github.com/gabrizord/GZGestao/actions/workflows/maven.yml/badge.svg)](https://github.com/gabrizord/GZGestao/actions/workflows/maven.yml)

Este projeto é um sistema de gerenciamento de manutenção e preventivas, projetado para automatizar e facilitar a gestão de manutenções em empresas diversas. Inclui funcionalidades para autenticação de usuários, gestão de funcionários e empresas, solicitações de manutenção, e muito mais.

## Funcionalidades

- **Autenticação e Autorização**: Gerencie o acesso ao sistema com roles definidas para administradores e técnicos.
- **Gestão de Colaboradores**: CRUD completo para gerenciamento de funcionários.
- **Gestão de Empresas**: CRUD completo para gerenciamento de Empresas.
- **Gestão de Solicitações de Manutenção**: CRUD para gerenciamento e registro de solicitações de manutenção.
- **Relatórios e Dashboards**: Visualização de dados estatísticos e operacionais.
- **Notificações**: Sistema de notificações para manter usuários informados sobre atualizações importantes.

## Tecnologias Utilizadas

- **Back-end**: Spring Boot
- **Front-end**: Thymeleaf integrado ao Spring MVC
- **Banco de Dados**: PostgreSQL

### Pré-requisitos

- Java JDK 17 ou superior
- Maven 3.6 ou superior
- PostgreSQL

### Configuração

1. Clone o repositório:
   ```bash
   git clone [URL do repositório]

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

4. Executando a Aplicação
   Para iniciar a aplicação localmente com o perfil de desenvolvimento, certifique-se de que as variáveis de ambiente estão configuradas corretamente e execute:
   ````bash
   mvn spring-boot:run -Dspring-boot.run.profiles=dev

5. Executando Testes
   Para executar os testes, utilize o comando:
   ````bash
   mvn test
