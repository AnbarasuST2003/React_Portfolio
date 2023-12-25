import MySkillService from "../services/my.skills";
import { useEffect, useState } from "react";
import image from "../assets/img/image2.jpg";
import resume from "../assets/img/resume.png";
import scratch from "../assets/img/scratch.png";
import resumepdf from "../assets/img/AnbarasuST.pdf";

const Summary = (props) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills();
  }, []);
  const getSkills = async () => {
    const data = await MySkillService.getAllSkills();
    console.log(data);
    setSkills(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

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
  return (
    <div>
      <header className="header" id="header">
        <div className="nav container">
          <a href="/" className="nav__logo">
            <span className="nav__logo-name">
              <i className="ri-arrow-left-fill"></i>
            </span>
          </a>

          <div className="nav__buttons">
            {/* <!-- theme --> */}
            <i className="ri-moon-line" id="theme-button"></i>
          </div>
        </div>
      </header>

      {/* <!--==================== MAIN ====================--> */}
      <main className="main">
        {/* <!--==================== summary ====================--> */}
        <section className="summary section" id="summary">
          <div className="summary__container container grid">
            <h2 className="section__title-1">About Me.</h2>

            <div className="summary__perfil">
              <div className="summary__image">
                <img src={image} alt="" className="summary__img" />

                <div className="summary__shadow"></div>

                <div className="geometric-box"></div>
                <img src={scratch} alt="" className="summary__line" />
                <div className="summary__box"></div>
              </div>
            </div>
            <div className="summary__info">
              <p className="summary__description">
                <b>Personal Details</b>
              </p>
              <ul className="summary__list">
                <li className="summary__details">{props.mail}</li>
                <li className="summary__details">{props.mobile}</li>
                <li className="summary__details">
                  10 Kaveri 2nd Street, Parasakthi Nagar, Avaniyapuram
                </li>
                <li className="summary__details">Madurai</li>
              </ul>
              <div className="summary__buttons">
                <p>Resume</p>

                <a href={resumepdf} target="_blank" className="button__ghost">
                  <img src={resume} width="30px" alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="summary2 section" id="summary">
          <div className="summary__container2 container grid">
            <h2 className="section__title-1 summary_t1">
              Key Skills & Professional Summary.
            </h2>
            <h2 className="section__title-1 summary_t2">
              Professional Summary.
            </h2>

            <p className="summary__description2">
              <b>My Skills Are :</b> HTML, CSS, JAVASCRIPT, REACT, Git &GitHub,
              Figma, SQL, Mysql WorkBench, PYTHON
            </p>

            <ul className="summary__summary">
              {skills.map((doc) => {
                return (
                  <li
                    class="summary__items"
                    dangerouslySetInnerHTML={{ __html: doc.skill }}
                  />
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Summary;
