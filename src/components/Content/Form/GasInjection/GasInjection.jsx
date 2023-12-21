import langData from '../../../langData/langData'
import './GasInjection.css'

function GasInjection({ gasInjectionValue, setGasInjectionValue, langIndex, backColor}) {
    const handleGasInjectionChange = (event) => {
        setGasInjectionValue(event.target.value);
    };
    return (
        <>
            <div className="left-item gas-inject">
                <label>{langData.textGasInjection[langIndex]}</label>
            </div>
            <div className="right-item gas-inject gas-gas-inject" >
                <input
                    style={{color: backColor}}
                    type="number"
                    value={gasInjectionValue}
                    onChange={handleGasInjectionChange}
                />
            </div>
        </>
    );
}

export default GasInjection;
