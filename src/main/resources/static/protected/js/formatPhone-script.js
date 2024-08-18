document.getElementById('formattedPhone').addEventListener('input', function (e) {
    let input = e.target.value;
    let rawValue = input.replace(/\D/g, '');

    input = input.replace(/\D/g, '');
    input = input.replace(/^(\d{2})(\d)/g, '($1) $2');
    input = input.replace(/(\d{5})(\d)/, '$1-$2');

    e.target.value = input;
    document.getElementById('employeePhone').value = rawValue;
});
