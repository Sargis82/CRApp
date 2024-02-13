import data0404 from '../../langData/sparePartListData0404';
import data2668 from '../../langData/sparePartListData2668';

import langData from '../../langData/langData'

function ReferanceTable({ refer }) {

  let data = refer.password === 'Ss2668' ? data2668 : data0404 

  let n = 1;
  let spName
  
  if (refer.selectedPart === 'all') { 

    return (
        <>
          {data.map((el, idx) => {
            
            spName =
              refer.langIndex === 0
                ? el.spNameHay
                : refer.langIndex === 1
                ? el.spNameEng
                : el.spNameRus;
    
            return (
              <tr key={idx}>
                <td>{n + idx}</td>
                <td className="text-align-left">{spName}</td>
                <td>{el.drawingNum}</td>
                <td>{langData.textRepCountPTS[refer.langIndex]}</td>
                <td>{Math.ceil(el.coefficient * refer.repairCount)}</td>
              </tr>
            );
          })}
        </>
      );
    } else if (refer.selectedPart === 'main') {
        return (
            <>
              {data.map((el, idx) => {
                
                spName =
                  refer.langIndex === 0
                    ? el.spNameHay
                    : refer.langIndex === 1
                    ? el.spNameEng
                    : el.spNameRus;
        
                return (
                    el.important && ( 
                    <tr key={idx}>
                        <td>{n++}</td>
                        <td className="text-align-left">{spName}</td>
                        <td>{el.drawingNum}</td>
                        <td>{langData.textRepCountPTS[refer.langIndex]}</td>
                        <td>{Math.ceil(el.coefficient * refer.repairCount)}</td>
                    </tr>)
                );
              })}
            </>
          );
    }
  }

export default ReferanceTable;
