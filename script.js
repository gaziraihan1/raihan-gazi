//Skill section progress bar

document.addEventListener("scroll", function() {
    const progressBarHtml = document.querySelector(".html-bar");
    const progressBarPositionHtml = progressBarHtml.getBoundingClientRect().top;
    const progressBarCss = document.querySelector(".css-bar");
    const progressBarPositionCss = progressBarCss.getBoundingClientRect().top;
    const progressBarJs = document.querySelector(".js-bar");
    const progressBarPositionJs = progressBarJs.getBoundingClientRect().top;
    const progressBarTailwind = document.querySelector(".tailwind-bar");
    const progressBarPositionTailwind = progressBarTailwind.getBoundingClientRect().top;
    const progressBarBootstrap = document.querySelector(".bootstrap-bar");
    const progressBarPositionBootstrap = progressBarBootstrap.getBoundingClientRect().top;
    const progressBarReact = document.querySelector(".react-bar");
    const progressBarPositionReact = progressBarReact.getBoundingClientRect().top;

    //other section
    const progressBarGit = document.querySelector(".git");
    const progressBarPositionGit = progressBarGit.getBoundingClientRect().top;
    const progressBarAws = document.querySelector(".aws");
    const progressBarPositionAws = progressBarAws.getBoundingClientRect().top;
    const progressBarNetlify = document.querySelector(".netlify");
    const progressBarPositionNetlify = progressBarNetlify.getBoundingClientRect().top;
    const progressBarAdobe = document.querySelector(".adobe-xd");
    const progressBarPositionAdobe = progressBarAdobe.getBoundingClientRect().top;
    const progressBarFigma = document.querySelector(".figma");
    const progressBarVercel = document.querySelector(".vercel");
    const progressBarPositionVercel = progressBarVercel.getBoundingClientRect().top;
    const progressBarPositionFigma = progressBarFigma.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (progressBarPositionHtml < screenPosition || progressBarPositionCss < screenPosition || progressBarPositionJs < screenPosition || progressBarPositionTailwind < screenPosition || progressBarPositionBootstrap < screenPosition || progressBarPositionReact < screenPosition || progressBarPositionGit < screenPosition || progressBarPositionAws < screenPosition || progressBarPositionNetlify < screenPosition || progressBarPositionAdobe < screenPosition || progressBarPositionFigma < screenPosition || progressBarPositionVercel < screenPosition) {
        progressBarHtml.style.width = "95%";
        progressBarCss.style.width = "95%";
        progressBarJs.style.width = "70%";
        progressBarTailwind.style.width = "85%";
        progressBarBootstrap.style.width = "80%";
        progressBarReact.style.width = "60%";
        progressBarGit.style.width = "85%";
        progressBarVercel.style.width = "95%";
        progressBarAws.style.width = "95%";
        progressBarNetlify.style.width = "95%";
        progressBarAdobe.style.width = "80%";
        progressBarFigma.style.width = "60%";
    }
    
});

document.addEventListener('DOMContentLoaded', (event) => {
    const checkbox = document.getElementById('darkmode');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.body.classList.add(currentTheme);

        if (currentTheme === 'dark-mode') {
            checkbox.checked = true;
        }
    }

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
});

//smooth scroll

window.addEventListener('scroll', function() {
    const scrollToTop = document.getElementById('scroll-to-top');
    if (window.scrollY > 300) { 
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
});


document.getElementById('scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    smoothScrollToTop(600); 
});

function smoothScrollToTop(duration) {
    const start = window.scrollY;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    const scroll = (timestamp) => {
        const currentTime = timestamp || new Date().getTime();
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); 
        window.scrollTo(0, start * (1 - progress));

        if (timeElapsed < duration) {
            window.requestAnimationFrame(scroll);
        }
    };

    window.requestAnimationFrame(scroll);
};

//smooth scroll for navbar

function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.scrollY;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    const scroll = (timestamp) => {
        const currentTime = timestamp || new Date().getTime();
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); 
        window.scrollTo(0, startPosition + (targetPosition - startPosition) * progress);

        if (timeElapsed < duration) {
            window.requestAnimationFrame(scroll);
        }
    };

    window.requestAnimationFrame(scroll);
}

// Add event listeners to all nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            smoothScrollTo(targetElement.offsetTop, 400); 
        }
    });
});







document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector("header svg");
    const navMenu = document.querySelector("nav ul");
    const menuItems = document.querySelectorAll("nav ul li");

    // Toggle the visibility of the menu when the menu icon is clicked
    menuIcon.addEventListener("click", function () {
        navMenu.classList.toggle("show-menu");
    });

    // Hide the menu when any menu item is clicked
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            navMenu.classList.remove("show-menu");
        });
    });
});
