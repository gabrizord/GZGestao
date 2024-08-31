import 'jquery'; // Certifique-se de que jQuery está antes de tudo que depende dele
import 'bootstrap'; // Bootstrap normalmente depende de jQuery
import '@popperjs/core'; // Popper.js para tooltips e popovers

// Seus scripts customizados
import './layout-script.js'; // Script para layout
import './employee-script.js'; // Script de funcionários
import './employee/formatPhone-script.js'; // Outro script relacionado

// Código adicional para inicializar sua aplicação
document.addEventListener('DOMContentLoaded', () => {
    // Inicialização específica, se necessário
});
