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
    $('#registerEmployeeForm').on('submit', function(event) {
        event.preventDefault();
        const formData = {};
        $(this).serializeArray().forEach(function(item) {
            formData[item.name] = item.value;
        });

        /**
         * Send the form data to the API endpoint for registration.
         */
        $.ajax({
            url: '/api/employee',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            beforeSend: function(xhr) {
                xhr.setRequestHeader(header, token);
            },
            success: function() {
                alert('Colaborador cadastrado com sucesso!');
                let myModal = bootstrap.Modal.getInstance(document.getElementById('registerEmployeeModal'));
                myModal.hide();
                location.reload();
            },
            error: function(xhr) {
                console.error('Erro:', xhr.responseText);
                alert('Ocorreu um erro ao cadastrar o colaborador.');
            }
        });
    });

    /**
     * Store the ID of the employee to be deleted.
     */
    let employeeIdToDelete = null;

    /**
     * Handle the click event for deleting an employee.
     */
    $('.btn-danger[title="Excluir"]').on('click', function() {
        const row = $(this).closest('tr');
        employeeIdToDelete = row.find('td:first-child').text();
        const employeeName = row.find('td:nth-child(2)').text();

        $('#employeeNameToDelete').text(employeeName);

        /**
         * Show the delete confirmation modal.
         */
        const deleteModal = new bootstrap.Modal(document.getElementById('deleteEmployeeModal'));
        deleteModal.show();
    });

    /**
     * Handle the click event for confirming the deletion of an employee.
     */
    $('#confirmDeleteButton').on('click', function() {
        if (employeeIdToDelete) {
            /**
             * Send a DELETE request to the API endpoint for deleting the employee.
             */
            $.ajax({
                url: `/api/employee/${employeeIdToDelete}`,
                type: 'DELETE',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader(header, token);
                },
                success: function() {
                    alert('Colaborador excluído com sucesso!');
                    location.reload();
                },
                error: function(xhr) {
                    console.error('Erro:', xhr.responseText);
                    alert('Ocorreu um erro ao excluir o colaborador.');
                }
            });
        }
    });

    /**
     * Format the phone number input.
     */
    document.getElementById('formattedPhone').addEventListener('input', function (e) {
        let input = e.target.value;
        let rawValue = input.replace(/\D/g, '');

        input = input.replace(/\D/g, '');
        input = input.replace(/^(\d{2})(\d)/g, '($1) $2');
        input = input.replace(/(\d{5})(\d)/, '$1-$2');

        e.target.value = input;
        document.getElementById('employeePhone').value = rawValue;
    });
});