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
function setupSearchAndTable(searchInputId, tableBodyId, searchUrl, detailsUrl, rowFormatter) {
    $(document).ready(function() {
        const searchInput = $(searchInputId);
        const tableBody = $(tableBodyId);

        // Search input handler, triggers search when query is longer than 2 characters
        searchInput.on('input', function() {
            let query = $(this).val();
            if (query.length > 2) {
                // AJAX request to search for results
                $.ajax({
                    url: searchUrl,
                    type: 'GET',
                    data: { name: query },
                    success: function(data) {
                        // Update the table with search results
                        updateTable(data, tableBody, rowFormatter);
                    },
                    error: function() {
                        // Show error alert if search fails
                        alert('Error fetching results.');
                    }
                });
            }
        });

        // Function to update the table with search results
        function updateTable(data, tableBody, rowFormatter) {
            tableBody.empty(); // Clear the current table body
            data.forEach(function(item) {
                // Append formatted rows to the table
                let row = rowFormatter(item);
                tableBody.append(row);
            });

            // Reinitialize actions for newly added buttons after table update
            setupActionButtons();
        }

        // Function to reconfigure action buttons after table update
        function setupActionButtons() {
            // Remova event handlers antigos antes de adicionar novos
            $(document).off('click', '.btn-danger[title="Excluir"]');
            $(document).off('click', '.btn-warning[title="Editar"]');

            // NOT IMPLEMENTED YET
        }
    });
}
