import "../Styles/ButtonStyle.css";
import { Link } from "react-router-dom";

function CustomButton({
  buttonText,
  firstColor,
  secondColor,
  thirdColor,
  backColor,
  link,
  border,
  display,
  onClick,
  width,
  height,
  fontSize,
  fontFamily,
}) {
  const buttonStyle = {
    firstColor: firstColor,
    secondColor: secondColor,
    thirdColor: thirdColor,
    backColor: backColor,
    border: border,
    display: display,
    onClick: onClick,
    fontFamily: fontFamily,
    width,
    height,
    fontSize,
  };

  return (
    <Link to={link} onClick={onClick}>
      <div
        className="custom-btn custom-btn--small"
        style={{ "--color": buttonStyle.backColor, display: display }}
      >
        <div
          className="HoverEffect HoverEffect--enabled HoverEffect--oval"
          style={{ "--hover-color": buttonStyle.firstColor }}
        >
          <div className="HoverEffect__basic">
            <div
              className="HoverEffect__basic__bg-c-button HoverEffect__basic__bg-c-button--01"
              style={{ border: buttonStyle.border }}
            ></div>
            <div
              className="HoverEffect__basic__bg-c-button HoverEffect__basic__bg-c-button--02"
              style={{ "--hover-color": buttonStyle.secondColor }}
            ></div>
            <div
              className="HoverEffect__basic__bg-c-button HoverEffect__basic__bg-c-button--03"
              style={{ "--hover-color": buttonStyle.thirdColor }}
            ></div>
          </div>
        </div>
        <div
          className="custom-btn__wrapper"
          style={{
            "--width": buttonStyle.width,
            "--height": buttonStyle.height,
          }}
        >
          <div className="custom-btn__text">
            <h2 style={{ fontSize: fontSize, fontFamily: fontFamily }}>
              {buttonText}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default CustomButton;
