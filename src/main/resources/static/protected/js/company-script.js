/**
 * This script handles the registration and deletion of companies via AJAX requests.
 * It also formats the phone number input.
 */

$(document).ready(function() {
    /**
     * Fetch the CSRF token and header from the meta tags.
     */
    const token = $('meta[name="_csrf"]').attr('content');
    const header = $('meta[name="_csrf_header"]').attr('content');

    /**
     * Handle the form submission for registering a new company.
     */
    $('#registerCompanyForm').on('submit', function(event) {
        event.preventDefault();
        const formData = {};
        $(this).serializeArray().forEach(function(item) {
            formData[item.name] = item.value;
        });

        /**
         * Send the form data to the API endpoint for registration.
         */
        $.ajax({
            url: '/api/company', // Endpoint para cadastro de empresas
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            beforeSend: function(xhr) {
                xhr.setRequestHeader(header, token);
            },
            success: function() {
                alert('Empresa cadastrada com sucesso!');
                let myModal = bootstrap.Modal.getInstance(document.getElementById('registerCompanyModal'));
                myModal.hide();
                location.reload(); // Recarrega a página para refletir as alterações
            },
            error: function(xhr) {
                console.error('Erro:', xhr.responseText);
                alert('Ocorreu um erro ao cadastrar a empresa.');
            }
        });
    });


    /**
     * Store the ID of the company to be deleted.
     */
    let companyIdToDelete = null;

    /**
     * Handle the click event for deleting an company.
     */
    $('.btn-danger[title="Excluir"]').on('click', function() {
        const row = $(this).closest('tr');
        companyIdToDelete = row.find('td:first-child').text();
        const companyName = row.find('td:nth-child(2)').text();

        $('#companyNameToDelete').text(companyName);

        /**
         * Show the delete confirmation modal.
         */
        const deleteModal = new bootstrap.Modal(document.getElementById('deleteCompanyModal'));
        deleteModal.show();
    });

    /**
     * Handle the click event for confirming the deletion of an company.
     */
    $('#confirmDeleteButton').on('click', function() {
        if (companyIdToDelete) {
            /**
             * Send a DELETE request to the API endpoint for deleting the company.
             */
            $.ajax({
                url: `/api/company/${companyIdToDelete}`,
                type: 'DELETE',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader(header, token);
                },
                success: function() {
                    alert('Organização excluída com sucesso!');
                    location.reload();
                },
                error: function(xhr) {
                    console.error('Erro:', xhr.responseText);
                    alert('Ocorreu um erro ao excluir a organização.');
                }
            });
        }
    });
});