import './Reference.css'

import ReferanceTable from '../ReferenceTable/ReferenceTable';

function Reference ({ refers, deleteRefer, backColor, toggleImportantRefer, handlePrint }) {
    
    return (
            <>
            { refers.map((refer) => (
                <div className="reference" id={refer.id} key={refer.id} style={{border: `5px dashed ${backColor}`, backgroundColor: refer.importantRef ? '#e9feec' : '#f4e5ee' }}>
                    <div className="refer-top">
                        <div className="refer-top-left">
                            <h2>{refer.firstName ? refer.firstName : '«___________________»'}</h2>
                            <div>
                                <span>{refer.text.gasInjection}</span>
                                <span> - </span>
                                <span className='gas-inj-span'>{refer.gasInjectionValue}</span>
                            </div>
                            <div>
                                <span>{refer.text.groupNum}</span>
                                <span> - </span>
                                <span>{refer.selectedRadioGroupNumber === '1' ? refer.text.groupNumOne : refer.text.groupNumTwo}</span>
                            </div>
                            <div>
                                <span>{refer.text.unitNum}</span>
                                <span> - </span>
                                <span>{refer.selectedUnits === '3' ? refer.text.unitNumThree : refer.text.unitNumTwo}</span>
                            </div>
                            <div>
                                <span>{refer.text.compPerform}</span>
                                <span> - </span>
                                <span>{refer.selectedRadioGroupNumber === '1' ? refer.selectedOption : refer.selectedOption2}</span>
                            </div>
                            <div>
                                <span>{refer.text.repairInterval}</span>
                                <span> - </span>
                                <span>{refer.intervalValue}</span>
                            </div>

                            <div>
                                <span>{refer.text.sparePart}</span>
                                <span> - </span>
                                <span>
                                    {(refer.selectedPart === 'none') 
                                        ? refer.text.sPNone 
                                        : (refer.selectedPart === 'main') 
                                        ? refer.text.sPMain 
                                        : refer.text.sPAll}
                                </span>
                            </div>
                            <h3>{refer.text.repCount}<span>{Math.ceil(refer.repairCount)}</span>{refer.text.repCountPTS}</h3>
                        </div>
                        <div className="refer-top-right">
                            <div className="refer-top-right-top">

                            <span type="button" onClick={() => toggleImportantRefer(refer.id)}>
                                {refer.importantRef ? (
                                    <i className="fas fa-check-square"></i>
                                ) : (
                                    <i className="far fa-square"></i>
                                )}</span>
                  
                                <span type='button' onClick={() => handlePrint(refer.id)}><i className="fas fa-print"></i></span>
                                <span type='button' onClick={() => deleteRefer(refer.id)}><i className="fas fa-window-close"></i></span>
                            </div>

                            <div className="refer-top-right-bottom">
                                <h6>{refer.text.reference}<span>{refer.id}</span></h6>
                            </div>
                        </div>
                    </div>
                    {refer.selectedPart === 'none' || !refer.password ? '' : <>
                        <hr />
                        <div className="refer-mid">
                            <table>
                                <tbody>
                                    <tr>
                                        <th style={{width: 4 +'%'}}>#</th>
                                        <th style={{width: 52 + '%'}}>{refer.text.tblName}</th>
                                        <th style={{width: 22 + '%'}}>{refer.text.tblDrawNum}</th>
                                        <th style={{width: 11 + '%'}}>{refer.text.tblUnMeas}</th>
                                        <th style={{width: 11 + '%'}}>{refer.text.tblQuantity}</th>
                                    </tr>
                                    <ReferanceTable refer={refer} key={refer.id} />
                                </tbody>
                            </table>
                        </div>
                        </>
                    }
                    <hr />
                    <div className="refer-bottom">
                        <p>Sargis Khachatryan ©</p>
                    </div>
                </div>
            ))}
            </>
        );
    }

export default Reference 