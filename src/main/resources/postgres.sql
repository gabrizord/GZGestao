INSERT INTO roles (id, name)
VALUES (1, 'BASIC'),
       (2, 'ADMIN')
ON CONFLICT (id) DO NOTHING;