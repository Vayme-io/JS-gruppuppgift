const landingPages = document.querySelectorAll(".landing-page");

export const jumpToTravelPlan = () => {
  landingPages.forEach((page) => {
    page.classList.add("hidden");
  });

  landingPages[5].classList.remove("hidden");

  displayTravelPlans();
};
