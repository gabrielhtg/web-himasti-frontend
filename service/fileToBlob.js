export default function fileToBlob(e) {
  let fileInput = e.files[0];

  if (fileInput) {
    let blobURL = URL.createObjectURL(fileInput);

    return blobURL;
  }
}
