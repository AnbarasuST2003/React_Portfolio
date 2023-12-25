import React, { useState, useEffect } from "react";
import MyDataService from "./services/my.services";

const AddBook = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [mail, setMail] = useState("");
  const [role, setRole] = useState("");
  const [abouttext, setAboutText] = useState("");
  const [hometext, setHomeText] = useState("");
  const [skilltext, setSkillText] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (
      name === "" ||
      mobile === "" ||
      mail === "" ||
      role === "" ||
      abouttext === "" ||
      hometext === "" ||
      skilltext === ""
    ) {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newDetail = {
      name,
      mobile,
      mail,
      role,
      hometext,
      abouttext,
      skilltext,
    };
    console.log(newDetail);

    try {
      if (detailId !== undefined && detailId !== "") {
        await MyDataService.updateDetails(detailId, newDetail);
        setDetailId("");
        setMessage({ error: false, msg: "Updated successfully!  ✅" });
      } else {
        setMessage({ error: false, msg: "Click Edit button to Edit Info ! " });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setName("");
    setMobile("");
    setMail("");
    setRole("");
    setHomeText("");
    setAboutText("");
    setSkillText("");
  };

  //getting id by edit button
  const [detailId, setDetailId] = useState("");
  const getDetailId = (id) => {
    setDetailId(id);
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await MyDataService.getDetails(detailId);
      console.log("the record is :", docSnap.data());
      setName(docSnap.data().name);
      setMobile(docSnap.data().mobile);
      setMail(docSnap.data().mail);
      setRole(docSnap.data().role);
      setHomeText(docSnap.data().hometext);
      setAboutText(docSnap.data().abouttext);
      setSkillText(docSnap.data().skilltext);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    getDetails();
    console.log("The id here is : ", detailId);
    if (detailId !== undefined && detailId !== "") {
      editHandler();
    }
  }, [detailId]);

  const [details, setDetails] = useState([]);
  const getDetails = async () => {
    const data = await MyDataService.getAllDetails();
    console.log(data);
    setDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
      <header class="header" id="header">
        <div class="nav container">
          <a href="/" class="nav__logo">
            <span class="nav__logo-name">
              <i class="ri-arrow-left-fill"></i>
            </span>
          </a>

          <div class="nav__buttons">
            <i class="ri-moon-line" id="theme-button"></i>
          </div>
        </div>
      </header>
      <section className="contact section" id="contact">
        <div className="contact__container grid">
          <div className="contact__data">
            <h2 className="section__title-2">
              <span>Details.</span>
            </h2>
            {details.map((doc) => {
              return (
                <a
                  href="#contact"
                  className="contact__button__edit"
                  onClick={(e) => getDetailId(doc.id)}
                >
                  Edit
                </a>
              );
            })}
            <p>
              To <b>change</b> Your personal info, click <b>Edit</b> button
              which will view the contents inside input boxes and after changes
              the info click add to add new info
            </p>
          </div>

          <div className="contact__mail">
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="contact__group">
                <div className="contact__box">
                  <input
                    id="formName"
                    type="text"
                    className="contact__input"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="contact__box">
                  <input
                    type="text"
                    id="formMobile"
                    className="contact__input"
                    placeholder="Mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <div className="contact__box">
                  <input
                    type="text"
                    id="formMail"
                    className="contact__input"
                    placeholder="Mail"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                  />
                </div>
                <div className="contact__box">
                  <input
                    type="text"
                    id="formRole"
                    className="contact__input"
                    placeholder="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>
              </div>

              <div className="contact__box contact__area">
                <textarea
                  as="textarea"
                  rows="2"
                  name="address"
                  className="contact__input"
                  type="text"
                  placeholder="Home Text"
                  value={hometext}
                  onChange={(e) => setHomeText(e.target.value)}
                ></textarea>
              </div>

              <div className="contact__box contact__area">
                <textarea
                  as="textarea"
                  rows="2"
                  name="address"
                  className="contact__input"
                  type="text"
                  placeholder="About Text"
                  value={abouttext}
                  onChange={(e) => setAboutText(e.target.value)}
                ></textarea>
              </div>
              <div className="contact__box contact__area">
                <textarea
                  as="textarea"
                  rows="2"
                  name="address"
                  className="contact__input"
                  type="text"
                  placeholder="Skill Text"
                  value={skilltext}
                  onChange={(e) => setSkillText(e.target.value)}
                ></textarea>
              </div>
              {message?.msg && (
                <p
                  className="contact__message"
                  variant={message?.error ? "danger" : "success"}
                  dismissible
                  onClose={() => setMessage("")}
                >
                  {message?.msg}
                </p>
              )}

              <div className="d-grid gap-2">
                <button
                  className="contact__button button"
                  variant="primary"
                  type="Submit"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddBook;
