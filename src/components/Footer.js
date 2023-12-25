const Footer = (props) => {
  return (
    <footer>
      {/* <!--==================== FOOTER ====================--> */}
      <div className="container">
        {/*<!-- <div className="box">
                  <h3>About us</h3>
                  <p>It was popularised in the 1960 with the release of Latest sheets containing Lorem Ipsum
                      passage.</p>
                      <button className="btn btn-primary"><a href="/aboutus">Read More</a></button>
               </div> --> */}
        <div className="box">
          <h3>About</h3>
          <ul>
            <li>
              <p>{props.name}</p>
            </li>
            <li>
              <p>{props.mail}</p>
            </li>
            <li>
              <p>{props.mobile}</p>
            </li>
            <li>
              <p
                dangerouslySetInnerHTML={{
                  __html: props.role,
                }}
              />
            </li>
          </ul>
        </div>
        <div className="box quick-links">
          <h3>Quik Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="box">
          <h3>Follow Me</h3>
          <div>
            <ul>
              <li>
                <a
                  href="https://github.com/AnbarasuST2003"
                  target="_blank"
                  className="footer__link"
                >
                  <i className="ri-github-line"></i>Git Hub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/anbarasu-s-t-99631b209"
                  target="_blank"
                  className="footer__link"
                >
                  <i className="ri-linkedin-box-line"></i>Linked In
                </a>
              </li>
              <li>
                <a
                  href="mailto: josephanbu46@gmail.com"
                  target="_blank"
                  className="footer__link"
                >
                  <i className="ri-mail-line"></i>Mail Me
                </a>
              </li>
              <li>
                <a href="error.html" target="_blank" className="footer__link">
                  <i className="ri-facebook-box-line"></i>FaceBook
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- <div className="box instagram-api">
                  <h3>Instagram</h3>
                  <div className="post-wrap">
                      <div>
                          <img src="./images/sticky.jpg" alt="">
                      </div>
                      <div>
                          <img src="./images/coffee.jpg" alt="">
                      </div>
                      <div>
                          <img src="./images/darkchoc.jpg" alt="">
                      </div>
                      <div>
                          <img src="./images/darkchoc.jpg" alt="">
                      </div>
                      <div>
                          <img src="./images/coffee.jpg" alt="">
                      </div>
                      <div>
                          <img src="./images/sticky.jpg" alt="">
                      </div>
                  </div>
               </div> --> */}
      </div>
      {/* <!-- <footer className="footer"> --> */}
    </footer>
  );
};

export default Footer;
