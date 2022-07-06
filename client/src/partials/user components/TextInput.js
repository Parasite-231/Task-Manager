export default function TextInput({ labelText, ...rest }) {
  return (
    <>
      <label for="exampleFormControlInput1" className="form-label">
        {labelText}
      </label>
      <input
        // type={textType}
        className="form-control"
        id="exampleFormControlInput1"
        // placeholder={placeHolder}
        {...rest}
      />
    </>
  );
}
