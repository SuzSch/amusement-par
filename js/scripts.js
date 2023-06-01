// User Interface Logic

// New function name!
function hideResultsAndError() {
  // New line of code to hide the error message.
  document.getElementById("error-message").setAttribute("class", "hidden");
  document.getElementById("swings").setAttribute("class", "hidden");
  document.getElementById("coaster").setAttribute("class", "hidden");
  document.getElementById("tower").setAttribute("class", "hidden");
  document.getElementById("sorry").setAttribute("class", "hidden");
}

window.onload = function () {
  document.querySelector("form").onsubmit = function (event) {
    hideResultsAndError();
    event.preventDefault();
    const age = parseInt(document.querySelector("input#age").value);
    const height = parseInt(document.querySelector("input#height").value);

    if (age >= 12 && height >= 60) {
      document.getElementById("swings").removeAttribute("class");
      document.getElementById("coaster").removeAttribute("class");
      document.getElementById("tower").removeAttribute("class");
      // Next, we're evaluating the Roller Coaster ride.
    } else if (age >= 12 || height >= 48) {
      document.getElementById("swings").removeAttribute("class");
      document.getElementById("coaster").removeAttribute("class");
      // Finally, we have our "catch-all" for when a user is less than 6 years old.

    } else {
      document.getElementById("sorry").removeAttribute("class");
    }
  };
};

