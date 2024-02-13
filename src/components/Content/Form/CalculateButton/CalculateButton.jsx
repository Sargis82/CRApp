import './CalculateButton.css';
import langData from '../../../langData/langData'

function CalculateButton({ handleCalculate, langIndex }) {
    
    const handleClick = (e) => {
        e.preventDefault()
        handleCalculate();
    };

    return (
        <>
            <button type="submit" className="calc-btn" onClick={handleClick} >
                {langData.textBtnFormCalc[langIndex]}
            </button>
        </>
    );
}

export default CalculateButton;
