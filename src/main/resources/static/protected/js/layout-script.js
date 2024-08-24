document.addEventListener("DOMContentLoaded", function() {
    const CLASSES = {
        SHOW: 'show',
        BODY_PD: 'body-pd',
        BODY_PD_HOVER: 'body-pd-hover',
        ACTIVE: 'active',
        BX_X: 'bx-x'
    };

    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId);
        const nav = document.getElementById(navId);
        const bodypd = document.getElementById(bodyId);
        const headerpd = document.getElementById(headerId);

        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', () => {
                const isNavVisible = nav.classList.contains(CLASSES.SHOW);
                nav.classList.toggle(CLASSES.SHOW);
                toggle.classList.toggle(CLASSES.BX_X);

                if (isNavVisible) {
                    // Se a navbar estava visível, estamos fechando
                    bodypd.classList.remove(CLASSES.BODY_PD);
                    headerpd.classList.remove(CLASSES.BODY_PD);
                } else {
                    // Se a navbar estava fechada, estamos abrindo
                    bodypd.classList.add(CLASSES.BODY_PD);
                    headerpd.classList.add(CLASSES.BODY_PD);
                }

                // Sempre remover a classe de hover ao clicar
                bodypd.classList.remove(CLASSES.BODY_PD_HOVER);
                headerpd.classList.remove(CLASSES.BODY_PD_HOVER);
            });

            nav.addEventListener('mouseenter', () => {
                if (!toggle.classList.contains(CLASSES.BX_X)) {
                    nav.classList.add(CLASSES.SHOW);
                    bodypd.classList.add(CLASSES.BODY_PD_HOVER);
                    headerpd.classList.add(CLASSES.BODY_PD_HOVER);
                }
            });

            nav.addEventListener('mouseleave', () => {
                if (!toggle.classList.contains(CLASSES.BX_X)) {
                    nav.classList.remove(CLASSES.SHOW);
                    bodypd.classList.remove(CLASSES.BODY_PD_HOVER);
                    headerpd.classList.remove(CLASSES.BODY_PD_HOVER);
                }
            });
        }
    };

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

    const linkColor = document.querySelectorAll('.nav_link');

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove(CLASSES.ACTIVE));
            this.classList.add(CLASSES.ACTIVE);
        }
    }

    linkColor.forEach(l => l.addEventListener('click', colorLink));

    const currentPath = window.location.pathname;
    linkColor.forEach(l => {
        if (l.getAttribute('href') === currentPath) {
            l.classList.add(CLASSES.ACTIVE);
        }
    });
});