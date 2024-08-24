document.addEventListener("DOMContentLoaded", function(event) {
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId);

        if(toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show');
                toggle.classList.toggle('bx-x');

                if(nav.classList.contains('show')) {
                    bodypd.classList.add('body-pd');
                    headerpd.classList.add('body-pd');
                    bodypd.classList.remove('body-pd-hover');
                    headerpd.classList.remove('body-pd-hover');
                } else {
                    bodypd.classList.remove('body-pd');
                    headerpd.classList.remove('body-pd');
                }
            });

            nav.addEventListener('mouseenter', () => {
                if (!toggle.classList.contains('bx-x')) {
                    nav.classList.add('show');
                    bodypd.classList.add('body-pd-hover');
                    headerpd.classList.add('body-pd-hover');
                }
            });

            nav.addEventListener('mouseleave', () => {
                if (!toggle.classList.contains('bx-x')) {
                    nav.classList.remove('show');
                    bodypd.classList.remove('body-pd-hover');
                    headerpd.classList.remove('body-pd-hover');
                }
            });
        }
    };

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

    /* Código existente para ativar links */
    const linkColor = document.querySelectorAll('.nav_link');

    function colorLink() {
        if(linkColor) {
            linkColor.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        }
    }

    linkColor.forEach(l => l.addEventListener('click', colorLink));

    const currentPath = window.location.pathname;
    linkColor.forEach(l => {
        if (l.getAttribute('href') === currentPath) {
            l.classList.add('active');
        }
    });
});
