// Function to configure generic form submission via AJAX.
// Receives the form selector, a function to get the API URL,
// the HTTP method, success and error messages, and the modal ID to close after submission.
function setupGenericFormSubmission(formSelector, apiUrlFunction, httpMethod, successMessage, errorMessage, modalId) {
    $(document).ready(function () {
        // Retrieve CSRF token and header for security
        const token = $('meta[name="_csrf"]').attr('content');
        const header = $('meta[name="_csrf_header"]').attr('content');

        // Form submission handler
        $(formSelector).on('submit', function (event) {
            event.preventDefault(); // Prevent default form submission behavior
            const formData = {};

            // Serialize form data into an object
            $(this).serializeArray().forEach(function (item) {
                formData[item.name] = item.value;
            });

            // AJAX request to submit the form data
            $.ajax({
                url: typeof apiUrlFunction === 'function' ? apiUrlFunction() : apiUrlFunction,
                type: httpMethod,
                contentType: 'application/json',
                data: JSON.stringify(formData),
                beforeSend: function (xhr) {
                    // Add CSRF token to the request header
                    xhr.setRequestHeader(header, token);
                },
                success: function () {
                    // Success handler, show alert, close modal, and reload page
                    alert(successMessage);
                    let myModal = bootstrap.Modal.getInstance(document.getElementById(modalId));
                    myModal.hide();
                    location.reload();
                },
                error: function (xhr) {
                    // Error handler, log error and show alert
                    console.error('Error:', xhr.responseText);
                    alert(errorMessage);
                }
            });
        });
    });
}

// Function to configure a generic delete action via AJAX.
// Receives the button selector, the deletion modal ID, an API URL template,
// selectors for item IDs and names, and success and error messages.
function setupGenericDeleteAction(buttonSelector, modalId, apiUrlTemplate, idSelector, nameSelector, successMessage, errorMessage) {
    $(document).ready(function () {
        // Retrieve CSRF token and header for security
        const token = $('meta[name="_csrf"]').attr('content');
        const header = $('meta[name="_csrf_header"]').attr('content');
        let itemIdToDelete = null;

        // Handler for clicking the delete button
        $(buttonSelector).on('click', function () {
            const row = $(this).closest('tr');
            // Get item ID and name from the row
            itemIdToDelete = row.find(idSelector).text();
            const itemName = row.find(nameSelector).text();

            // Display item name in the delete modal
            $(`#${modalId}NameToDelete`).text(itemName);

            // Show the delete confirmation modal
            const deleteModal = new bootstrap.Modal(document.getElementById(modalId));
            deleteModal.show();
        });

        // Handler for confirming the deletion
        $(`#confirmDeleteButton`).on('click', function () {
            if (itemIdToDelete) {
                // AJAX request to delete the item
                $.ajax({
                    url: apiUrlTemplate.replace('{id}', itemIdToDelete),
                    type: 'DELETE',
                    beforeSend: function (xhr) {
                        // Add CSRF token to the request header
                        xhr.setRequestHeader(header, token);
                    },
                    success: function () {
                        // Success handler, show alert and reload page
                        alert(successMessage);
                        location.reload();
                    },
                    error: function (xhr) {
                        // Error handler, log error and show alert
                        console.error('Error:', xhr.responseText);
                        alert(errorMessage);
                    }
                });
            }
        });
    });
}

// Function to configure search and update a table with results.
// Receives the search input ID, the table body ID, the API search URL,
// the details URL, and a function to format table rows.
// Função para configurar a busca e atualizar a tabela com debounce
function setupSearchAndTable(searchInputId, tableBodyId, searchUrl, detailsUrl, rowFormatter) {
    $(document).ready(function() {
        const searchInput = $(searchInputId);
        const tableBody = $(tableBodyId);

        // Função para buscar dados
        const performSearch = debounce(function() {
            let query = searchInput.val();
            if (query.length > 2) {
                // AJAX request para buscar resultados
                $.ajax({
                    url: searchUrl,
                    type: 'GET',
                    data: { name: query },
                    success: function(data) {
                        // Atualiza a tabela com os resultados
                        updateTable(data, tableBody, rowFormatter);
                    },
                    error: function() {
                        alert('Erro ao buscar os resultados.');
                    }
                });
            } else if (query.length === 0) {
                // Recarregar a página se o campo de busca estiver vazio
                location.reload();
            }
        }, 300); // 300ms delay para debouncing

        // Adiciona o debounce à busca
        searchInput.on('input', performSearch);

        // Função para atualizar a tabela com os resultados
        function updateTable(data, tableBody, rowFormatter) {
            tableBody.empty(); // Limpa o corpo atual da tabela
            data.forEach(function(item) {
                // Adiciona linhas formatadas à tabela
                let row = rowFormatter(item);
                tableBody.append(row);
            });

            // Reconfigura os botões de ação após a atualização da tabela
            setupActionButtons();
        }

        // Função para reconfigurar botões de ação após atualização da tabela
        function setupActionButtons() {
            $(document).off('click', '.btn-danger[title="Excluir"]');
            $(document).off('click', '.btn-warning[title="Editar"]');
        }
    });
}

// Debounce function
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

