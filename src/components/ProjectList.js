import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyProjectData from "../services/my.project";

const ProList = () => {
  const { projectId } = useParams(); // Get the project ID from URL parameters
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    // Fetch project data when the component mounts
    MyProjectData.getProject(projectId)
      .then((snapshot) => {
        if (snapshot.exists()) {
          // Check if the project exists
          setProjectData(snapshot.data());
        } else {
          // Handle the case where the project does not exist
          console.log("Project not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching project:", error);
      });
  }, [projectId]); // Ensure this effect runs whenever the projectId changes

  // Render the project data
  return (
    <div>
      {projectData ? (
        <section className="about section" id="about">
          <div className="about__container container grid">
            <h2 className="section__title-1">Project Details.</h2>

            <div className="about__perfil">
              <div className="about__image">
                <img
                  src="./assets/img/icecream.png"
                  alt=""
                  className="about__img"
                />

                <div className="about__shadow"></div>

                <div className="geometric-box"></div>
                <img
                  src="assets/img/scratch.png"
                  alt=""
                  className="about__line"
                />
                <div className="about__box"></div>
              </div>
            </div>
            <div className="about__info">
              <p className="about__description">
                <b>{projectData.project_name}</b>
              </p>
              <ul className="about__list">
                <li className="about__details">
                  {projectData.project_heading}
                </li>
                <li className="about__details">{projectData.duration}</li>
                <li className="about__details">{projectData.type}</li>
                <li className="about__details">{projectData.description}</li>
                <li className="about__details">
                  <a
                    href={projectData.gitlink}
                    target="_blank"
                    className="projects__link"
                  >
                    <i className="ri-github-line"></i> Git Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="about__container2 container grid">
            <h2 className="section__title-1">About Project</h2>

            <div className="about__info2">
              <p className="about__description">
                <b>Tools Used : </b> {projectData.tools}
              </p>
              <p className="about__description">
                <b>Roles and Responsibilites</b>
              </p>
              <p
                className="about__passage"
                dangerouslySetInnerHTML={{ __html: projectData.detail }}
              />
            </div>
          </div>
        </section>
      ) : (
        <p>Loading project data...</p>
      )}
    </div>
  );
};

export default ProList;
// now the need is data is viewed successfully project data image is problem try path in img url or bascket learn ok good luck
