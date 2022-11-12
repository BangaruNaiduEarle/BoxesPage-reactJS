const Box = (props) => {
  //  Write your code here.
  const { styles, value } = props;
  return <div className={styles}>{value}</div>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box styles="style1" value="Small" />
      <Box styles="style2" value="Medium" />
      <Box styles="style3" value="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
