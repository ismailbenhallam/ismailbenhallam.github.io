import $ from "jquery";
import M from "materialize-css";

document.addEventListener("DOMContentLoaded", function () {
  var elems0 = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems0);

  $(".dropdown-trigger").dropdown({ hover: false });
  $(".modal").modal();

  var elems1 = document.querySelectorAll(".materialboxed");
  M.Materialbox.init(elems1);

  var elems2 = document.querySelectorAll(".fixed-action-btn");
  M.FloatingActionButton.init(elems2);

  var elems3 = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems3);

  var elems4 = document.querySelectorAll(".parallax");
  M.Parallax.init(elems4);
});
