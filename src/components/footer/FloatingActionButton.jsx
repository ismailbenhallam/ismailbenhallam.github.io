// import "./FloatingActionButton.module.css";
import React, { useEffect } from "react";

const HEADER_HEIGHT = 500;
// const HEADER_HEIGHT = window.screen.height;

export default function FloatingActionButton() {
  const a = React.createRef();

  useEffect(() => {
    let scrollHandler = () => {
      if (
        document.body.scrollTop > HEADER_HEIGHT ||
        document.documentElement.scrollTop > HEADER_HEIGHT
      ) {
        a.current.classList.remove("scale-out");
      } else {
        a.current.classList.add("scale-out");
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  const onClickHandler = (event) => {
    event.preventDefault();
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.body.scrollTop = 0; // For Safari
  };
  return (
    <div className="fixed-action-btn">
      <a
        href="!#"
        className="btn-floating btn-large scale-transition scale-out"
        id="toTop"
        ref={a}
        onClick={onClickHandler}>
        <i className="large material-icons btn-floating-arrow">arrow_upward</i>
      </a>
    </div>
  );
}
