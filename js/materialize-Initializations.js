document.addEventListener("DOMContentLoaded", function () {
  var elems0 = document.querySelectorAll(".sidenav");
  var instances0 = M.Sidenav.init(elems0);

  $(".dropdown-trigger").dropdown({ hover: false });
  $(".modal").modal();

  var elems1 = document.querySelectorAll(".materialboxed");
  var instances1 = M.Materialbox.init(elems1);

  var elems2 = document.querySelectorAll(".fixed-action-btn");
  var instances2 = M.FloatingActionButton.init(elems2);

  var elems3 = document.querySelectorAll(".sidenav");
  var instances3 = M.Sidenav.init(elems3);

  var elems4 = document.querySelectorAll(".parallax");
  var instances4 = M.Parallax.init(elems4);
});
