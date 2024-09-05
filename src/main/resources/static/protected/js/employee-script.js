setupGenericFormSubmission(
    '#registerEmployeeForm',
    '/api/employee',
    'POST',
    'Colaborador cadastrado com sucesso!',
    'Ocorreu um erro ao cadastrar o colaborador.',
    'registerEmployeeModal'
);

setupGenericDeleteAction(
    '.btn-danger[title="Excluir"]',
    'deleteEmployeeModal',
    '/api/employee/{id}',
    'td:first-child',
    'td:nth-child(2)',
    'Colaborador excluído com sucesso!',
    'Ocorreu um erro ao excluir o colaborador.'
);

setupGenericFormSubmission(
    '#editEmployeeForm',
    function() {
        return '/api/employee/' + $('#editEmployeeId').val();  // Substitui {id} pelo valor real do ID
    },
    'PUT',
    'Colaborador atualizado com sucesso!',
    'Ocorreu um erro ao atualizar o colaborador.',
    'editEmployeeModal'
);

document.getElementById('formattedPhone').addEventListener('input', function (e) {
    let input = e.target.value;
    let rawValue = input.replace(/\D/g, '');

    input = input.replace(/\D/g, '');
    input = input.replace(/^(\d{2})(\d)/g, '($1) $2');
    input = input.replace(/(\d{5})(\d)/, '$1-$2');

    e.target.value = input;
    document.getElementById('employeePhone').value = rawValue;
});

function populateEditForm(button) {
    const row = $(button).closest('tr');
    const employeeId = row.find('td:first-child').text();
    const employeeName = row.find('td:nth-child(2)').text();
    const employeePosition = row.find('td:nth-child(3)').text();
    const employeeEmail = row.find('td:nth-child(4)').text();
    const employeePhone = row.find('td:nth-child(5)').text().replace(/\D/g, '');


    $('#editEmployeeId').val(employeeId);
    $('#editEmployeeName').val(employeeName);
    $('#editEmployeePosition').val(employeePosition);
    $('#editEmployeeEmail').val(employeeEmail);
    $('#editFormattedPhone').val(`(${employeePhone.substring(0, 2)}) ${employeePhone.substring(2, 7)}-${employeePhone.substring(7)}`);
    $('#editEmployeePhone').val(employeePhone);
}
