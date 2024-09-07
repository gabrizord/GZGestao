// Generic Setup Functions
function setupFormSubmission(formId, apiUrlFunc, method, successMessage, errorMessage, modalId) {
    setupGenericFormSubmission(formId, apiUrlFunc, method, successMessage, errorMessage, modalId);
}

function setupDeleteAction(buttonSelector, modalId, apiUrl, idSelector, nameSelector, successMessage, errorMessage) {
    setupGenericDeleteAction(buttonSelector, modalId, apiUrl, idSelector, nameSelector, successMessage, errorMessage);
}

// Handlers for Company Actions
function registerCompany() {
    setupFormSubmission(
        '#registerCompanyForm',
        '/api/company',
        'POST',
        'Empresa cadastrada com sucesso!',
        'Ocorreu um erro ao cadastrar a empresa.',
        'registerCompanyModal'
    );
}

function editCompany() {
    setupFormSubmission(
        '#editCompanyForm',
        function() {
            return '/api/company/' + $('#editCompanyId').val();
        },
        'PUT',
        'Empresa atualizada com sucesso!',
        'Ocorreu um erro ao atualizar a empresa.',
        'editCompanyModal'
    );
}

function deleteCompany() {
    setupDeleteAction(
        '.btn-danger[title="Excluir"]',
        'deleteCompanyModal',
        '/api/company/{id}',
        'td:first-child',
        'td:nth-child(2)',
        'Empresa excluída com sucesso!',
        'Ocorreu um erro ao excluir a empresa.'
    );
}

// Populate Company Edit Form
function populateEditCompanyForm(button) {
    const row = $(button).closest('tr');
    const companyId = row.find('td:first-child').text();

    $.ajax({
        url: '/api/company/' + companyId,
        type: 'GET',
        success: function(company) {
            $('#editCompanyId').val(company.id);
            $('#editRazaoSocial').val(company.razaoSocial);
            $('#editNomeFantasia').val(company.nomeFantasia);
            $('#editCnpj').val(company.cnpj);
            $('#editInscricaoEstadual').val(company.inscricaoEstadual);
            $('#editStreet').val(company.street);
            $('#editNumber').val(company.number);
            $('#editNeighborhood').val(company.neighborhood);
            $('#editCity').val(company.city);
            $('#editState').val(company.state);
            $('#editPostalCode').val(company.postalCode);
            $('#editStateRegistrationIndicator').val(company.stateRegistrationIndicator);
            $('#editMunicipalityCode').val(company.municipalityCode);
            $('#editPhone').val(company.phoneNumber);
            $('#editEmail').val(company.email);
        },
        error: function() {
            alert('Erro ao buscar os dados da empresa.');
        }
    });
}

// Initial Setup Execution
function initCompanyManagement() {
    registerCompany();
    editCompany();
    deleteCompany();
}

// Initialize company management setup when the document is ready
$(document).ready(function() {
    initCompanyManagement();
});
