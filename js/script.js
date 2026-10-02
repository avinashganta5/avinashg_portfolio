document.addEventListener("DOMContentLoaded", () => {

    const menuButton =
        document.getElementById("menuButton");

    const navLinks =
        document.getElementById("navLinks");


    /* =========================================
       MOBILE NAVIGATION
    ========================================== */

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", () => {

            const isOpen =
                navLinks.classList.toggle("nav-open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        navLinks
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener("click", () => {

                    navLinks.classList.remove(
                        "nav-open"
                    );

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                });

            });

    }


    /* =========================================
       ACTIVE NAVIGATION
    ========================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navigationLinks =
        document.querySelectorAll(
            ".nav-links a[href^='#']"
        );


    const updateActiveNavigation = () => {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + 180;


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                    sectionTop + sectionHeight
            ) {
                currentSection =
                    section.getAttribute("id");
            }

        });


        navigationLinks.forEach((link) => {

            link.classList.remove("active");

            const target =
                link.getAttribute("href");

            if (
                target === `#${currentSection}`
            ) {
                link.classList.add("active");
            }

        });

    };


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();


    /* =========================================
       NAVBAR SCROLL EFFECT
    ========================================== */

    const navbar =
        document.querySelector(".navbar");


    const updateNavbar = () => {

        if (!navbar) {
            return;
        }

        if (window.scrollY > 30) {

            navbar.style.background =
                "rgba(23, 21, 31, 0.9)";

            navbar.style.boxShadow =
                "0 10px 30px rgba(0, 0, 0, 0.18)";

        } else {

            navbar.style.background =
                "rgba(23, 21, 31, 0.72)";

            navbar.style.boxShadow =
                "none";

        }

    };


    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();


    /* =========================================
       SCROLL REVEAL
    ========================================== */

    const revealElements =
        document.querySelectorAll(
            ".clay, .clay-deep, .section-heading"
        );


    revealElements.forEach((element) => {

        element.classList.add(
            "reveal-element"
        );

    });


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach((entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "reveal-visible"
                            );

                            observerInstance.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.08
                }
            );


        revealElements.forEach((element) => {
            observer.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add(
                "reveal-visible"
            );
        });

    }


    /* =========================================
       TERMINAL TYPING EFFECT
    ========================================== */

    const terminal =
        document.querySelector(
            ".terminal-body"
        );


    if (terminal) {

        terminal.classList.add(
            "terminal-loaded"
        );

    }


    /* =========================================
       CURRENT YEAR
    ========================================== */

    const yearElement =
        document.querySelector(
            "[data-current-year]"
        );


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =========================================
       SMOOTH SCROLL
    ========================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });

});
