import image from "../assets/img/image2.jpg";
import resume from "../assets/img/resume.png";
import scratch from "../assets/img/scratch.png";
import resumepdf from "../assets/img/AnbarasuST.pdf";

const About = (props) => {
  return (
    // <!--==================== ABOUT ====================-->
    <section className="about section" id="about">
      <div className="about__container container grid">
        <h2 className="section__title-1">About Me.</h2>

        <div className="about__perfil">
          <div className="about__image">
            <img src={image} alt="" className="about__img" />

            <div className="about__shadow"></div>

            <div className="geometric-box"></div>
            <img src={scratch} alt="" className="about__line" />
            <div className="about__box"></div>
          </div>
        </div>
        <div className="about__info">
          <p
            className="about__description"
            dangerouslySetInnerHTML={{ __html: props.abouttext }}
          />

          <ul className="about__list">
            <li className="about__item">
              <b>My Skills Are :</b> {props.skilltext}
            </li>
          </ul>

          <div className="about__buttons">
            <a href="/summary" className="button">
              <i className="ri-arrow-right-up-fill"></i> More
            </a>

            {/* <!-- <a href="#" target="_blank" className="button-ghost">
                  <i className="ri-instagram-line"></i>
                </a> --> */}
            <a
              href="https://www.linkedin.com/in/anbarasu-s-t-99631b209"
              target="_blank"
              className="button__ghost"
            >
              <i className="ri-linkedin-box-line"></i>
            </a>
            <a href={resumepdf} target="_blank" className="button__ghost">
              <img src={resume} width="25px" alt="" />
            </a>
            {/* {/* <!-- <a href="#" target="_blank" className="button-ghost">
                  <i className="ri-github-line"></i> 
                </a> --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
