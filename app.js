const inputEmail = document.querySelector(".input input");
const btn = document.querySelector(".input button");
const errorMsg = document.querySelector(".subscribeForm > p");
const errorMsgMobile = document.querySelector(".input .mobile-error");
const regEx = /[\w\-]+@\w+\.[A-Za-z]+/gi;

btn.addEventListener("click", () => {
  const value = inputEmail.value;
  if (window.screen.width < 768) {
    if (regEx.test(value)) {
      inputEmail.style.border = "1px solid green";
      errorMsgMobile.style.display = "none";
    } else {
      inputEmail.style.border = "1px solid red";
      errorMsgMobile.style.display = "block";
    }
  } else {
    if (regEx.test(value)) {
      inputEmail.style.border = "1px solid green";
      errorMsg.style.display = "none";
    } else {
      inputEmail.style.border = "1px solid red";
      errorMsg.style.display = "block";
    }
  }
});
