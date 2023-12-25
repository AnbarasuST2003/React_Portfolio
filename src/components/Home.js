import image from "../assets/img/image.jpg";
import scratch from "../assets/img/scratch.png";
import curverarrow from "../assets/img/curved-arrow1.svg";

const Home = (props) => {
  return (
    <section className="home_section" id="home">
      <div className="home__container container grid">
        <h1 className="home__name">{props.name}</h1>

        <div className="home__perfil">
          <div className="home__image">
            <img src={image} alt="image" className="home__img" />
            <div className="home__shadow"></div>

            <img src={curverarrow} alt="" className="home__arrow" />
            <img src={scratch} alt="" className="home__line" />

            <div className="geometric-box"></div>
          </div>

          <div className="home__social">
            <a href={props.mail} target="_blank" className="home__social-link">
              <i className="ri-mail-line"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/anbarasu-s-t-99631b209"
              target="_blank"
              className="home__social-link"
            >
              <i className="ri-linkedin-box-line"></i>
            </a>
            <a
              href="https://github.com/AnbarasuST2003"
              target="_blank"
              className="home__social-link"
            >
              <i className="ri-github-line"></i>
            </a>
          </div>
        </div>
        <div className="home__info">
          {/* <p className="home__description">{props.hometext}</p> */}
          <p
            className="home__description"
            dangerouslySetInnerHTML={{ __html: props.role + props.hometext }}
          />

          <a href="#about" class="home__scroll">
            <div class="home__scroll-box">
              <span>
                <i class="ri-arrow-down-circle-fill"></i>
              </span>
            </div>

            <span class="home__scroll-text">Scroll Down</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
