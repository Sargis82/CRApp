import React from 'react';

import langData from '../../../langData/langData'
import './CompPerformance.css'
function CompPerformance({ selectedRadioGroupNumber, selectedOption, setSelectedOption, selectedOption2, setSelectedOption2, langIndex }) {

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleOptionChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };

    return (
        <>
            <div className="left-item comp-perf-sel">
                <label>{langData.textCompPerform[langIndex]}</label>
            </div>
            <div className="right-item comp-perf-sel">

                {selectedRadioGroupNumber === '1' &&
                    <select onChange={handleOptionChange} value={selectedOption}>
                        <option value={18000}>18000</option>
                        <option value={19000}>19000</option>
                        <option value={20000}>20000</option>
                        <option value={21000}>21000</option>
                        <option value={22000}>22000</option>
                    </select>}

                {selectedRadioGroupNumber === '2' &&
                    <select onChange={handleOptionChange2} value={selectedOption2}>
                        <option value={41000}>41000</option>
                        <option value={42000}>42000</option>
                        <option value={43000}>43000</option>
                        <option value={44000}>44000</option>
                        <option value={45000}>45000</option>
                    </select>}
            </div>
        </>
    )
}

export default CompPerformance;
