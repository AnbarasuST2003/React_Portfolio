import React, { useState, useEffect } from "react";
import MySkillService from "./services/my.skills";

//assigning Variale
const AddBook = () => {
  const [index, setIndex] = useState("");
  const [title, setTitle] = useState("");
  const [skill, setSkill] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  //getting skill summary from form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (index === "" || title === "" || skill === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newSkill = {
      index,
      title,
      skill,
    };
    console.log(newSkill);

    try {
      if (skillId !== undefined && skillId !== "") {
        await MySkillService.updateSkills(skillId, newSkill);
        setSkillId("");
        setMessage({ error: false, msg: "Updated successfully! ✅" });
      } else {
        await MySkillService.addSkills(newSkill);
        setMessage({ error: false, msg: "New Skill added successfully! ✅" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setIndex("");
    setTitle("");
    setSkill("");
  };

  //getting id by edit button
  const [skillId, setSkillId] = useState("");
  const getSkillId = (id) => {
    setSkillId(id);
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await MySkillService.getSkills(skillId);
      console.log("the record is :", docSnap.data());
      setIndex(docSnap.data().index);
      setTitle(docSnap.data().title);
      setSkill(docSnap.data().skill);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    getSkills();
    console.log("The id here is : ", skillId);
    if (skillId !== undefined && skillId !== "") {
      editHandler();
    }
  }, [skillId]);

  //getting Skills from firebae
  const [skills, setSkills] = useState([]);
  const getSkills = async () => {
    const data = await MySkillService.getAllSkills();
    setSkills(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  //deleting data from firebase
  const deleteHandler = async (skillId) => {
    await MySkillService.deleteSkills(skillId);
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
              <span>Add Skills.</span>
            </h2>
          </div>

          <div className="contact__mail">
            <form onSubmit={handleSubmit} className="contact__form">
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
              <div className="contact__group">
                <div className="contact__box">
                  <input
                    id="formName"
                    type="text"
                    className="contact__input"
                    placeholder="Enter Index"
                    value={index}
                    onChange={(e) => setIndex(e.target.value)}
                  />
                </div>

                <div className="contact__box">
                  <input
                    type="text"
                    id="formtitle"
                    className="contact__input"
                    placeholder="Enter Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                  placeholder="Enter Skill Summary"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                ></textarea>
              </div>

              <div className="d-grid gap-2">
                <button
                  className="contact__button button"
                  variant="primary"
                  type="Submit"
                >
                  Add/ Update
                </button>
              </div>
            </form>
          </div>
        </div>

        <section className="summary2 section" id="summary">
          <center>
            <button onClick={getSkills} class="button refresh">
              Refresh
            </button>
          </center>
          {/* <div className="summary__container container grid"> */}
          <table className="summary__container">
            <thead>
              <tr>
                <th>Index</th>
                <th>Title</th>
                <th>Skill Summary</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            {skills.map((doc) => {
              return (
                <tbody>
                  <tr>
                    <td>{doc.index}</td>
                    <td>{doc.title}</td>
                    <td>
                      <p
                        class="about__items"
                        dangerouslySetInnerHTML={{
                          __html: doc.skill.slice(0, 150),
                        }}
                      />
                    </td>
                    <td>
                      <a
                        href="#contact"
                        class="editbutton"
                        onClick={(e) => getSkillId(doc.id)}
                      >
                        Edit
                      </a>
                    </td>
                    <td>
                      <a
                        href=""
                        class="deletebutton"
                        onClick={(e) => deleteHandler(doc.id)}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
          {/* </div> */}
        </section>
      </section>
    </>
  );
};

export default AddBook;
