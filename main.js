/* ============================
   MOBILE NAVIGATION TOGGLE
=============================== */
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
        menuBtn.classList.toggle("open");
    });
}

/* ============================
   SMOOTH SCROLLING (CTA BUTTON)
=============================== */
const links = document.querySelectorAll("a[href^='#']");

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

/* ============================
   RESPONSIVE HERO SECTION
=============================== */
function resizeHero() {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
}

// Call once + on resize
resizeHero();
window.addEventListener("resize", resizeHero);

/* ============================
   LAZY LOADING IMAGES
=============================== */
const lazyImages = document.querySelectorAll("img[data-src]");

const lazyLoad = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let img = entry.target;
            img.src = img.dataset.src;
            img.classList.add("fade-in");
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => lazyLoad.observe(img));

/* ============================
   STICKY HEADER ON SCROLL
=============================== */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

/* ============================
   RESPONSIVE IMAGE GALLERY
=============================== */
const galleryImages = document.querySelectorAll(".profile-gallery img");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        openImagePreview(img.src);
    });
});

function openImagePreview(src) {
    const preview = document.createElement("div");
    preview.className = "image-preview";
    preview.innerHTML = `
        <div class="image-preview-content">
            <img src="${src}" />
        </div>
    `;
    preview.addEventListener("click", () => {
        preview.remove();
    });
    document.body.appendChild(preview);
}