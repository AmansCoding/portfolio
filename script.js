const projects = document.querySelectorAll(".project-link-visit");
const projectDetails = document.querySelectorAll(".project-details");
const intro = document.querySelector("#intro");
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const contact = document.querySelector("#contact");

for (let i = 0; i < projects.length; i++) {
  projects[i].addEventListener("mouseover", function () {
    projectDetails[i].classList.remove("none");
  });
}

for (let i = 0; i < projects.length; i++) {
  projects[i].addEventListener("mouseout", function () {
    projectDetails[i].classList.add("none");
  });
}
