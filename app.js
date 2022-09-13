const projects = document.querySelectorAll(".project");
projects.forEach((i) => {
  i.addEventListener("mouseover", function () {
    i.children[0].style.opacity = 0.1;
    i.children[1].style.opacity = 1;
  });
  i.addEventListener("mouseleave", function () {
    i.children[0].style.opacity = 1;
    i.children[1].style.opacity = 0;
  });
});

//Mobile Friendly!
projects.forEach((i) => {
  i.addEventListener("touchstart", function () {
    if (i.children[0].style.opacity == 0.1) {
      i.children[0].style.opacity = 1;
      i.children[1].style.opacity = 0;
    } else {
      i.children[0].style.opacity = 0.1;
      i.children[1].style.opacity = 1;
    }
  });
});
