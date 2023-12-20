import classes from "./UIButton.module.css";
const UIButton = ({ children, type }) => {
  return (
    <div
      className={
        type === "string"
          ? classes["UIButton"] + " " + classes["string"]
          : classes["UIButton"] + " " + classes["outline"]
      }
    >
      {" "}
      {children}
    </div>
  );
};

export default UIButton;