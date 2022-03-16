// Storing the data in local storage which is valid even after the browser is closed
localStorage.setItem("myname", "Sneka");

// Retrieving the data stored
document.getElementById("result").innerHTML = localStorage.getItem("myname");