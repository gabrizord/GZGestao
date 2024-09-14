/*
 * File: data-dev.sql
 * Description: This script contains sample data to populate the development database.
 *              It is intended for use in the development environment to seed the database
 *              with initial data for testing and development purposes.
 *
 * Environment: Development
 *
 * Note: Do not use this script in a production environment.
 */

INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (7, 'Porto Alegre', '44556677000134', 'contato@deltasistemas.com', '44556677889901', '4314902', 'Savassi', 'Delta Sistemas', '400', '90420040', 'Delta Sistemas Ltda', 'RS', 1, 'Avenida Delta', '51987654321') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (9, 'Florianópolis', '66778899000156', 'contato@zetalogistica.com', '66778899001123', '4205407', 'Centro Cívico', 'Zeta Log', '600', '88010001', 'Zeta Logística ME', 'SC', 9, 'Avenida Zeta', '48987654321') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (10, 'Fortaleza', '77889900000167', 'contato@etacomercio.com', '77889900112233', '2304400', 'Estreito', 'Eta Comércio', '700', '60000000', 'Eta Comércio Ltda', 'CE', 1, 'Rua Eta', '85987654321') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (11, 'Recife', '88990011000178', 'contato@thetaindustria.com', '88990011223344', '2611606', 'Aldeota', 'Theta Indústria', '800', '50010000', 'Theta Indústria SA', 'PE', 2, 'Avenida Theta', '81987654321') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (12, 'Salvador', '99001122000189', 'contato@iotaservicos.com', '99001122334455', '2927408', 'Boa Viagem', 'Iota Serviços', '900', '40010000', 'Iota Serviços Ltda', 'BA', 9, 'Rua Iota', '71987654321') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (14, 'Natal', '22334455000101', 'contato@lambdaconsultoria.com', '22334455667745', '2408102', 'Renascença', 'Lambda Consultoria', '1100', '59010000', 'Lambda Consultoria Ltda', 'RN', 2, 'Rua Lambda', '84987654321') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (15, 'Teresina', '33445566000102', 'contato@mugroup.com', '33445566778865', '2211001', 'Ponta Negra', 'Mu Tech', '1200', '64000000', 'Mu Tecnologia SA', 'PI', 9, 'Avenida Mu', '86987654321') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (16, 'Maceió', '44556677000113', 'contato@nucomercio.com', '44556677889900', '2704302', 'Niterói', 'Nu Comércio', '1300', '57010000', 'Nu Comércio Ltda', 'AL', 1, 'Rua Nu', '82987654321') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (17, 'Aracaju', '55667788000124', 'contato@xilog.com', '11223344556674', '2800308', 'Pajuçara', 'Xi Log', '1400', '49000000', 'Xi Logística ME', 'SE', 2, 'Avenida Xi', '79987654321') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (18, 'João Pessoa', '66778899000135', 'contato@omicronindustria.com', '66778899001122', '2507507', 'Farol', 'Omicron Indústria', '1500', '58000000', 'Omicron Industrial Ltda', 'PB', 9, 'Rua Omicron', '83987654321') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (19, 'Belém', '77889900000146', 'contato@piconsultoria.com', '77889900112233', '1501402', 'Manaíra', 'Pi Consult', '1600', '66000000', 'Pi Consultoria SA', 'PA', 1, 'Avenida Pi', '91987654321') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (20, 'Manaus', '88990011000157', 'contato@rhocomercio.com', '88990011223344', '1302603', 'Cidade Velha', 'Rho Comércio', '1700', '69000000', 'Rho Comércio Ltda', 'AM', 2, 'Rua Rho', '92987654321') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (21, 'Porto Velho', '99001122000168', 'contato@sigmatech.com', '99001122334455', '1100205', 'Adrianópolis', 'Sigma Tech', '1800', '76800000', 'Sigma Tecnologia Ltda', 'RO', 9, 'Avenida Sigma', '69987654321') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (22, 'Boa Vista', '11223344000179', 'contato@tauservicos.com', '11223344556677', '1400100', 'Nossa Senhora das Graças', 'Tau Serviços', '1900', '69300000', 'Tau Serviços Ltda', 'RR', 1, 'Rua Tau', '95987654321') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (23, 'Palmas', '22334455000190', 'contato@upsilonengenharia.com', '22334455667788', '1721000', 'Navegantes', 'Upsilon Engenharia', '2000', '77000000', 'Upsilon Engenharia Ltda', 'TO', 2, 'Avenida Upsilon', '63987654321') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (24, 'Macapá', '33445566000101', 'contato@phitech.com', '33445566778899', '1600303', 'Plano Diretor', 'Phi Tech', '2100', '68900000', 'Phi Tecnologia Ltda', 'AP', 9, 'Rua Phi', '96987654321') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (25, 'Rio Branco', '44556677000112', 'contato@chicomercio.com', '44556677889900', '1200401', 'Jardim Felicidade', 'Chi Comércio', '2200', '69900000', 'Chi Comércio Ltda', 'AC', 1, 'Avenida Chi', '68987654321') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (26, 'Campo Grande', '55667788000123', 'contato@psiservicos.com', '55667788990011', '5002704', 'Jardim das Cerejais', 'Psi Serviços', '2300', '79000000', 'Psi Serviços Ltda', 'MS', 2, 'Rua Psi', '67987654321') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (27, 'Goiânia', '66778899000134', 'contato@omegaindustria.com', '66778899001122', '5208707', 'Monte Castelo', 'Omega Indústria', '2400', '74000000', 'Omega Indústria SA', 'GO', 9, 'Avenida Omega', '62987654321') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (28, 'aa', '33333333333333', 'aaaaa@gmail.com', '2222222222', '12312', 'aaaa', 'aaa', '123', '11111111', 'aaaa', 'aa', 1, 'aaaa', '11111111111') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (29, 'aa', '32323232323232', 'dsdsdsdfdfgfgfgfg@gmail.com', '32323232', '3232', 'aa', 'aa', '3232', '32323232', 'aa', 'aa', 1, 'aaa', '32323232323') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (30, 'São Paulo', '12345678066601', 'contato@alfaconsultoria.com', '12345678901234', '3550308', 'Centro', 'Alfa Consultoria 2', '100', '01001000', 'Alfa Consultoria Ltda 2', 'SP', 1, 'Rua Alfa', '11987654321') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (8, 'Curitiba', '55667788000145', 'contato@epsilontecnologia.com', '55667788990011', '4106902', 'Boa Vista', 'Epsilon Tech', '500', '80010000', 'Epsilon Tecnologia', 'PR', 2, 'Rua Epsilon', '41987654321') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (13, 'São Luís', '11223344000190', 'contato@kappaengenharia.com', '11223344556677', '2111300', 'Pituba', 'Kappa Engenharia', '1000', '65000000', 'Kappa Engenharia Ltda', 'MA', 1, 'Avenida Kappa', '98987654322') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (5, 'Rio de Janeiro', '22334455000432', 'contato1@betasolucoes.com', '22334455667788', '3304533', 'Jardins', 'Beta Beta', '200', '20040000', 'Beta Soluções S.A', 'RJ', 2, 'Avenida Beta', '21987654334') ON CONFLICT DO NOTHING;
INSERT INTO public.companies (id, city, cnpj, email, inscricao_estadual, municipality_code, neighborhood, nome_fantasia, number, postal_code, razao_social, state, state_registration_indicator, street, phone_number) VALUES (6, 'Belo Horizonte', '33445566000123', 'contato@gammaassociados.com', '33445566778899', '3106200', 'Copacabana', 'Gamma Associados', '300', '30140071', 'Gamma e Associados LTDA', 'MG', 9, 'Rua Gamma', '31987654332') ON CONFLICT DO NOTHING;

INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (4, 'diego.alves@example.com', 'Diego Alves', '22900000001', 'Gestor 1', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (5, 'eduarda.silva@example.com', 'Eduarda Silva', '11900000002', 'Especialista 1', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (6, 'fernando.souza@example.com', 'Fernando Souza', '11900000003', 'Consultor 1', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (7, 'gabriela.rocha@example.com', 'Gabriela Rocha', '11900000004', 'Engenheira 1', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (8, 'henrique.santos@example.com', 'Henrique Santos', '11900000005', 'Analista 1', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (9, 'isabela.oliveira@example.com', 'Isabela Oliveira', '11900000006', 'Gestora 1', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (10, 'joao.pereira@example.com', 'João Pereira', '11900000007', 'Especialista 2', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (11, 'larissa.fernandes@example.com', 'Larissa Fernandes', '11900000008', 'Consultora 1', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (12, 'marcelo.costa@example.com', 'Marcelo Costa', '11900000009', 'Engenheiro 1', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (13, 'natalia.lima@example.com', 'Natália Lima', '11900000010', 'Analista 2', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (14, 'otavio.mendes@example.com', 'Otávio Mendes', '11900000011', 'Gestor 2', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (15, 'patricia.souza@example.com', 'Patrícia Souza', '11900000012', 'Especialista 3', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (16, 'rafael.oliveira@example.com', 'Rafael Oliveira', '11900000013', 'Consultor 2', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (17, 'sabrina.santos@example.com', 'Sabrina Santos', '11900000014', 'Engenheira 2', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (18, 'thiago.almeida@example.com', 'Thiago Almeida', '11900000015', 'Analista 3', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (19, 'vivian.rocha@example.com', 'Vivian Rocha', '11900000016', 'Gestora 2', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (20, 'wellington.ferreira@example.com', 'Wellington Ferreira', '11900000017', 'Especialista 4', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (21, 'xavier.lima@example.com', 'Xavier Lima', '11900000018', 'Consultor 3', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (22, 'yara.costa@example.com', 'Yara Costa', '11900000019', 'Engenheira 3', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (23, 'ze.mendes@example.com', 'Zé Mendes', '11900000020', 'Analista 4', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (26, 'camila.oliveira@example.com', 'Camila Oliveira', '11900000021', 'Consultora 2', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (27, 'daniel.pereira@example.com', 'Daniel Pereira', '11900000022', 'Engenheiro 2', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (28, 'emilly.fernandes@example.com', 'Emilly Fernandes', '11900000023', 'Analista 5', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (29, 'fabio.costa@example.com', 'Fábio Costa', '11900000024', 'Gestor 3', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (30, 'giovana.lima@example.com', 'Giovana Lima', '11900000025', 'Especialista 5', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (31, 'heitor.mendes@example.com', 'Heitor Mendes', '11900000026', 'Consultor 4', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (32, 'iara.santos@example.com', 'Iara Santos', '11900000027', 'Engenheira 4', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (33, 'julio.almeida@example.com', 'Júlio Almeida', '11900000028', 'Analista 6', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (34, 'kelly.rocha@example.com', 'Kelly Rocha', '11900000029', 'Gestora 3', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (35, 'leonardo.ferreira@example.com', 'Leonardo Ferreira', '11900000030', 'Especialista 6', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (36, 'mariana.lima@example.com', 'Mariana Lima', '11900000031', 'Consultora 3', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (37, 'nicolas.silva@example.com', 'Nicolas Silva', '11900000032', 'Engenheiro 3', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (38, 'olivia.costa@example.com', 'Olívia Costa', '11900000033', 'Analista 7', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (39, 'paulo.mendes@example.com', 'Paulo Mendes', '11900000034', 'Gestor 4', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (40, 'quesia.santos@example.com', 'Quésia Santos', '11900000035', 'Especialista 7', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (41, 'rita.souza@example.com', 'Rita Souza', '11900000036', 'Consultora 4', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (42, 'sergio.oliveira@example.com', 'Sérgio Oliveira', '11900000037', 'Engenheiro 4', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (43, 'tania.pereira@example.com', 'Tânia Pereira', '11900000038', 'Analista 8', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (44, 'ubirajara.rocha@example.com', 'Ubirajara Rocha', '11900000039', 'Gestor 5', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (45, 'vera.ferreira@example.com', 'Vera Ferreira', '11900000040', 'Especialista 8', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (46, 'wilson.lima@example.com', 'Wilson Lima', '11900000041', 'Consultor 5', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (47, 'xuxa.costa@example.com', 'Xuxa Costa', '11900000042', 'Engenheira 5', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (48, 'yuri.mendes@example.com', 'Yuri Mendes', '11900000043', 'Analista 9', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (49, 'zilda.santos@example.com', 'Zilda Santos', '11900000044', 'Gestora 4', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (2, 'bruno.lima@example.com', 'Bruno Lima Souza', '11900000045', 'Engenheiro 5', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (53, 'dev.gabrizord@gmail.com', 'Gabriel', '11900000046', 'Outro 1', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (52, 'aaaaaaa@gmail.com', 'Aaaaavv', '11900000047', 'Outro 2', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (51, 'fdfdfdfddsdsb@gmail.com', 'Carla Santos', '11900000048', 'Outro 3', null) ON CONFLICT DO NOTHING;
INSERT INTO public.employees (id, email, name, phone_number, position, user_id) VALUES (3, 'carla.mendes@example.com', 'Carla Mendes', '11900000049', 'Analista 10', null) ON CONFLICT DO NOTHING;

WITH user_ids AS (
    SELECT
        'c47f383c-c724-48c7-8a9d-9d905cf9c8d9'::uuid AS admin_id,
            '9795f925-4cb6-4179-87cb-cf0e45358e30'::uuid AS user_id
),
     user_info AS (
         SELECT
             admin_id AS id,
             'admin@example.com' AS email,
             '$2a$10$e7AYrEp2wld.tDQP4tlrx.X.K/TvufR6st3Pu.bNCElgVTnS6U67C' AS password,
             'admin' AS username
         FROM user_ids
         UNION ALL
         SELECT
             user_id AS id,
             'user@example.com' AS email,
             '$2a$10$L4Nfx4ypZv3nBLiEnOsQi.Cy3Iucrxp/24atDtH.6Pe6C73kxOiAC' AS password,
             'user' AS username
         FROM user_ids
     )

INSERT INTO public.users (id, email, password, username)
SELECT id, email, password, username FROM user_info
    ON CONFLICT DO NOTHING;

WITH user_ids AS (
    SELECT
        'c47f383c-c724-48c7-8a9d-9d905cf9c8d9'::uuid AS admin_id,
            '9795f925-4cb6-4179-87cb-cf0e45358e30'::uuid AS user_id
)
INSERT INTO public.user_roles (user_id, roles)
SELECT id, role FROM (
                         SELECT admin_id AS id, 'ADMIN' AS role FROM user_ids
                         UNION ALL
                         SELECT admin_id AS id, 'BASIC' AS role FROM user_ids
                         UNION ALL
                         SELECT user_id AS id, 'BASIC' AS role FROM user_ids
                     ) roles
    ON CONFLICT DO NOTHING;






