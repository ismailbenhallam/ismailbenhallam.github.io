let myName = "Ismaïl BENHALLAM";

let $$ = (id) => {
  return document.getElementById(id);
};

for (let item of document.getElementsByClassName("myName")) {
  item.textContent = myName;
}

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
