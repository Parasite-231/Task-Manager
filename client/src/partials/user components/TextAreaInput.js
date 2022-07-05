export default function TextAreaInput({ labelText, inputSize, placeHolder }) {
  return (
    <>
      <label for="exampleFormControlTextarea1" class="form-label">
        {labelText}
      </label>
      <textarea
        class="form-control"
        placeholder={placeHolder}
        id="exampleFormControlTextarea1"
        rows={inputSize}
        style={{ resize: "none" }}
      ></textarea>
    </>
  );
}
