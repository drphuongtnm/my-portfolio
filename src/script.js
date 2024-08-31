let section = document.querySelectorAll("section");

// Trigger animation for a specific section on page load
window.onload = () => {
  document.getElementById("home").classList.add("show-animate");
};
window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

var elements = $(".text").toArray();
$(window).scroll(function () {
  elements.forEach(function (item) {
    if ($(this).scrollTop() >= $(item).offset().top - 400) {
      $(item).addClass("reveal");
    }
  });
});
elements.forEach(function (item) {
  if ($(this).scrollTop() >= $(item).offset().top - 400) {
    $(item).addClass("reveal");
  }
});
