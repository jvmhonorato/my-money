import React, {useState, useRef} from "react";
import { Navigate } from "react-router-dom";
const minYear = 2022
const maxYear = 2026



const AddMes = () => {
    const [redir, setRedir] = useState('')
    const refYear = useRef()
    const refMonth = useRef()
   const years = []
   const  months = []
    for(let i =minYear; i <= maxYear; i++ ){
        years.push(i)
    }
    for(let i = 1; i <= 12 ; i++){
        months.push(i)
    }
    
    //ADD 0 BEFORE OF MONTH NUMBER IF BELOW 10
    const zeroPad = num => {
        if(num < 10){
            return '0'+num

        }
        return num
    }
    const verMes = () => {
        setRedir(refYear.current.value + '-' + refMonth.current.value)
    }
    if(redir !== ''){
        return <Navigate to={'/movimentacoes/'+ redir}/>
    }



    return(
        <>
        <h2>Adicionar Mês</h2><br/>
            <select ref={refYear}>
                {years.map(year => 
                     <option key={year} value={year} >{year}</option>
                )}
              
            </select>
            <select ref={refMonth}>
                {months.map(zeroPad).map(month =>
                     <option value={month} key={month}>{month}</option>
                     )}
                
            </select>
        
            <button onClick={verMes}>Adicionar mês</button><br/>
        </>
    )
}
export default AddMes