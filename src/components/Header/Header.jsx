import './Header.css'

import langData from '../langData/langData'
import logo from '../../img/logo.png'
import Name from '../Content/Form/Name/Name';
import PersonalPassword from '../Content/Form/PersonalPassword/PersonalPassword';

function HeaderForm ({ firstName, setFirstName, 
                       password, setPassword, 
                       formToggle, setFormToggle, 
                       langChange, setLangChange,
                       backColor, setBackColor, 
                       langIndex,
                       deleteReferAllNotImportant,
                       refers,
                       toggleAllRefreshHandler,
                       toggleAllRefresh
                    }) {

    const headerBtn = !formToggle ? langData.textCalcFormIsOpen[langIndex] : langData.textOpenCalcForm[langIndex] 

    const handleLangChange = (event) => {
        setLangChange(event.target.value);
    };

    const handlebackColorChange = (e) => {
        setBackColor(e.target.value);
    };

    document.body.style.overflow = !formToggle || !toggleAllRefresh  ? 'hidden' : 'auto'

    return  ( 
        <div className="header-all" style={{ backgroundColor: backColor }}>
            <div className="header-logo">
                <img src={logo} alt="logo" width={40}/>   
                <h2><span>CR</span>App</h2>             
            </div>
            <div className="header">
                <div className="header-left">
                    <div className="header-left-top">
                        <Name firstName={firstName} setFirstName={setFirstName} langIndex={langIndex} />
                    </div>
                    <div className="header-left-bottom">
                        <PersonalPassword password={password} setPassword={setPassword} langIndex={langIndex} />
                        <button type='button' title={langData.titleRestor[langIndex]} onClick={toggleAllRefreshHandler} disabled={!formToggle || !toggleAllRefresh}><i className="fa-solid fa-arrows-rotate"></i></button>
                        <button type='button' title={langData.titleUnImportant[langIndex]} onClick={deleteReferAllNotImportant} disabled={refers.length < 1 || !formToggle || !toggleAllRefresh}><i className='fas fa-trash-alt'></i></button>
                    </div>
                </div>
                <div className="header-right">
                    <button type="button" className='headerBtn' onClick={() => setFormToggle(!formToggle)} disabled={!formToggle || !toggleAllRefresh}>{headerBtn}</button>
                    <div className="header-right-bottom">
                        <div className="langButtons">
                            <label style={langChange === 'hay' ? { backgroundColor: backColor, color: 'white' } : {backgroundColor: 'transparent', color: backColor }}>
                                <input 
                                    type="radio"
                                    value="hay" 
                                    checked = {langChange === "hay"} 
                                    onChange={handleLangChange}
                                />Հայ
                            </label>
                            <label style={langChange === 'eng' ? { backgroundColor: backColor, color: 'white' } : {backgroundColor: 'transparent', color: backColor }}>
                                <input 
                                    type="radio" 
                                    value="eng" 
                                    checked = {langChange === "eng"}  
                                    onChange={handleLangChange} 
                                />Eng
                            </label>
                            <label style={langChange === 'rus' ? { backgroundColor: backColor, color: 'white' } : {backgroundColor: 'transparent', color: backColor }}>
                                <input 
                                    type="radio" 
                                    value="rus" 
                                    checked = {langChange === "rus"} 
                                    onChange={handleLangChange} 
                                />Рус
                            </label>
                        </div>
                        <div className="colorSelect">
                            <select name="color" id="color" 
                            onChange={handlebackColorChange}
                            value={backColor}
                            >
                                <option value="Teal" style={{ backgroundColor: `Teal` }}>Teal</option>
                                <option value="Crimson" style={{ backgroundColor: `Crimson` }}>Crimson</option>
                                <option value="DarkSlateGray" style={{ backgroundColor: `DarkSlateGray` }}>Gray</option>
                                <option value="Navy" style={{ backgroundColor: `Navy` }}>Navy</option>
                                <option value="Olive" style={{ backgroundColor: `Olive` }}>Olive</option>
                                <option value="RebeccaPurple" style={{ backgroundColor: `RebeccaPurple` }}>Purple</option>
                                <option value="Maroon" style={{ backgroundColor: `Maroon` }}>Maroon</option>
                            </select>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default HeaderForm