const MyButton = ({ text, type, onClick }) => {
  // positive, negative, default 외의 다른 타입의 버튼 생성시에는 default로
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
