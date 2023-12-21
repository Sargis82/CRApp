import './GroupNumber.css';
import langData from '../../../langData/langData'

function GroupNumber({ selectedRadioGroupNumber, setSelectedRadioGroupNumber, langIndex }) {

    const handleRadioChange = (event) => {
        setSelectedRadioGroupNumber(event.target.value);
    };

    return (
        <>
            <div className="left-item ">
                <div className="radio_labels">{langData.textGroupNum[langIndex]}</div>
            </div>
            <div className="right-item number_group">
                <label style={selectedRadioGroupNumber === '1' ? { border: '2px solid #bebebe', color: 'white' } : {border: '2px solid transparent', color: '#bebebe' }}>
                    <input 
                        type="radio" 
                        value="1" 
                        checked={selectedRadioGroupNumber === "1"}
                        onChange={handleRadioChange} />
                    {langData.textGroupNumOne[langIndex]}
                </label>
                <label style={selectedRadioGroupNumber === '2' ? { border: '2px solid #bebebe', color: 'white' } : {border: '2px solid transparent', color: '#bebebe' }}>
                    <input 
                        type="radio"  
                        value="2" 
                        checked={selectedRadioGroupNumber === "2"}
                        onChange={handleRadioChange} />
                    {langData.textGroupNumTwo[langIndex]}
                </label>
            </div>
        </>
    );
}

export default GroupNumber;
