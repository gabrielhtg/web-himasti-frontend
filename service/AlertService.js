export default function alertService(mode, msg) {
  const alertError = document.querySelector("#alert-error");
  const alertSuccess = document.querySelector("#alert-success");
  const alertErrorMsg = document.querySelector("#alert-error-msg");
  const alertSuccessMsg = document.querySelector("#alert-success-msg");

  if (mode == null) {
    alertSuccessMsg.innerHTML = msg;
    alertSuccess.classList.toggle("hidden");
    setTimeout(() => {
      alertSuccess.classList.toggle("hidden");
    }, 2000);
  } else {
    alertErrorMsg.innerHTML = msg;
    alertError.classList.toggle("hidden");
    setTimeout(() => {
      alertError.classList.toggle("hidden");
    }, 2000);
  }
}
