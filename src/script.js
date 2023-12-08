function updateTime() {
  // Oxford
  let oxfordElement = document.querySelector("#oxford");
  if (oxfordElement) {
    let oxfordDateElement = oxfordElement.querySelector(".current-date");
    let oxfordTimeElement = oxfordElement.querySelector(".current-time");
    let oxfordTime = moment().tz("Europe/London");

    oxfordDateElement.innerHTML = oxfordTime.format("MMMM Do YYYY");
    oxfordTimeElement.innerHTML = oxfordTime.format(
      "hh:mm:ss [<small>]A[</small]"
    );
  }

  // Salem
  let salemElement = document.querySelector("#salem");

  if (salemElement) {
    let salemDateElement = salemElement.querySelector(".current-date");
    let salemTimeElement = salemElement.querySelector(".current-time");
    let salemTime = moment().tz("America/Denver");

    salemDateElement.innerHTML = salemTime.format("MMMM Do YYYY");
    salemTimeElement.innerHTML = salemTime.format(
      "hh:mm:ss [<small>]A[</small]"
    );
  }

  // Aix-en-Provence
  let aixEnProvenceElement = document.querySelector("#aix-en-provence");
  if (aixEnProvenceElement) {
    let aixEnProvenceDateElement =
      aixEnProvenceElement.querySelector(".current-date");
    let aixEnProvenceTimeElement =
      aixEnProvenceElement.querySelector(".current-time");
    let aixEnProvenceTime = moment().tz("Europe/Paris");

    aixEnProvenceDateElement.innerHTML =
      aixEnProvenceTime.format("MMMM Do YYYY");
    aixEnProvenceTimeElement.innerHTML = aixEnProvenceTime.format(
      "hh:mm:ss [<small>]A[</small]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

// Select Cities
let selectCitiesElement = document.querySelector("#select-cities");

function updateCity(event) {
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }

  let cityTime = moment.tz(timeZone);
  let cityName = timeZone.replace("Warsaw", "Krakow").split("/")[1];

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="current-date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>

          <div class="current-time">${cityTime.format(
            "hh:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>`;
}

selectCitiesElement.addEventListener("change", updateCity);
