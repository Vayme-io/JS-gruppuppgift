import { jumpToTravelPlan } from "./scripts/localStorage.js";
import { submitTravelDate } from "./scripts/travelDate.js";
import { submitTravelFrom } from "./scripts/travelFrom.js";
import { submitTravelTo } from "./scripts/travelTo.js";
import { updateTravelTransport } from "./scripts/travelTransport.js";

function init() {
  // let formTo = document.querySelector("#formTo");
  // formTo.addEventListener("submit", testAlert);

  let formTo = document.querySelector("#formTo");
  formTo.querySelector("input").focus();
  formTo.addEventListener("submit", submitTravelTo);

  let formFrom = document.querySelector("#formFrom");

  formFrom.addEventListener("submit", submitTravelFrom);

  document
    .getElementById("formDate")
    .addEventListener("submit", submitTravelDate); // Lägg till lyssnaren här

  document
    .querySelector(".travel-transport-form")
    .addEventListener("submit", updateTravelTransport);

  const existingTravelPlans = JSON.parse(localStorage.getItem("travelPlans"));

  if (existingTravelPlans) {
    console.log({ existingTravelPlans: existingTravelPlans });
    console.log({ existingTravelPlans: "hejsan" });

    jumpToTravelPlan();
  }
}

init();
