import langData from '../../../langData/langData'

function UnitsNumber({selectedUnits, setSelectedUnits, langIndex}) {

    const handleUnitsChange = (event) => {
        setSelectedUnits(event.target.value);
    };

    return (
        <>
            <div className="left-item">
                <div className="radio_labels">{langData.textUnitsNum[langIndex]}</div>
            </div>
            <div className="right-item number_group">
                <label htmlFor="units_number_group_3"
                    style={selectedUnits === '3' ? { border: '2px solid #bebebe', color: 'white' } : {border: '2px solid transparent', color: '#bebebe' }} >
                    <input 
                        type="radio"
                        id="units_number_group_3"
                        name="units_number_group"
                        checked={selectedUnits === '3'}
                        value="3"
                        onChange={handleUnitsChange}
                    />
                    {langData.textUnitsNumThree[langIndex]}
                </label>
                <label htmlFor="units_number_group_2"
                    style={selectedUnits === '2' ? { border: '2px solid #bebebe', color: 'white' } : {border: '2px solid transparent', color: '#bebebe' }}>
                    <input
                        type="radio"
                        id="units_number_group_2"
                        name="units_number_group"
                        checked={selectedUnits === '2'}
                        value="2"
                        onChange={handleUnitsChange}
                    />
                    {langData.textUnitsNumTwo[langIndex]}
                </label>
            </div>
        </>
    );
}

export default UnitsNumber;




