document.addEventListener("DOMContentLoaded", function() {
    const CLASSES = {
        SHOW: 'show',
        BODY_PD: 'body-pd',
        BODY_PD_HOVER: 'body-pd-hover',
        ACTIVE: 'active',
        BX_X: 'bx-x'
    };

    /**
     * Toggles the navbar visibility when clicking the toggle button
     * @param {string} toggleId - ID of the toggle button
     * @param {string} navId - ID of the navbar
     * @param {string} bodyId - ID of the body
     * @param {string} headerId - ID of the header
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

                // Toggle padding when showing/hiding the navbar
                if (isNavVisible) {
                    bodypd.classList.remove(CLASSES.BODY_PD);
                    headerpd.classList.remove(CLASSES.BODY_PD);
                } else {
                    bodypd.classList.add(CLASSES.BODY_PD);
                    headerpd.classList.add(CLASSES.BODY_PD);
                }

                // Always remove hover class when clicking
                bodypd.classList.remove(CLASSES.BODY_PD_HOVER);
                headerpd.classList.remove(CLASSES.BODY_PD_HOVER);
            });

            // Show navbar on mouse enter
            nav.addEventListener('mouseenter', () => {
                if (!toggle.classList.contains(CLASSES.BX_X)) {
                    nav.classList.add(CLASSES.SHOW);
                    bodypd.classList.add(CLASSES.BODY_PD_HOVER);
                    headerpd.classList.add(CLASSES.BODY_PD_HOVER);
                }
            });

            // Hide navbar on mouse leave
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
     * Applies the 'active' class to the selected navbar link
     */
    function activateLinks() {
        const linkColor = document.querySelectorAll('.nav_link');
        const currentPath = window.location.pathname;

        function colorLink() {
            linkColor.forEach(l => l.classList.remove(CLASSES.ACTIVE));
            this.classList.add(CLASSES.ACTIVE);
        }

        linkColor.forEach(l => l.addEventListener('click', colorLink));

        // Activate link based on the current page path
        linkColor.forEach(l => {
            if (l.getAttribute('href') === currentPath) {
                l.classList.add(CLASSES.ACTIVE);
            }
        });
    }

    /**
     * Toggles between light and dark themes and saves the preference to localStorage
     */
    function toggleTheme() {
        const body = document.body;
        const currentTheme = localStorage.getItem('theme');

        // Toggle between 'light' and 'dark'
        if (currentTheme === "light") {
            body.classList.remove("light-mode");
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.add("light-mode");
            localStorage.setItem("theme", "light");
        }
    }

    /**
     * Applies the saved theme from localStorage when the page is loaded
     */
    function applySavedTheme() {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "light") {
            document.body.classList.add("light-mode");
        }
    }

    /**
     * Adds the event listener to the theme toggle button
     */
    function setupThemeToggleButton() {
        const themeToggleButton = document.getElementById("theme-toggle");

        if (themeToggleButton) {
            themeToggleButton.addEventListener('click', toggleTheme);
        }
    }

    // Initialize functions
    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');
    activateLinks();
    applySavedTheme();
    setupThemeToggleButton(); // Initialize theme toggle button
});
