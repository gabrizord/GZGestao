function setupFormSubmission(formSelector, apiUrl, successMessage, errorMessage, modalId) {
    $(document).ready(function() {
        const token = $('meta[name="_csrf"]').attr('content');
        const header = $('meta[name="_csrf_header"]').attr('content');

        $(formSelector).on('submit', function(event) {
            event.preventDefault();
            const formData = {};
            $(this).serializeArray().forEach(function(item) {
                formData[item.name] = item.value;
            });

            $.ajax({
                url: apiUrl,
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(formData),
                beforeSend: function(xhr) {
                    xhr.setRequestHeader(header, token);
                },
                success: function() {
                    alert(successMessage);
                    let myModal = bootstrap.Modal.getInstance(document.getElementById(modalId));
                    myModal.hide();
                    location.reload();
                },
                error: function(xhr) {
                    console.error('Erro:', xhr.responseText);
                    alert(errorMessage);
                }
            });
        });
    });
}

function setupDeleteAction(buttonSelector, modalId, apiUrlTemplate, successMessage, errorMessage) {
    $(document).ready(function() {
        const token = $('meta[name="_csrf"]').attr('content');
        const header = $('meta[name="_csrf_header"]').attr('content');
        let itemIdToDelete = null;

        $(buttonSelector).on('click', function() {
            const row = $(this).closest('tr');
            itemIdToDelete = row.find('td:first-child').text();
            const itemName = row.find('td:nth-child(2)').text();

            $(`#${modalId}NameToDelete`).text(itemName);

            const deleteModal = new bootstrap.Modal(document.getElementById(modalId));
            deleteModal.show();
        });

        $(`#confirmDeleteButton`).on('click', function() {
            if (itemIdToDelete) {
                $.ajax({
                    url: apiUrlTemplate.replace('{id}', itemIdToDelete),
                    type: 'DELETE',
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader(header, token);
                    },
                    success: function() {
                        alert(successMessage);
                        location.reload();
                    },
                    error: function(xhr) {
                        console.error('Erro:', xhr.responseText);
                        alert(errorMessage);
                    }
                });
            }
        });
    });
}
