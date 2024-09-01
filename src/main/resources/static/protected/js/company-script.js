setupFormSubmission(
    '#registerCompanyForm',
    '/api/company',
    'Empresa cadastrada com sucesso!',
    'Ocorreu um erro ao cadastrar a empresa.',
    'registerCompanyModal'
);

setupDeleteAction(
    '.btn-danger[title="Excluir"]',
    'deleteCompanyModal',
    '/api/company/{id}',
    'Empresa excluída com sucesso!',
    'Ocorreu um erro ao excluir a empresa.'
);
