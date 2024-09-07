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

function setupCompanySearch() {
    $(document).ready(function() {
        setupSearchAndTable(
            '#searchCompanyInput',         // Campo de pesquisa
            '#companyResultsTableBody',    // Corpo da tabela para resultados
            '/api/company/search',         // URL da API para buscar empresas
            '/api/company',                // URL da API para detalhes da empresa
            function(item) {               // Função para formatar as linhas da tabela
                return `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.razaoSocial}</td>
                        <td>${formatCNPJ(item.cnpj)}</td>
                        <td>${item.email}</td>
                        <td>${formatPhoneNumber(item.phoneNumber)}</td>
                        <td>
                            <a href="#" class="btn btn-sm btn-info" title="Ver Detalhes">
                                <i class='bx bx-show'></i>
                            </a>
                            <button type="button" class="btn btn-sm btn-warning" title="Editar" data-bs-toggle="modal" data-bs-target="#editCompanyModal" onclick="populateEditCompanyForm(this)">
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

function formatCNPJ(cnpj) {
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
}

function formatPhoneNumber(phoneNumber) {
    return `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 7)}-${phoneNumber.substring(7)}`;
}

// Initial Setup Execution
function initCompanyManagement() {
    registerCompany();
    editCompany();
    deleteCompany();
    setupCompanySearch();
}

// Initialize company management setup when the document is ready
$(document).ready(function() {
    initCompanyManagement();
});
