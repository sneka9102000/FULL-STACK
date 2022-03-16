if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("result").innerHTML = "The button is clicked " +
  localStorage.clickcount + " time(s)."; 