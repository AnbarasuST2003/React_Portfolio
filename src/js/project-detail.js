const list_detail = document.querySelector(".about__container");
const id = new URLSearchParams(window.location.search).get("id");
const pro_details = document.querySelector(".about__info2");
// const deleteBtn = document.querySelector(".delete");

const renderDetails = async () => {
  const res = await fetch("http://localhost:8000/project/" + id);
  const project = await res.json();
  console.log(project);

  const template = `
  <p class="about__description"><b>Tools Used : </b> ${project.tools}</p>
  <p class="about__description"><b>Roles and Responsibilites</b></p>
  <p class="about__passage"> ${project.details}</p>
    `;
  pro_details.innerHTML = template;

  const project_list = `
  <h2 class="section__title-1">Project Details.</h2>

  <div class="about__perfil">
    <div class="about__image">
      <img src="${project.image}" alt="" class="about__img" />

      <div class="about__shadow"></div>

      <div class="geometric-box"></div>
      <img src="assets/img/scratch.png" alt="" class="about__line" />
      <div class="about__box"></div>
    </div>
  </div>
  <div class="about__info">
    <p class="about__description"><b>${project.project_name}</b></p>
    <ul class="about__list">
      <li class="about__details">${project.project_heading}</li>
      <li class="about__details">${project.duration}</li>
      <li class="about__details">${project.type}</li>
      <li class="about__details">${project.description}</li>
      <li class="about__details"><a href="${project.gitlink}" target="_blank" class="projects__link"><i class="ri-github-line"></i> Git Link</li>
    </a>
    </ul>

  
  
  </div>
  `;
  list_detail.innerHTML = project_list;
};
// deleteBtn.addEventListener("click", async (e) => {
//   const res = await fetch("http://localhost:8000/project/" + id, {
//     method: "DELETE",
//   });
//   window.location.replace("/index.html");
// });

window.addEventListener("DOMContentLoaded", renderDetails());
