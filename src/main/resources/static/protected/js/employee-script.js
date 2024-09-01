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