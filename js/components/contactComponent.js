let wrapper = $$("contacts-wrapper");
contacts.forEach((c) => {
  wrapper.insertAdjacentHTML(
    "beforeend",
    `<li class="col">
              <a
                href="${c.url}"
                target="_blank"
                class="contact-item"
                >${c.name}</a
              >
            </li>`
  );
});
