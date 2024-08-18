$(document).ready(function() {
    const token = $('meta[name="_csrf"]').attr('content');
    const header = $('meta[name="_csrf_header"]').attr('content');

    $('#registerEmployeeForm').on('submit', function(event) {
        event.preventDefault();
        const formData = {};
        $(this).serializeArray().forEach(function(item) {
            formData[item.name] = item.value;
        });

        $.ajax({
            url: '/api/employee',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            beforeSend: function(xhr) {
                xhr.setRequestHeader(header, token);
            },
            success: function(response) {
                alert('Colaborador cadastrado com sucesso!');
                $('#registerEmployeeModal').modal('hide');
                $('#registerEmployeeForm')[0].reset();
                location.reload();
            },
            error: function(xhr, status, error) {
                console.error('Erro:', xhr.responseText);
                alert('Ocorreu um erro ao cadastrar o colaborador.');
            }
        });
    });

    let employeeIdToDelete = null;

    $('.btn-danger[title="Excluir"]').on('click', function() {
        const row = $(this).closest('tr');
        employeeIdToDelete = row.find('td:first-child').text();
        const employeeName = row.find('td:nth-child(2)').text();

        $('#employeeNameToDelete').text(employeeName);

        const deleteModal = new bootstrap.Modal(document.getElementById('deleteEmployeeModal'));
        deleteModal.show();
    });

    $('#confirmDeleteButton').on('click', function() {
        if (employeeIdToDelete) {
            $.ajax({
                url: `/api/employee/${employeeIdToDelete}`,
                type: 'DELETE',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader(header, token);
                },
                success: function(response) {
                    alert('Colaborador excluído com sucesso!');
                    location.reload();
                },
                error: function(xhr, status, error) {
                    console.error('Erro:', xhr.responseText);
                    alert('Ocorreu um erro ao excluir o colaborador.');
                }
            });
        }
    });
});
