import curvedarrow from "../assets/img/curved-arrow1.svg";

const Contact = () => {
  return (
    //  <!--==================== CONTACT ====================-->
    <section className="contact section" id="contact">
      <div className="contact__containe grid">
        <div className="contact__data">
          <h2 className="section__title-2">
            <span>Contact Me.</span>
          </h2>

          <p className="contact__description-2">
            If you12 Interested to make me know your <b>Name</b> and{" "}
            <b>Email Address</b>, but you won't Receive anything otherthan my
            replay
          </p>
        </div>

        <div className="contact__mail">
          <h2 className="contact__title">Send Me A Message</h2>

          <form action="" className="contact__form" id="contact-form">
            <div className="contact__group">
              <div className="contact__box">
                <input
                  type="text"
                  name="user_name"
                  className="contact__input"
                  id="name"
                  required
                  placeholder="First Name"
                />
                <label for="name" className="contact__label">
                  First Name
                </label>
              </div>

              <div className="contact__box">
                <input
                  type="email"
                  name="user_email"
                  className="contact__input"
                  id="email"
                  required
                  placeholder="Email Address"
                />
                <label for="email" className="contact__label">
                  Email Address
                </label>
              </div>
            </div>
            <div className="contact__box">
              <input
                type="text"
                name="user_subjet"
                className="contact__input"
                id="subject"
                required
                placeholder="Subject"
              />
              <label for="subject" className="contact__label">
                Subject
              </label>
            </div>

            <div className="contact__box contact__area">
              <textarea
                name="user_message"
                className="contact__input"
                id="message"
                required
                placeholder="Message"
              ></textarea>
              <label for="message" className="contact__label">
                Message
              </label>
            </div>

            <p className="contact__message" id="contact-message"></p>

            <button type="submit" className="contact__button button">
              <i className="ri-send-plane-line"></i> Send Message
            </button>
          </form>
        </div>

        <div className="contact__social">
          <img src={curvedarrow} alt="" className="contact__social-arrow" />

          <div className="contact__social-data">
            <div>
              <p className="contact__social-description-1">
                Does not send emails
              </p>

              <p className="contact__social-description-2">
                write me on my social networks
              </p>
            </div>

            <div className="contact__social-links">
              <a
                href="error.html"
                target="_blank"
                className="contact__social-link"
              >
                <i className="ri-facebook-circle-line"></i>
              </a>

              <a
                href="mailto: josephanbu46@gmail.com"
                target="_blank"
                className="contact__social-link"
              >
                <i className="ri-mail-line"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/anbarasu-s-t-99631b209"
                target="_blank"
                className="contact__social-link"
              >
                <i className="ri-linkedin-box-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
