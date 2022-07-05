export default function TextInput({ labelText, placeHolder, textType }) {
  return (
    <>
      <label for="exampleFormControlInput1" className="form-label">
        {labelText}
      </label>
      <input
        type={textType}
        className="form-control"
        id="exampleFormControlInput1"
        placeholder={placeHolder}
      />
    </>
  );
}
