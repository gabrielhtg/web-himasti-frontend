export default function TombolSubmit({ text, tambahanClass, fungsi }) {
  return (
    <>
      <button
        className={
          "bg-blue-500 py-2 px-5 rounded-md mt-5 text-white hover:bg-blue-600" +
          " " +
          tambahanClass
        }
        onClick={fungsi}
      >
        {text}
      </button>
    </>
  );
}
