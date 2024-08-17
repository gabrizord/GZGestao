$(document).ready(function() {
    $('#registerEmployeeForm').on('submit', function(event) {
        event.preventDefault();
        var formData = {};
        $(this).serializeArray().forEach(function(item) {
            formData[item.name] = item.value;
        });

        $.ajax({
            url: '/api/employee',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function(response) {
                alert('Colaborador cadastrado com sucesso!');
                $('#registerEmployeeModal').modal('hide');
                $('#registerEmployeeForm')[0].reset();
            },
            error: function(xhr, status, error) {
                console.error('Erro:', xhr.responseText);
                alert('Ocorreu um erro ao cadastrar o colaborador.');
            }
        });
    });
});