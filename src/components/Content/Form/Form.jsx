import './Form.css';

import GasInjection from './GasInjection/GasInjection';
import GroupNumber from './GroupNumber/GroupNumber';
import UnitsNumber from './UnitsNumber/UnitsNumber';
import CompPerformance from './CompPerformance/CompPerformance';
import RepairInterval from './RepairInterval/RepairInterval';
import SparePart from './SparePart/SparePart';
import CalculateButton from './CalculateButton/CalculateButton';
import CancelButton from './CancelButton/CancelButton'
import langData from '../../langData/langData'

function Form({ gasInjectionValue, setGasInjectionValue,
                selectedRadioGroupNumber, setSelectedRadioGroupNumber,
                selectedOption, setSelectedOption,
                selectedOption2, setSelectedOption2,
                selectedUnits, setSelectedUnits,
                intervalValue, setIntervalValue,
                selectedPart, setSelectedPart,
                formToggle, setFormToggle,
                backColor,
                langIndex, 
                addRefer
                }) {
    
    const handleCancel = () => {
        const result = !formToggle
        setFormToggle(result)
    }

    return (
        <>
        <div className="group-form" style={{ backgroundColor: backColor }}>
            <form onSubmit={addRefer}>
                <h3 className="form-name">{langData.textFormName[langIndex]}</h3>
                <div className="form">
                    <GasInjection gasInjectionValue={gasInjectionValue} setGasInjectionValue={setGasInjectionValue} langIndex={langIndex} backColor={backColor}/>
                    <GroupNumber selectedRadioGroupNumber={selectedRadioGroupNumber} setSelectedRadioGroupNumber={setSelectedRadioGroupNumber} langIndex={langIndex} />
                    <UnitsNumber selectedUnits={selectedUnits} setSelectedUnits={setSelectedUnits} langIndex={langIndex} />
                    <CompPerformance
                        selectedRadioGroupNumber={selectedRadioGroupNumber}
                        selectedOption={selectedOption} setSelectedOption={setSelectedOption}
                        selectedOption2={selectedOption2} setSelectedOption2={setSelectedOption2}
                        langIndex={langIndex}
                    />
                    <RepairInterval intervalValue={intervalValue} setIntervalValue={setIntervalValue} langIndex={langIndex}/>
                    <SparePart selectedPart={selectedPart} setSelectedPart={setSelectedPart} langIndex={langIndex} />
                </div>
                <div className="form-btns">
                    <CalculateButton handleCalculate={addRefer} langIndex={langIndex} />
                    <CancelButton handleCancel={handleCancel} langIndex={langIndex}/>
                </div>
            </form>
        </div>
        </>
    )
}

export default Form;
