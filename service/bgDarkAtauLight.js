export default function bgDarkAtauLight() {
  let theme = document.querySelector("html").getAttribute("data-theme");

  if (theme !== "light") {
    let dataBgDark = document.getElementById("gambar-lengkung-dark");
    let dataLight = document.getElementById("gambar-lengkung");

    dataBgDark.classList.toggle("hidden");
    dataLight.classList.toggle("hidden");
  }
}
