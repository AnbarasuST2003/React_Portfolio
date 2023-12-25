const blogs = document.querySelector(".about__summary");

const renderPosts = async () => {
  let uri = "http://localhost:8000/summary";
  // let uri1 = ("http://localhost:3000/polls")

  const res = await fetch(uri);
  // const res1 =  await fetch(uri1)

  const posts = await res.json();
  // const polls = await res1.json();

  let template = "";

  posts.forEach((summary) => {
    template += `
        <li class="about__items">
        ${summary.sum}
        </li>
        `;
  });

  blogs.innerHTML = template;
};

// searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   renderPosts(searchForm.search.value.trim());
// });

window.addEventListener("DOMContentLoaded", renderPosts());
