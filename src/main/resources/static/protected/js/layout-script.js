document.addEventListener("DOMContentLoaded", function() {
    const CLASSES = {
        SHOW: 'show',
        BODY_PD: 'body-pd',
        BODY_PD_HOVER: 'body-pd-hover',
        ACTIVE: 'active',
        BX_X: 'bx-x'
    };

    /**
     * Exibe ou oculta a navbar ao clicar no botão de toggle
     * @param {string} toggleId - ID do botão de toggle
     * @param {string} navId - ID da navbar
     * @param {string} bodyId - ID do body
     * @param {string} headerId - ID do header
     */
    function showNavbar(toggleId, navId, bodyId, headerId) {
        const toggle = document.getElementById(toggleId);
        const nav = document.getElementById(navId);
        const bodypd = document.getElementById(bodyId);
        const headerpd = document.getElementById(headerId);

        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', () => {
                const isNavVisible = nav.classList.contains(CLASSES.SHOW);
                nav.classList.toggle(CLASSES.SHOW);
                toggle.classList.toggle(CLASSES.BX_X);

                // Alternar padding ao mostrar/ocultar navbar
                if (isNavVisible) {
                    bodypd.classList.remove(CLASSES.BODY_PD);
                    headerpd.classList.remove(CLASSES.BODY_PD);
                } else {
                    bodypd.classList.add(CLASSES.BODY_PD);
                    headerpd.classList.add(CLASSES.BODY_PD);
                }

                // Sempre remover a classe de hover ao clicar
                bodypd.classList.remove(CLASSES.BODY_PD_HOVER);
                headerpd.classList.remove(CLASSES.BODY_PD_HOVER);
            });

            // Mostrar navbar ao passar o mouse
            nav.addEventListener('mouseenter', () => {
                if (!toggle.classList.contains(CLASSES.BX_X)) {
                    nav.classList.add(CLASSES.SHOW);
                    bodypd.classList.add(CLASSES.BODY_PD_HOVER);
                    headerpd.classList.add(CLASSES.BODY_PD_HOVER);
                }
            });

            // Ocultar navbar ao retirar o mouse
            nav.addEventListener('mouseleave', () => {
                if (!toggle.classList.contains(CLASSES.BX_X)) {
                    nav.classList.remove(CLASSES.SHOW);
                    bodypd.classList.remove(CLASSES.BODY_PD_HOVER);
                    headerpd.classList.remove(CLASSES.BODY_PD_HOVER);
                }
            });
        }
    }

    /**
     * Aplica a classe 'active' no link selecionado na navbar
     */
    function activateLinks() {
        const linkColor = document.querySelectorAll('.nav_link');
        const currentPath = window.location.pathname;

        function colorLink() {
            linkColor.forEach(l => l.classList.remove(CLASSES.ACTIVE));
            this.classList.add(CLASSES.ACTIVE);
        }

        linkColor.forEach(l => l.addEventListener('click', colorLink));

        // Ativar o link com base no caminho atual da página
        linkColor.forEach(l => {
            if (l.getAttribute('href') === currentPath) {
                l.classList.add(CLASSES.ACTIVE);
            }
        });
    }

    /**
     * Alterna entre temas claro e escuro e salva a preferência no localStorage
     */
    function toggleTheme() {
        const body = document.body;
        const currentTheme = localStorage.getItem('theme');

        // Alterna entre 'light' e 'dark'
        if (currentTheme === "light") {
            body.classList.remove("light-mode");
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.add("light-mode");
            localStorage.setItem("theme", "light");
        }
    }

    /**
     * Aplica o tema salvo no localStorage quando a página é carregada
     */
    function applySavedTheme() {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "light") {
            document.body.classList.add("light-mode");
        }
    }

    /**
     * Adiciona o event listener no botão de tema
     */
    function setupThemeToggleButton() {
        const themeToggleButton = document.getElementById("theme-toggle");

        if (themeToggleButton) {
            themeToggleButton.addEventListener('click', toggleTheme);
        }
    }

    // Inicialização das funções
    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');
    activateLinks();
    applySavedTheme();
    setupThemeToggleButton(); // Inicializa o botão de tema
});
