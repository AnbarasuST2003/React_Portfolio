import pro1 from "../assets/img/icecream.png";
import pro2 from "../assets/img/telebot.png";
import pro3 from "../assets/img/portfolio.png";
import { useEffect, useState } from "react";
import MyProjectData from "../services/my.project";
import { Link } from "react-router-dom";
const Projects = ({ getProjectId }) => {
  //Projects Call data
  const [project, setProject] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const data = await MyProjectData.getAllProject();
    console.log(data);
    setProject(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    //<!--==================== PROJECTS ====================-->
    <section className="projects section" id="projects">
      <h2 className="section__title-1">
        <span>Projects.</span>
      </h2>

      <div className="projects__container grid">
        {project.map((doc) => {
          return (
            <article className="projects__card">
              <div className="projects__image">
                <img src={pro2} alt="image" className="projects__img" />

                <Link
                  to={`/projectsummary/${doc.id}`} // Pass the project ID as a URL parameter
                  onClick={(e) => getProjectId(doc.id)}
                  className="projects_arrow_button button"
                  // onClick={(e) => getProjectId(doc.id)}
                >
                  <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>

              <div className="projects__content">
                <h3 className="projects__subtitle">{doc.title}</h3>
                <h2 className="projects__title">{doc.name}</h2>

                <p className="projects__description">{doc.description}</p>
              </div>

              <div className="projects__buttons">
                <a
                  href={doc.gitlink}
                  target="_blank"
                  className="projects__link"
                >
                  <i className="ri-github-line"></i>View
                </a>
              </div>
            </article>
          );
        })}

        {/* <article className="projects__card">
          <div className="projects__image">
            <img src={pro2} alt="image" className="projects__img" />

            <a
              href="#"
              className="projects_arrow_button button"
              onClick={(e) => getProjectId(doc.id)}
            >
              <i className="ri-arrow-right-up-line"></i>
            </a>
          </div>

          <div className="projects__content">
            <h3 className="projects__subtitle">Telegram Bot</h3>
            <h2 className="projects__title">Album_Handler_Bot</h2>

            <p className="projects__description">
              academic project that carry out in design and stucture os the
              layout, showing the design at perfect request
            </p>
          </div>

          <div className="projects__buttons">
            <a href="#" target="_blank" className="projects__link">
              <i className="ri-github-line"></i>View
            </a>
            <a href="#" target="_blank" className="projects__link">
              <i className="ri-github-line"></i>View
            </a>
          </div>
        </article>

        <article className="projects__card">
          <div className="projects__image">
            <img src={pro3} alt="image" className="projects__img" />

            <a href="#" className="projects_arrow_button button">
              <i className="ri-arrow-right-up-line"></i>
            </a>
          </div>

          <div className="projects__content">
            <h3 className="projects__subtitle">Website</h3>
            <h2 className="projects__title">Portfolio Website</h2>

            <p className="projects__description">
              academic project that carry out in design and stucture os the
              layout, showing the design at perfect request
            </p>
          </div>

          <div className="projects__buttons">
            <a href="#" target="_blank" className="projects__link">
              <i className="ri-github-line"></i>View
            </a>
            <a href="#" target="_blank" className="projects__link">
              <i className="ri-github-line"></i>View
            </a>
          </div>
        </article>

        <article className="projects__card">
          <div className="projects__image">
            <img src={pro1} alt="image" className="projects__img" />

            <a href="#" className="projects_arrow_button button">
              <i className="ri-arrow-right-up-line"></i>
            </a>
          </div>

          <div className="projects__content">
            <h3 className="projects__subtitle">Website</h3>
            <h2 className="projects__title">IceCream Shop Advertisement</h2>

            <p className="projects__description">
              academic project that carry out in design and stucture os the
              layout, showing the design at perfect request
            </p>
          </div>

          <div className="projects__buttons">
            <a href="#" target="_blank" className="projects__link">
              <i className="ri-github-line"></i>View
            </a>
            <a href="#" target="_blank" className="projects__link">
              <i className="ri-github-line"></i>View
            </a>
          </div>
        </article> */}
      </div>
      <div className="project__footer">
        <a href="error.html">See All</a>
      </div>
    </section>
  );
};

export default Projects;
