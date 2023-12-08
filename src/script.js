// Oxford
function updateOxfordTime() {
  let oxfordElement = document.querySelector("#oxford");
  let oxfordDateElement = oxfordElement.querySelector(".current-date");
  let oxfordTimeElement = oxfordElement.querySelector(".current-time");
  let oxfordTime = moment().tz("Europe/London");

  oxfordDateElement.innerHTML = oxfordTime.format("MMMM Do YYYY");
  oxfordTimeElement.innerHTML = oxfordTime.format(
    "hh:mm:ss [<small>]A[</small]"
  );
}

updateOxfordTime();
setInterval(updateOxfordTime, 1000);

// Salem
function updateSalemTime() {
  let salemElement = document.querySelector("#salem");
  let salemDateElement = salemElement.querySelector(".current-date");
  let salemTimeElement = salemElement.querySelector(".current-time");
  let salemTime = moment().tz("America/Denver");

  salemDateElement.innerHTML = salemTime.format("MMMM Do YYYY");
  salemTimeElement.innerHTML = salemTime.format("hh:mm:ss [<small>]A[</small]");
}

updateSalemTime();
setInterval(updateSalemTime, 1000);

// Aix-en-Provence
function updateProvenceTime() {
  let aixEnProvenceElement = document.querySelector("#aix-en-provence");
  let aixEnProvenceDateElement =
    aixEnProvenceElement.querySelector(".current-date");
  let aixEnProvenceTimeElement =
    aixEnProvenceElement.querySelector(".current-time");
  let aixEnProvenceTime = moment().tz("Europe/Paris");

  aixEnProvenceDateElement.innerHTML = aixEnProvenceTime.format("MMMM Do YYYY");
  aixEnProvenceTimeElement.innerHTML = aixEnProvenceTime.format(
    "hh:mm:ss [<small>]A[</small]"
  );
}

updateProvenceTime();
setInterval(updateProvenceTime, 1000);
