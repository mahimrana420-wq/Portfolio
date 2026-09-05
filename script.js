/* ==================================================
   MOBILE MENU
================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.getElementById("nav");


if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        function () {

            nav.classList.toggle("open");

        }
    );

}


/* Close menu after clicking */

const navLinks =
    document.querySelectorAll("nav a");


navLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            nav.classList.remove("open");

        }
    );

});



/* ==================================================
   ACTIVE NAVIGATION
================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener(
    "scroll",
    function () {

        let current = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 150;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute("href")
                    === "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);



/* ==================================================
   DARK / LIGHT MODE
================================================== */

const themeBtn =
    document.getElementById(
        "themeBtn"
    );


/* Load saved theme */

const savedTheme =
    localStorage.getItem(
        "theme"
    );


if (savedTheme === "light") {

    document.body.classList.add(
        "light"
    );

    themeBtn.innerHTML = "☾";

} else {

    themeBtn.innerHTML = "☀";

}


/* Change theme */

themeBtn.addEventListener(
    "click",
    function () {


        document.body.classList.toggle(
            "light"
        );


        if (
            document.body.classList.contains(
                "light"
            )
        ) {

            /* LIGHT MODE */

            themeBtn.innerHTML = "☾";

            localStorage.setItem(
                "theme",
                "light"
            );

        } else {

            /* DARK MODE */

            themeBtn.innerHTML = "☀";

            localStorage.setItem(
                "theme",
                "dark"
            );

        }

    }
);



/* ==================================================
   SCROLL ANIMATION
================================================== */

const cards =
    document.querySelectorAll(
        ".skill-card, .project-card, .education-card, .achievement"
    );


const observer =
    new IntersectionObserver(
        function (entries) {


            entries.forEach(
                function (entry) {


                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


cards.forEach(
    function (card) {


        card.style.opacity = "0";

        card.style.transform =
            "translateY(30px)";

        card.style.transition =
            "opacity .7s ease, transform .7s ease";


        observer.observe(card);

    }
);