let landingPagesElements = document.querySelectorAll(".landing-page");

export let initLocalStorage = () => {
  landingPagesElements.forEach((element) => {
    element.classList.add("hidden");
  });

  let localStorageTravelPlans = localStorage.getItem("travelPlans");

  if (localStorageTravelPlans === null) {
    landingPagesElements[0].classList.remove("hidden");
    return;
  }

  travelPlans = JSON.parse(localStorageTravelPlans);

  globalID = travelPlans[travelPlans.length - 1].id + 1; // Used to keep track of the id of the travel plan

  landingPagesElements[landingPagesElements.length - 1].classList.remove(
    "hidden"
  );
  displayTravelPlans();
};
