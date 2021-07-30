let wrapper = $("contacts-wrapper");
contacts.forEach((c) => {
  wrapper.insertAdjacentHTML(
    "beforeend",
    `<li class="col contact">
              <a
                href="${c.url}"
                target="_blank"
                >${c.name}</a
              >
            </li>`
  );
});
