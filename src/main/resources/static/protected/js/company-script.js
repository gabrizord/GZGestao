// Setup for registering a new company using form submission
setupGenericFormSubmission(
    '#registerCompanyForm',
    '/api/company',
    'POST',
    'Empresa cadastrada com sucesso!',
    'Ocorreu um erro ao cadastrar a empresa.',
    'registerCompanyModal'
);

// Setup for deleting a company
setupGenericDeleteAction(
    '.btn-danger[title="Excluir"]',
    'deleteCompanyModal',
    '/api/company/{id}',
    'td:first-child',
    'td:nth-child(2)',
    'Empresa excluída com sucesso!',
    'Ocorreu um erro ao excluir a empresa.'
);

// Setup for editing a company's details using form submission
setupGenericFormSubmission(
    '#editCompanyForm',
    function() {
        return '/api/company/' + $('#editCompanyId').val();
    },
    'PUT',
    'Empresa atualizada com sucesso!',
    'Ocorreu um erro ao atualizar a empresa.',
    'editCompanyModal'
);

// Function to populate the company edit form with data from the server
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
