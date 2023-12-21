import langData from '../../../langData/langData'

function CancelButton({ handleCancel, langIndex }) {

    const handleClick = (e) => {
        e.preventDefault()
        handleCancel();
    };    

    return (
        <>
            <button type="button" className="cancel-btn" onClick={handleClick}>
            {langData.textBtnFormCancel[langIndex]}
            </button>
        </>
    ); 
}

export default CancelButton