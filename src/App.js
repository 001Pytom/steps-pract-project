import React, { useState } from "react";
import messages from "./Messages";
import Button from "./Button";
import StepMsg from "./StepMsg";

function App() {
  const [step, setStep] = useState(1);

  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
  }
  function handlePrev() {
    if (step > 1) setStep((step) => step - 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((isOpne) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 && "active"}`}>1</div>
            <div className={`${step >= 2 && "active"}`}>2</div>
            <div className={`${step >= 3 && "active"}`}>3</div>
          </div>
          <StepMsg step={step}>{messages[step - 1]}</StepMsg>
          <div className="buttons">
            <Button bgColor={"#7950f2"} textColor={"#fff"} onClick={handlePrev}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor={"#7950f2"} textColor={"#fff"} onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
