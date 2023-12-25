const project_info = document.querySelector(".projects__container");

const renderPosts = async () => {
  let uri = "http://localhost:8000/project";
  // let uri1 = ("http://localhost:3000/polls")

  const res = await fetch(uri);
  // const res1 =  await fetch(uri1)

  const project = await res.json();
  // const polls = await res1.json();

  let template = "";

  project.forEach((project) => {
    template += `
    <article class="projects__card">
  <div class="projects__image">
    <img src="${project.image}" alt="image" class="projects__img">
    
    <a href="/project.html?id=${project.id}" class="projects_arrow_button button">
      <i class="ri-arrow-right-up-line"></i>
    </a>
  </div>

  <div class="projects__content">
    <h3 class="projects__subtitle">${project.project_name}</h3>
    <h2 class="projects__title">${project.project_heading}</h2>

    <p class="projects__description">
    ${project.description}
    </p>
  </div>

  <div class="projects__buttons">
    <a href="${project.gitlink}" target="_blank" class="projects__link">
        <i class="ri-github-line"></i>View
    </a>
    <a href="#" target="_blank" class="projects__link">
     <i class="ri-github-line"></i>View
   </a>
  </div>
</article>

        `;
  });

  project_info.innerHTML = template;
};

// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   renderPosts(searchForm.search.value.trim());
// });

window.addEventListener("DOMContentLoaded", renderPosts());
