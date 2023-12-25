import React, { useEffect } from "react";
const Header = () => {
  const darkTheme = "dark-theme";
  const iconTheme = "ri-sun-line";

  // Function to get the current theme
  const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";

  // Function to get the current icon
  const getCurrentIcon = () =>
    document.body.classList.contains(iconTheme)
      ? "ri-moon-line"
      : "ri-sun-line";

  // Function to toggle the theme
  const toggleTheme = () => {
    document.body.classList.toggle(darkTheme);
    const themeButton = document.getElementById("theme-button"); // Define themeButton here
    themeButton.classList.toggle(iconTheme);

    // Save the theme preference to local storage
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  };

  // Add an event listener when the component mounts
  useEffect(() => {
    const themeButton = document.getElementById("theme-button");
    themeButton.addEventListener("click", toggleTheme);

    // Cleanup the event listener when the component unmounts
    return () => {
      themeButton.removeEventListener("click", toggleTheme);
    };
  }, []); // Empty dependency array ensures the effect runs once after initial render

  // Check and set the theme based on local storage when the component renders
  useEffect(() => {
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    if (selectedTheme) {
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
      const themeButton = document.getElementById("theme-button"); // Define themeButton here
      themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
        iconTheme
      );
    }
  }, []);

  // Function to show/hide the menu
  const showMenu = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.add("show-menu");
  };

  const hideMenu = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
  };

  // Add an event listener when the component mounts for menu show/hide
  useEffect(() => {
    const navToggle = document.getElementById("nav-toggle");
    navToggle.addEventListener("click", showMenu);

    const navClose = document.getElementById("nav-close");
    navClose.addEventListener("click", hideMenu);

    // Cleanup the event listeners when the component unmounts
    return () => {
      navToggle.removeEventListener("click", showMenu);
      navClose.removeEventListener("click", hideMenu);
    };
  }, []);

  // Function to add a shadow to the header on scroll
  const shadowHeader = () => {
    const header = document.getElementById("header");
    window.scrollY >= 50
      ? header.classList.add("shadow-header")
      : header.classList.remove("shadow-header");
  };
  useEffect(() => {
    window.addEventListener("scroll", shadowHeader);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", shadowHeader);
    };
  }, []);

  // Function to add active link based on scroll position
  const scrollActive = () => {
    const scrollDown = window.scrollY;
    const sections = document.querySelectorAll("section[id]"); // Define 'sections' here

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute("id");
      const sectionsClass = document.querySelector(
        `.nav__menu a[href*=${sectionId}]`
      );

      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add("active-link");
      } else {
        sectionsClass.classList.remove("active-link");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollActive);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);

  return (
    <header className="header" id="header">
      <div className="nav container">
        <a href="#" className="nav__logo">
          <span className="nav__logo-circle">ST</span>
          <span className="nav__logo-name">Anbarasu</span>
        </a>

        <div className="nav__menu" id="nav-menu">
          <span className="nav__title">Menu</span>

          {/* <!-- <h3 className="nav__name">Anbu</h3> --> */}

          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                About Me
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#projects" className="nav__link">
                Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link nav__link-button">
                Contact Me
              </a>
            </li>
          </ul>

          {/* <!-- close button --> */}
          <div className="nav__close" id="nav-close">
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__buttons">
          {/* <!-- theme --> */}
          <i className="ri-moon-line" id="theme-button"></i>
          {/* <!-- toogle button --> */}
          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-4-fill"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
