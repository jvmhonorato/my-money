import React from "react"; 
import Rest from "./rest";


const baseURL = 'https://mymoney-jvmh-default-rtdb.firebaseio.com/'
const { useGet } = Rest(baseURL)


const Meses = () => {
    const data = useGet('meses')
    if(data.loading){
        return <h2>Loading...</h2>
      }
      if(Object.keys(data.data).length > 0){
    return (
        <>
         <table className="table container">
        <thead>
          <tr>
            <th>Mês</th>
            <th>Previsão de entrada</th>
            <th>Entrada</th>
            <th>Previsão de saída</th>
            <th>Saída</th>
          </tr>
        </thead>
        <tbody>
          {
          Object
          .keys(data.data)
          .map(mes => {
            return (
                <tr key={mes}>
                    <td>{mes}</td>
                    <td>{data.data[mes].input_forecast}</td>
                    <td>{data.data[mes].input}</td>
                    <td>{data.data[mes].output_forecast}</td>
                    <td>{data.data[mes].output}</td>
                </tr>
                )
             })
            }
         
            </tbody>
        </table>
        
           {JSON.stringify(data)}
        
       </>
      
      )
   }return null
}


export default Meses