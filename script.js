function field(data, key) {
  var value = typeof data.get === "function" ? data.get(key) : data[key];
  return String(value || "").trim();
}

function inquiryMailto(data) {
  var name = field(data, "name");
  var email = field(data, "email");
  var gym = field(data, "gym");
  var message = field(data, "message");
  var lines = ["Name: " + name, "Email: " + email];
  if (gym) lines.push("Gym / school: " + gym);
  lines.push("", message);
  return "mailto:mike@palestra.com?subject="
    + encodeURIComponent("Seminar inquiry from " + name)
    + "&body="
    + encodeURIComponent(lines.join("\n"));
}

function bindPage() {
  document.documentElement.classList.add("js");

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  function setNav(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.textContent = open ? "Close" : "Menu";
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNav(!nav.classList.contains("is-open"));
    });
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setNav(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setNav(false);
    });
  }

  var form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var status = document.getElementById("form-status");
    if (status) status.textContent = "Opening an email to mike@palestra.com…";
    window.location.href = inquiryMailto(new FormData(form));
  });
}

if (typeof document !== "undefined") {
  bindPage();
} else if (require.main === module) {
  var href = decodeURIComponent(inquiryMailto({
    name: "Ada",
    email: "ada@gym.test",
    gym: "Unit 2",
    message: "Mats & time"
  }));
  if (href.indexOf("mailto:mike@palestra.com?subject=Seminar inquiry from Ada") !== 0) {
    throw new Error("recipient");
  }
  if (href.indexOf("Gym / school: Unit 2") === -1) throw new Error("gym");
  if (href.indexOf("Mats & time") === -1) throw new Error("body");

  var blank = decodeURIComponent(inquiryMailto({
    name: "Ada",
    email: "ada@gym.test",
    gym: "  ",
    message: "Hi"
  }));
  if (blank.indexOf("Gym") !== -1) throw new Error("blank gym");
  console.log("ok");
}
