document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  const ranNum = document.querySelector("h1");
  const background = document.querySelector(".present");
  let giftOpen = false;

  button.addEventListener("click", () => {

    if (giftOpen) {
      background.style.backgroundImage = 'url("./images/closed.jpg")';
      ranNum.textContent = "";
      button.textContent = "OPEN";
      giftOpen = false;
    } else {
      background.style.backgroundImage = 'url("./images/open.jpg")';
      ranNum.textContent = Math.random().toPrecision(6);
      button.textContent = "CLOSE";
      giftOpen = true;
    }
  });
});
