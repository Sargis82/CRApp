import React, { useState, useEffect, useCallback } from 'react';
import langData from './components/langData/langData'
import HeaderForm from './components/Header/Header'
import Form from './components/Content/Form/Form';
import Footer from './components/Footer/Footer';
import Reference from './components/Content/Reference/Reference';
import randomID from "./components/jsFiles/randomIDGenerator";
import ArmenianEternitySymbol from './components/Content/ArmenianEternitySymbol/ArmenianEternitySymbol';
import './App.css';

function App() {

    const [langChange, setLangChange] = useState('eng')
    const [firstName, setFirstName] = useState('')
    const [password, setPassword] = useState('Aa0404');
    const [gasInjectionValue, setGasInjectionValue] = useState('60');
    const [selectedRadioGroupNumber, setSelectedRadioGroupNumber] = useState('1');
    const [selectedOption, setSelectedOption] = useState('20000');
    const [selectedOption2, setSelectedOption2] = useState('43000');
    const [selectedUnits, setSelectedUnits] = useState('3');
    const [intervalValue, setIntervalValue] = useState('600');
    const [selectedPart, setSelectedPart] = useState('none');
    const [repairCount, setRepairCount] = useState(null)
    const [formToggle, setFormToggle] = useState(true)
    const [refers, setRefers] = useState([])
    const [backColor, setBackColor] = useState('Teal')
    const [toggleAllRefresh, setToggleAllRefresh] = useState(true)
    
    const calculate = () => {
        let opt = selectedOption
        if (selectedRadioGroupNumber === '2') {
            opt = selectedOption2
        }
        const rC = ((+gasInjectionValue) * (+selectedUnits) * (+selectedRadioGroupNumber) * (Math.pow(10, 6))) / ((+opt) * (+intervalValue));
        setFormToggle(!formToggle)
        
        return rC;
    };    

let langIndex = null // language data index 

if (langChange === "hay") {
    langIndex = 0
} else if (langChange === "eng") {
    langIndex = 1
} else {
    langIndex = 2
} 

const addReferHandler = () => {
        setRepairCount()
    const newRefer = {
        id: randomID(),
        importantRef: false,
        repairCount: calculate(), 
        firstName, password, langIndex, 
        gasInjectionValue, selectedRadioGroupNumber, 
        selectedUnits, selectedOption, selectedOption2, 
        intervalValue, selectedPart, langData,
        text: {
            gasInjection: langData.textGasInjection[langIndex],
            groupNum: langData.textGroupNum[langIndex],
            groupNumOne: langData.textGroupNumOne[langIndex],
            groupNumTwo: langData.textGroupNumTwo[langIndex],
            unitNum: langData.textUnitsNum[langIndex],
            unitNumThree: langData.textUnitsNumThree[langIndex],
            unitNumTwo: langData.textUnitsNumTwo[langIndex],
            compPerform: langData.textCompPerform[langIndex],
            repairInterval: langData.textRepairInterval[langIndex],
            sparePart: langData.textSparePart[langIndex],
            sPNone: langData.textSPNone[langIndex],
            sPMain: langData.textSPMain[langIndex],
            sPAll: langData.textSPAll[langIndex],
            repCount: langData.textRepCount[langIndex],
            repCountPTS: langData.textRepCountPTS[langIndex],
            reference: langData.textReference[langIndex],
            tblName: langData.textTblName[langIndex],
            tblDrawNum: langData.textTblDrawNum[langIndex],
            tblUnMeas: langData.textTblUnMeas[langIndex],
            tblQuantity: langData.textTblQuantity[langIndex],
            textTblBottom: langData.textTblBottom[langIndex]
        },
        title: {
            titleImp: langData.titleImp[langIndex],
            titleUnImp: langData.titleUnImp[langIndex],
            titlePrint: langData.titlePrint[langIndex],
            titleDelete: langData.titleDelete[langIndex],
        }
    }
    setRefers([ newRefer, ...refers ])
}

const deleteReferHandler = (id) => {
    setRefers(refers.filter((refer) => refer.id !== id))
}

const deleteReferAllNotImportantHandler = () => {
    setRefers(refers.filter((refer) => refer.importantRef));
};

const refreshAllHandler = () => {
    // setLangChange('eng');
    // setFirstName('');
    // setPassword('Aa0404');
    setGasInjectionValue('60');
    setSelectedRadioGroupNumber('1');
    setSelectedOption('20000');
    setSelectedOption2('43000');
    setSelectedUnits('3');
    setIntervalValue('600');
    setSelectedPart('none');
    setRepairCount(null);
    setFormToggle(true);
    setRefers([]);
    // setBackColor('Teal');
    setToggleAllRefresh(!toggleAllRefresh)
}

const toggleAllRefreshHandler = () => {
    setToggleAllRefresh(!toggleAllRefresh)
}

const handleCancelAllRefresh = () => {
    setToggleAllRefresh(!toggleAllRefresh)
}

const handleCancel = () => {
    setFormToggle(!formToggle) 
}

const toggleImportantRefer = (id) => {
    setRefers(refers.map((refer) => {
        return refer.id === id 
                ? {...refer, importantRef: !refer.importantRef}
                : {...refer}
    }))
}

// -------------- LOCAL STORAGE ----------------------------------------

const fromLocalStorage = () => {
    const storedData = JSON.parse(localStorage.getItem('dataCQRApp')) || [];
    const {
        langChange = 'eng',
        firstName = '',
        password = 'Aa0404',
        gasInjectionValue = '60',
        selectedRadioGroupNumber = '1',
        selectedOption = '20000',
        selectedOption2 = '43000',
        selectedUnits = '3',
        intervalValue = '600',
        selectedPart = 'none',
        repairCount = null,
        formToggle = true,
        refers = [],
        backColor = 'Teal'
    } = storedData;
    setLangChange(langChange);
    setFirstName(firstName);
    setPassword(password);
    setGasInjectionValue(gasInjectionValue);
    setSelectedRadioGroupNumber(selectedRadioGroupNumber);
    setSelectedOption(selectedOption);
    setSelectedOption2(selectedOption2);
    setSelectedUnits(selectedUnits);
    setIntervalValue(intervalValue);
    setSelectedPart(selectedPart);
    setRepairCount(repairCount);
    setFormToggle(formToggle);
    setRefers(refers);
    setBackColor(backColor);
};

useEffect(() => {
    fromLocalStorage();
}, []);

const updateLocalStorage = useCallback(() => {
    const dataToStore = {
        langChange,
        firstName,
        password,
        gasInjectionValue,
        selectedRadioGroupNumber,
        selectedOption,
        selectedOption2,
        selectedUnits,
        intervalValue,
        selectedPart,
        repairCount,
        formToggle,
        refers,
        backColor
    };

    localStorage.setItem('dataCQRApp', JSON.stringify(dataToStore));
}, [langChange, firstName, password, gasInjectionValue, selectedRadioGroupNumber,
    selectedOption, selectedOption2, selectedUnits, intervalValue, selectedPart,
    repairCount, formToggle, refers, backColor]);

useEffect(() => {
    updateLocalStorage();
}, [updateLocalStorage]);

// ------------------------------------------------------------------------------------

// -------------------------------- PRINT ---------------------------------------------
const handlePrint = (referId) => {
    const styleCSS = `
    th {border: 1px solid green}
    td {border: 1px solid green; text-align: center;}
    td:nth-child(2) {text-align: left; padding-left: 18px; }
    .cont-div {background-color: lightblue; width: 500px; border: 1px solid red}
    .cont-div tr {box-sizing: border-box; width: 694px}
    .cont-div button {display: none;}`

    const content = document.getElementById(referId).innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print Reference</title>');
    printWindow.document.write('<style>');
    printWindow.document.write(styleCSS);
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print(); 
};
// ---------------------------------------------------------------------------------------

    return (
        <>
            <HeaderForm                 
                firstName={firstName} setFirstName={setFirstName}
                password={password} setPassword={setPassword}
                formToggle={formToggle} setFormToggle={setFormToggle}
                langChange={langChange} setLangChange={setLangChange}
                backColor={backColor} setBackColor={setBackColor}
                langIndex={langIndex}
                deleteReferAllNotImportant={deleteReferAllNotImportantHandler}
                refers={refers}
                toggleAllRefresh={toggleAllRefresh} 
                toggleAllRefreshHandler={toggleAllRefreshHandler}
            />  
            {!formToggle && <div className="form-hide-div"> <div className='hd' onClick={handleCancel} >
                </div><Form
                    gasInjectionValue={gasInjectionValue} setGasInjectionValue={setGasInjectionValue}
                    selectedRadioGroupNumber={selectedRadioGroupNumber} setSelectedRadioGroupNumber={setSelectedRadioGroupNumber}
                    selectedOption={selectedOption} setSelectedOption={setSelectedOption}
                    selectedOption2={selectedOption2} setSelectedOption2={setSelectedOption2}
                    selectedUnits={selectedUnits} setSelectedUnits={setSelectedUnits}
                    intervalValue={intervalValue} setIntervalValue={setIntervalValue}
                    selectedPart={selectedPart} setSelectedPart={setSelectedPart}
                    formToggle={formToggle} setFormToggle={setFormToggle}
                    backColor={backColor} setBackColor={setBackColor}
                    langIndex={langIndex}
                    addRefer={addReferHandler}
                /></div>
            }
            
            {!toggleAllRefresh && <div className="form-hide-div">
                <div className='hd' onClick={handleCancelAllRefresh}></div>
                <div style={{ backgroundColor: backColor }} className='popupYesNo' >
                    <p>{langData.textPopUpOriginSettings[langIndex]}</p>
                    <div className='buttons'>
                        <button onClick={refreshAllHandler}>{langData.textYes[langIndex]}</button>
                        <button onClick={handleCancelAllRefresh}>{langData.textNo[langIndex]}</button>
                    </div>
                </div>
            </div>}
            
            <div className='content'>
                {refers.length > 0 ? <Reference  
                    toggleImportantRefer={toggleImportantRefer}
                    langIndex={langIndex} 
                    repairCount={repairCount}
                    refers={refers}
                    deleteRefer={deleteReferHandler}
                    backColor={backColor}
                    handlePrint={handlePrint}
                /> : <ArmenianEternitySymbol backColor={backColor} />}
            </div>
            <Footer backColor={backColor} setBackColor={setBackColor} />
        </>
    );
}  

export default App;