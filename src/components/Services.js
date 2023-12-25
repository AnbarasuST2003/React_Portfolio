const Services = () => {
  return (
    // <!--==================== SERVICES ====================-->
    <section className="services section" id="services">
      <h2 className="section__title-2">
        <span>Services.</span>
      </h2>

      <div className="services__container container grid">
        <article className="services__card">
          <div className="services__border"></div>
          <div className="services__content">
            <div className="services__icon">
              <div className="services__box"></div>
              <i className="ri-layout-4-line"></i>
            </div>

            <h2 className="services__title">Web Design</h2>

            <p className="services__deacription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium perferendis necessitatibus nemo minus quaerat,
              nesciunt laudantium. Enim quam corrupti voluptatibus!
            </p>
          </div>
        </article>

        <article className="services__card">
          <div className="services__border"></div>
          <div className="services__content">
            <div className="services__icon">
              <div className="services__box"></div>
              <i className="ri-smartphone-line"></i>
            </div>

            <h2 className="services__title">Mobile App</h2>

            <p className="services__deacription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium perferendis necessitatibus nemo minus quaerat,
              nesciunt laudantium. Enim quam corrupti voluptatibus!
            </p>
          </div>
        </article>

        <article className="services__card">
          <div className="services__border"></div>

          <div className="services__content">
            <div className="services__icon">
              <div className="services__box"> </div>
              <i className="ri-code-box-line"></i>
            </div>

            <h2 className="services__title">Development</h2>

            <p className="services__deacription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium perferendis necessitatibus nemo minus quaerat,
              nesciunt laudantium. Enim quam corrupti voluptatibus!
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
