/**
 * This script handles the registration and deletion of employees via AJAX requests.
 * It also formats the phone number input.
 */

$(document).ready(function() {
    /**
     * Fetch the CSRF token and header from the meta tags.
     */
    const token = $('meta[name="_csrf"]').attr('content');
    const header = $('meta[name="_csrf_header"]').attr('content');

    /**
     * Handle the form submission for registering a new employee.
     */

    /**
     * Store the ID of the employee to be deleted.
     */
    let companyIdToDelete = null;

    /**
     * Handle the click event for deleting an employee.
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
     * Handle the click event for confirming the deletion of an employee.
     */
    $('#confirmDeleteButton').on('click', function() {
        if (companyIdToDelete) {
            /**
             * Send a DELETE request to the API endpoint for deleting the employee.
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