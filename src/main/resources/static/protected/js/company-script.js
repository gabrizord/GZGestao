setupGenericFormSubmission(
    '#registerCompanyForm',
    '/api/company',
    'POST',
    'Empresa cadastrada com sucesso!',
    'Ocorreu um erro ao cadastrar a empresa.',
    'registerCompanyModal'
);

setupGenericDeleteAction(
    '.btn-danger[title="Excluir"]',
    'deleteCompanyModal',
    '/api/company/{id}',
    'td:first-child',
    'td:nth-child(2)',
    'Empresa excluída com sucesso!',
    'Ocorreu um erro ao excluir a empresa.'
);

