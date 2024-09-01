$(document).ready(function() {
    const token = $('meta[name="_csrf"]').attr('content');
    const header = $('meta[name="_csrf_header"]').attr('content');
    $('#registerCompanyForm').on('submit', function(event) {
        event.preventDefault();
        const formData = {};
        $(this).serializeArray().forEach(function(item) {
            formData[item.name] = item.value;
        });

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

    let companyIdToDelete = null;
    $('.btn-danger[title="Excluir"]').on('click', function() {
        const row = $(this).closest('tr');
        companyIdToDelete = row.find('td:first-child').text();
        const companyName = row.find('td:nth-child(2)').text();

        $('#companyNameToDelete').text(companyName);

        const deleteModal = new bootstrap.Modal(document.getElementById('deleteCompanyModal'));
        deleteModal.show();
    });

    $('#confirmDeleteButton').on('click', function() {
        if (companyIdToDelete) {
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