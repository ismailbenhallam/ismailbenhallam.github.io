const $$ = (id) => {
  return document.getElementById(id);
};

// Floating Action Button
let toTop = $$("toTop");
toTop.addEventListener("click", () => {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  document.body.scrollTop = 0; // For Safari
});

const HEADER_HEIGHT = 500;
window.addEventListener("scroll", function () {
  if (
    document.body.scrollTop > HEADER_HEIGHT ||
    document.documentElement.scrollTop > HEADER_HEIGHT
  ) {
    toTop.classList.remove("scale-out");
  } else {
    toTop.classList.add("scale-out");
  }
});
