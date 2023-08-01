export default function alertService(mode, msg) {
  let alert = document.querySelector("#alert");
  let alertMsg = document.querySelector("#alert-msg");

  alertMsg.innerHTML = msg;

  if (mode == null) {
    alert.firstChild.classList.toggle("alert-error");
    alert.classList.toggle("hidden");
    alert.firstChild.firstChild.firstChild.setAttribute(
      "d",
      "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    );
    setTimeout(() => {
      alert.firstChild.classList.toggle("alert-error");
      alert.classList.toggle("hidden");
    }, 2000);
  } else if (mode == "success") {
    // console.log("sukses dieksekusi");
    alert.firstChild.classList.toggle("alert-success");
    alert.firstChild.firstChild.firstChild.setAttribute(
      "d",
      "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    );
    alert.classList.toggle("hidden");
    setTimeout(() => {
      alert.classList.toggle("hidden");
      alert.firstChild.classList.toggle("alert-success");
    }, 2000);
  }
}
