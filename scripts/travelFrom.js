export const submitTravelFrom = (event) => {
  event.preventDefault();
  const userInput = document.getElementById("user-input").value;

  if (userInput === "") {
    alert("Du måste skriva in en plats");
    return;
  }

  travelFrom = userInput;
  localStorage.setItem("travelFrom", userInput);
  // document.querySelectorAll(".landing-page")[1].classList.add("hidden");
  // document.querySelectorAll(".landing-page")[2].classList.remove("hidden");
  goToNextSection();
};
