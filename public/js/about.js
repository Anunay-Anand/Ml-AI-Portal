AOS.init();

// On Scroll event function (body)
window.addEventListener("scroll", () => {
  const nav = document.querySelector("#navbar");
  const body = document.body;
  // Check if the scroll is more then 50px
  body.scrollTop > 50 || document.documentElement.scrollTop > 50
    ? nav.classList.add("navbar-edit")
    : nav.classList.remove("navbar-edit");
});
