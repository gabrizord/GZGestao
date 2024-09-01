setupFormSubmission(
    '#registerEmployeeForm',
    '/api/employee',
    'Colaborador cadastrado com sucesso!',
    'Ocorreu um erro ao cadastrar o colaborador.',
    'registerEmployeeModal'
);

setupDeleteAction(
    '.btn-danger[title="Excluir"]',
    'deleteEmployeeModal',
    '/api/employee/{id}',
    'Colaborador excluído com sucesso!',
    'Ocorreu um erro ao excluir o colaborador.'
);

// Adicionalmente, o código de formatação de telefone específico para employees
document.getElementById('formattedPhone').addEventListener('input', function (e) {
    let input = e.target.value;
    let rawValue = input.replace(/\D/g, '');

    input = input.replace(/\D/g, '');
    input = input.replace(/^(\d{2})(\d)/g, '($1) $2');
    input = input.replace(/(\d{5})(\d)/, '$1-$2');

    e.target.value = input;
    document.getElementById('employeePhone').value = rawValue;
});
