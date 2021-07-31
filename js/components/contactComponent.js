let wrapper = $$("contacts-wrapper");
contacts.forEach((c) => {
  wrapper.insertAdjacentHTML(
    "beforeend",
    `<li class="col">
              <a
                href="${c.url}"
                target="_blank"
                style="color: #f0f4c3"
                >${c.name}</a
              >
            </li>`
  );
});
