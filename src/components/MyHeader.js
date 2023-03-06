const MyHeader = ({ headtext, leftchild, rightchild }) => {
  return (
    <header>
      <div className="head_btn_left">{leftchild}</div>
      <div className="head_text">{headtext}</div>
      <div className="head_btn_right">{rightchild}</div>
    </header>
  );
};

export default MyHeader;
