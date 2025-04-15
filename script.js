document.addEventListener("DOMContentLoaded", function () {
  // Menu icon toggle logic
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');
  let on = true;

  menuIcon.onclick = () => {
    if (on) {
      navbar.style.display = "block";
    } else {
      navbar.style.display = "none";
    }
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    on = !on;
  };

  // Scroll event for adding/removing active link and header shadow
  window.addEventListener("scroll", () => {
    scrollActive();
    headerShadow();
  });

  // Function to change active link on scroll
  function scrollActive() {
    const sections = document.querySelectorAll("section[id]"); // All sections with an id
    const scrollY = window.scrollY; // Get the scroll position
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight; // Height of each section
      const sectionTop = current.offsetTop - 50; // Top position of the section, with offset
      const sectionId = current.getAttribute("id"); // Get the id of the section

      // Find the link in the navbar that corresponds to the section
      const link = document.querySelector(".navbar a[href*=" + sectionId + "]");

      if (link) {
        // Check if the scrollY is within the section's bounds
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add("active"); // Add the active class if within bounds
        } else {
          link.classList.remove("active"); // Remove the active class if not
        }
      }
    });
  }

  // Function to add shadow to header when scrolling
  function headerShadow() {
    const navHeader = document.getElementById("header");
    if (navHeader) {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.8)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
      } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
      }
    }
  }

  // Typing effect for profession titles
  new Typed(".typedText", {
    strings: ["UI/UX Designer", "Frontend Developer", "Backend Developer", "Software Tester"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
  });

  // Scroll reveal animations
  const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  });

  sr.reveal(".featured-text-card", {});
  sr.reveal(".featured-name", { delay: 100 });
  sr.reveal(".featured-text-info", { delay: 200 });
  sr.reveal(".featured-text-btn", { delay: 200 });
  sr.reveal(".social-icons", { delay: 200 });
  sr.reveal(".timeline-item", { interval: 200 });
  sr.reveal(".heading", {});

  const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
  });

  srLeft.reveal(".service-box", { delay: 100 });
  srLeft.reveal(".elyas", { delay: 100 });
  srLeft.reveal(".contact", { delay: 100 });

  const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
  });

  srRight.reveal(".abubaker", { delay: 100 });
  srRight.reveal(".form-control", { delay: 100 });
  srRight.reveal(".home-img", { delay: 100 });
});
