import langData from '../../../langData/langData'

function RepairInterval({intervalValue, setIntervalValue, langIndex}) {

    const handleIntervalChange = (event) => {
        setIntervalValue(event.target.value);
    };

    return (
        <>
            <div className="left-item gas-inject">
                <label>{langData.textRepairInterval[langIndex]}</label>
            </div>
            <div className="right-item gas-inject" >
                <input
                    style={{width: 90, fontSize: 16}}
                    type="number"
                    value={intervalValue}
                    onChange={handleIntervalChange}
                />
            </div>
        </>
    );
}

export default RepairInterval;

