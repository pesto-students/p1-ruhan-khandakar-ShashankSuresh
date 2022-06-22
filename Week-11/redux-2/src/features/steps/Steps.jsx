import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "components/common/Button";
import { addStep, resetStep } from "./stepsSlice";

const Steps = () => {
  const dispatch = useDispatch();

  const { stepCount } = useSelector((state) => state.steps);

  const handleClick = useCallback(
    (e) => {
      const type = e.target.getAttribute("aria-label");
      if (type === "add") {
        dispatch(addStep());
      } else {
        dispatch(resetStep());
      }
    },
    [dispatch]
  );

  return (
    <div className="steps-container">
      {!!stepCount && <p>You've walked {stepCount} steps today!</p>}
      <Button
        bgColor="#6643b5"
        textColor="#fff"
        aria-label="add"
        fontWeight="bold"
        mb="20px"
        onClick={handleClick}
      >
        Add a Step
      </Button>
      <Button
        bgColor="#ececec"
        aria-label="reset"
        fontWeight={500}
        onClick={handleClick}
      >
        Reset Steps
      </Button>
    </div>
  );
};

export default Steps;
