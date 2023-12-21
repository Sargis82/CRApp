import langData from '../../../langData/langData'

function SparePart({ langIndex, selectedPart, setSelectedPart }) {
    
    const handlePartChange = (event) => {
        setSelectedPart(event.target.value);
    };

    return (
        <>
            <div className="left-item">
                <div className="radio_labels">{langData.textSparePart[langIndex]}</div>
            </div>
            <div className="right-item number_group">
                <label style={selectedPart === 'none' ? { border: '2px solid #bebebe', color: 'white' } : {border: '2px solid transparent', color: '#bebebe' }}>
                    <input
                        type="radio"
                        id="spare_part_none"
                        name="spare_part"
                        checked={selectedPart === 'none'}
                        value="none"
                        onChange={handlePartChange}
                    />
                    {langData.textSPNone[langIndex]}
                </label>
                <label style={selectedPart === 'main' ? { border: '2px solid #bebebe', color: 'white' } : {border: '2px solid transparent', color: '#bebebe' }}>
                    <input
                        type="radio"
                        id="spare_part_main"
                        name="spare_part"
                        checked={selectedPart === 'main'}
                        value="main"
                        onChange={handlePartChange}
                    />
                    {langData.textSPMain[langIndex]}
                </label>
                <label style={selectedPart === 'all' ? { border: '2px solid #bebebe', color: 'white' } : {border: '2px solid transparent', color: '#bebebe' }}>
                    <input
                        type="radio"
                        id="spare_part_all"
                        name="spare_part"
                        checked={selectedPart === 'all'}
                        value="all"
                        onChange={handlePartChange}
                    />
                    {langData.textSPAll[langIndex]}
                </label>
            </div>
        </>
    );
}

export default SparePart;



