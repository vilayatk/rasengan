import { useState } from "react";
import PropTypes from "prop-types";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount} />
    </div>
  );
}

function CustomButton(props) {
  const onClickHandler = () => {
    props.setCount(props.count + 1);
  };
  return <button onClick={onClickHandler}>Counter: {props.count}</button>;
}

CustomButton.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};
export default App;
