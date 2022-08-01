const inputEmail = document.querySelector(".input input");
const btn = document.querySelector(".input button");
const errorMsg = document.querySelector(".subscribeForm > p");
const errorMsgMobile = document.querySelector(".input .mobile-error");
const regEx = /[\w\-]+@\w+\.[A-Za-z]+/gi;

btn.addEventListener("click", () => {
  if (regEx.test(inputEmail.value) === false) {
    if (window.screen.width < 768) {
      inputEmail.style.border = "1px solid red";
      errorMsgMobile.style.display = "block";
    } else {
      inputEmail.style.border = "1px solid red";
      errorMsg.style.display = "block";
    }
  } else {
    if (window.screen.width < 768) {
      inputEmail.style.border = "1px solid #aaa";
      errorMsgMobile.style.display = "none";
    } else {
      inputEmail.style.border = "1px solid #aaa";
      errorMsg.style.display = "none";
    }
  }
});
