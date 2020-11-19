// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
// ********** End of nav toggle ************

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    // prevent default
    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth"
    });
  });
});
// ********** End of smooth scroll ************

// ********** Formspree code ************
window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above
  
  var form = document.getElementById("my-form");
  //var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");
  
  const message = document.getElementById("message");

  // Success and Error functions for after the form is submitted
  
  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thank you!";
  }

  function error() {
    status.classList.add("error");
    alert("Oops! There was a problem. Please try again.");
    status.innerHTML = "Oops! There was a problem.";
  }
 

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
// ********** End of Formspree code ************


// ********** get current year ************
document.getElementById("currYear").innerHTML = new Date().getFullYear();

// ********** End of get current year ************