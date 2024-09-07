// Setup for registering a new employee using form submission
setupGenericFormSubmission(
    '#registerEmployeeForm',
    '/api/employee',
    'POST',
    'Colaborador cadastrado com sucesso!',
    'Ocorreu um erro ao cadastrar o colaborador.',
    'registerEmployeeModal'
);

// Setup for deleting an employee
setupGenericDeleteAction(
    '.btn-danger[title="Excluir"]',
    'deleteEmployeeModal',
    '/api/employee/{id}',
    'td:first-child',
    'td:nth-child(2)',
    'Colaborador excluído com sucesso!',
    'Ocorreu um erro ao excluir o colaborador.'
);

// Setup for editing an employee's details using form submission
setupGenericFormSubmission(
    '#editEmployeeForm',
    function() {
        return '/api/employee/' + $('#editEmployeeId').val();
    },
    'PUT',
    'Colaborador atualizado com sucesso!',
    'Ocorreu um erro ao atualizar o colaborador.',
    'editEmployeeModal'
);

// Input mask for formatting phone number as the user types
document.getElementById('formattedPhone').addEventListener('input', function (e) {
    let input = e.target.value;
    let rawValue = input.replace(/\D/g, '');

    input = input.replace(/\D/g, '');
    input = input.replace(/^(\d{2})(\d)/g, '($1) $2');
    input = input.replace(/(\d{5})(\d)/, '$1-$2');

    e.target.value = input;
    document.getElementById('employeePhone').value = rawValue;
});

// Setup for searching and updating the employee table with results
$(document).ready(function() {
    setupSearchAndTable(
        '#searchInput',               // Search input field ID
        '#resultsTableBody',          // Table body ID for results
        '/api/employee/search',       // API URL for search
        '/api/employee',              // API URL for details
        function(item) {              // Function to format table rows
            return `<tr>
                      <td>${item.id}</td>
                      <td>${item.name}</td>
                      <td>${item.position}</td>
                      <td>${item.email}</td>
                      <td>${formatPhoneNumber(item.phoneNumber)}</td>
                      <td>
                        <a href="#" class="btn btn-sm btn-info" title="Ver Detalhes">
                            <i class='bx bx-show'></i>
                        </a>
                        <button type="button" class="btn btn-sm btn-warning" title="Editar" data-bs-toggle="modal" data-bs-target="#editEmployeeModal" onclick="populateEditEmployeeForm(this)">
                            <i class='bx bx-edit'></i>
                        </button>
                        <button type="button" class="btn btn-sm btn-danger" title="Excluir">
                            <i class='bx bx-trash'></i>
                        </button>
                      </td>
                   </tr>`;
        }
    );
});

// Function to format phone numbers
function formatPhoneNumber(phoneNumber) {
    return '(' + phoneNumber.substring(0, 2) + ') ' + phoneNumber.substring(2, 7) + '-' + phoneNumber.substring(7);
}

// Function to populate the employee edit form with data from the server
function populateEditEmployeeForm(button) {
    const row = $(button).closest('tr');
    const employeeId = row.find('td:first-child').text();

    $.ajax({
        url: '/api/employee/' + employeeId,
        type: 'GET',
        success: function(employee) {
            $('#editEmployeeId').val(employee.id);
            $('#editEmployeeName').val(employee.name);
            $('#editEmployeePosition').val(employee.position);
            $('#editEmployeeEmail').val(employee.email);
            $('#editFormattedPhone').val(formatPhoneNumber(employee.phoneNumber));
        },
        error: function() {
            alert('Erro ao buscar os dados do colaborador.');
        }
    });
}
