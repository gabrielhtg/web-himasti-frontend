export default function alertService(mode) {
  let alert = document.getElementById("alert-error");

  if (mode == null) {
    alert.classList.toggle("hidden");
    setTimeout(() => {
      alert.classList.toggle("hidden");
    }, 2000);
  } else if (mode == "success") {
    alert.firstChild.classList.remove("alert-error");
    alert.firstChild.classList.add("alert-success");
    alert.classList.remove("hidden");
    setTimeout(() => {
      alert.classList.add("hidden");
      alert.firstChild.classList.add("alert-error");
      alert.firstChild.classList.remove("alert-success");
    }, 2000);
  }
}
