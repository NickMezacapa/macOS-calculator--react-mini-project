import './Calc.css'
import { useState, useEffect } from "react";
import NumberFormat from "react-number-format";

const Calc = () => {
    const [preState, setPreState] = useState("");
    const [curState, setCurState] = useState("");
    const [input, setInput] = useState("0");
    const [operator, setOperator] = useState(null);
    const [total, setTotal] = useState(false);
  
    const inputNum = (e) => {
      if (curState.includes(".") && e.target.innerText === ".") return;
  
      if (total) {
        setPreState("");
      }
  
      curState
        ? setCurState((pre) => pre + e.target.innerText)
        : setCurState(e.target.innerText);
      setTotal(false);
    };
  
    useEffect(() => {
      setInput(curState);
    }, [curState]);
  
    useEffect(() => {
      setInput("0");
    }, []);
    const operatorType = (e) => {
      setTotal(false);
      setOperator(e.target.innerText);
      if (curState === "") return;
      if (preState !== "") {
        equals();
      } else {
        setPreState(curState);
        setCurState("");
      }
      // set the border to black when the user clicks on the operator
      const targetOperand = e.target;
        targetOperand.style.border = '2px solid black';
    };
  
    const equals = (e) => {
      if (e?.target.innerText === "=") {
        setTotal(true);
      }
      let cal;
      switch (operator) {
        case "÷":
          cal = String(parseFloat(preState) / parseFloat(curState));
          break;
  
        case "+":
          cal = String(parseFloat(preState) + parseFloat(curState));
          break;
        case "x":
          cal = String(parseFloat(preState) * parseFloat(curState));
          break;
        case "-":
          cal = String(parseFloat(preState) - parseFloat(curState));
          break;
        default:
          return;
      }
      setInput("");
      setPreState(cal);
      setCurState("");
      const orangeBtns = document.querySelectorAll('.cc-orange');
        orangeBtns.forEach(btn => {
            btn.style.border = '0.5px solid #323234';
            });
    };
  
    const minusPlus = () => {
      if (curState.charAt(0) === "-") {
        setCurState(curState.substring(1));
      } else {
        setCurState("-" + curState);
      }
    };
  
    const percent = () => {
      preState
        ? setCurState(String((parseFloat(curState) / 100) * preState))
        : setCurState(String(parseFloat(curState) / 100));
    };
  
    const reset = () => {
      setPreState("");
      setCurState("");
      setInput("0");
      const orangeBtns = document.querySelectorAll('.cc-orange');
      orangeBtns.forEach(btn => {
          btn.style.border = '0.5px solid #323234';
          });
    };
    return (
      <div className='cc-container'>
          
        <div className='cc-wrapper'>
          <div className='cc-screen'>
            {input !== "" || input === "0" ? (
              <NumberFormat
                value={input}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            ) : (
              <NumberFormat
                value={preState}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
              />
            )}
          </div>
          <div className="cc-body">
              <div className="cc-row">
          <div className='cc-btn cc-dark-gray cc-reset' onClick={reset}>
            AC
          </div>
          <div className='cc-btn cc-dark-gray' onClick={minusPlus}>
            +/-
          </div>
          <div className='cc-btn cc-dark-gray' onClick={percent}>
            %
          </div>
          <div className='cc-btn cc-orange' onClick={operatorType}>
          ÷
          </div>
        </div>
        <div className="cc-row">
          <div className='cc-btn cc-light-gray' onClick={inputNum}>
            7
          </div>
          <div className='cc-btn cc-light-gray' onClick={inputNum}>
            8
          </div>
          <div className='cc-btn cc-light-gray' onClick={inputNum}>
            9
          </div>
          <div className='cc-btn cc-orange' onClick={operatorType}>
            x
          </div>
        </div>
        <div className="cc-row">
          <div className='cc-btn cc-light-gray' onClick={inputNum}>
            4
          </div>
          <div className='cc-btn cc-light-gray' onClick={inputNum}>
            5
          </div>
          <div className='cc-btn cc-light-gray' onClick={inputNum}>
            6
          </div>
          <div className='cc-btn cc-orange' onClick={operatorType}>
            -
          </div>
        </div>
        <div className="cc-row">
          <div className='cc-btn cc-light-gray' onClick={inputNum}>
            1
          </div>
          <div className='cc-btn cc-light-gray' onClick={inputNum}>
            2
          </div>
          <div className='cc-btn cc-light-gray' onClick={inputNum}>
            3
          </div>
          <div className='cc-btn cc-orange' onClick={operatorType}>
            +
          </div>
        </div>
        <div className="cc-row">
          <div className='cc-btn cc-zero cc-light-gray' onClick={inputNum}>
            0
          </div>
          <div className='cc-btn cc-light-gray' onClick={inputNum}>
            .
          </div>
          <div className='cc-btn cc-orange cc-equals' onClick={equals}>
            =
          </div>
          </div>
        </div>
        <div className="calc__circleCloseContainer">
            <div className="calc__circle calc__circle1" onClick={(e)=>{
                const dragging__div = document.querySelector('.Dragging');
                dragging__div.classList.toggle('Dragging_active');
            }}>
                <p>x</p>
                </div>
            <div className="calc__circle calc__circle2" onClick={(e)=>{
							const dragging__div = document.querySelector('.Dragging');
                            dragging__div.classList.add('Dragging-min-anim');
                            setTimeout(() => {
                                dragging__div.classList.remove('Dragging-min-anim');
                                dragging__div.classList.toggle('Dragging_active');
                            }, 1800);
						}}>
                <p>-</p>
            </div>
            <div className="calc__circle calc__circle3">
                <p>+</p>
            </div>
        </div>
        </div>
      </div>
    );
}

export default Calc