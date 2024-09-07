// Generic Setup Functions
function setupFormSubmission(formId, apiUrlFunc, method, successMessage, errorMessage, modalId) {
    setupGenericFormSubmission(formId, apiUrlFunc, method, successMessage, errorMessage, modalId);
}

function setupDeleteAction(buttonSelector, modalId, apiUrl, idSelector, nameSelector, successMessage, errorMessage) {
    setupGenericDeleteAction(buttonSelector, modalId, apiUrl, idSelector, nameSelector, successMessage, errorMessage);
}

// Handlers for Employee Actions
function registerEmployee() {
    setupFormSubmission(
        '#registerEmployeeForm',
        '/api/employee',
        'POST',
        'Colaborador cadastrado com sucesso!',
        'Ocorreu um erro ao cadastrar o colaborador.',
        'registerEmployeeModal'
    );
}

function editEmployee() {
    setupFormSubmission(
        '#editEmployeeForm',
        function() {
            return '/api/employee/' + $('#editEmployeeId').val();
        },
        'PUT',
        'Colaborador atualizado com sucesso!',
        'Ocorreu um erro ao atualizar o colaborador.',
        'editEmployeeModal'
    );
}

function deleteEmployee() {
    setupDeleteAction(
        '.btn-danger[title="Excluir"]',
        'deleteEmployeeModal',
        '/api/employee/{id}',
        'td:first-child',
        'td:nth-child(2)',
        'Colaborador excluído com sucesso!',
        'Ocorreu um erro ao excluir o colaborador.'
    );
}

// Input Mask Utility
function applyPhoneMask(inputFieldId, hiddenFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const hiddenField = document.getElementById(hiddenFieldId);

    inputField.addEventListener('input', function (e) {
        let input = e.target.value.replace(/\D/g, '');
        input = input.replace(/^(\d{2})(\d)/g, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2');
        e.target.value = input;
        hiddenField.value = input.replace(/\D/g, '');
    });
}

// Phone Number Formatter
function formatPhoneNumber(phoneNumber) {
    return `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 7)}-${phoneNumber.substring(7)}`;
}

// Populate Employee Edit Form
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

// Setup Search and Table Update
function setupEmployeeSearch() {
    $(document).ready(function() {
        setupSearchAndTable(
            '#searchEmployeeInput',               // Search input field ID
            '#resultsTableBody',          // Table body ID for results
            '/api/employee/search',       // API URL for search
            '/api/employee',              // API URL for details
            function(item) {              // Function to format table rows
                return `
                    <tr>
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
}

// Initial Setup Execution
function initEmployeeManagement() {
    registerEmployee();
    editEmployee();
    deleteEmployee();
    applyPhoneMask('formattedPhone', 'employeePhone');  // For registration
    applyPhoneMask('editFormattedPhone', 'editEmployeePhone');  // For editing
    setupEmployeeSearch();
}

// Initialize employee management setup when the document is ready
$(document).ready(function() {
    initEmployeeManagement();
});
