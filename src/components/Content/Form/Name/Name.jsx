import langData from '../../../langData/langData'

import "./Name.css"

function Name ({ firstName, setFirstName, langIndex }) {

    const handleNameChange = (event) => {
        setFirstName(event.target.value);
    };

    let placeholderName = ''

    if (langIndex === 0) {
        placeholderName = 'անուն'
    } else if (langIndex === 1) {
        placeholderName = 'name'
    } else {
        placeholderName = 'имя'
    }

    return (
        
        <div className='name'>
            <label>{langData.textCalcPersonName[langIndex]}</label>
            <input 
                type="text"
                value={firstName}
                onChange={handleNameChange} 
                maxLength={20} 
                placeholder={placeholderName}
                autoComplete='username'
            />
        </div> 
    )
}

export default Name