import langData from '../../../langData/langData'

import "./PersonalPassword.css"

function PersonalPassword({password, setPassword, langIndex}) {

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
            <div className='pers-pass'>
                <label>{langData.textPersonalNum[langIndex]}</label>
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    maxLength={6}
                    autoComplete="current-password" 
                />
            </div>
    );
}

export default PersonalPassword;




