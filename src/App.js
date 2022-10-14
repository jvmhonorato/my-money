import React from "react";
//import useDelete from "./useDelete";
// import usePost from "./usePost";
//import useGet from "./useGet";

import Rest from "./rest";


const baseURL = 'https://mymoney-jvmh-default-rtdb.firebaseio.com/'
const { useGet, usePost, useDelete } = Rest(baseURL)

//const url = 'https://mymoney-jvmh-default-rtdb.firebaseio.com/movimentacoes/2022-10.json'



function App() {
  // const data = useGet('movimentacoes/2022-10')
  const data = useGet('meses')

  // return [data,post] from usePost turn to [postData, post]
 //const [postData, post] = usePost('movimentacoes/2022-10')

 //const [deleteData, remove] = useDelete()



  const newSave = () => {
    // post({valor: 44, descricao:'Victor'})
  }

  const doRemove = () => {
    // remove('movimentacoes/2022-10/-NEG65cszRfrWj1V1jMw')
  }
  
  
  const saveNew = () => {
    // post({valor: 14, descricao: 'olá'})
  }

  if(data.loading){
    return <h2>Loading...</h2>
  }

  return (
  
    <div >
       <nav className="navbar navbar-light bg-light">
        <div className="container">
         <h1 className="navbar-brand">MyMoney</h1>
        </div>
      </nav>

      <select>
        <option>2022</option>
        <option>2023</option>
      </select>
      <select>
        <option>01</option>
        <option>02</option>
      </select>
     
      <button>Adicionar mês</button><br/>

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
     {/* <button onClick={newSave}>Salvar</button>
     <pre>{JSON.stringify(postData)}</pre>
     <button onClick={doRemove}>Remove</button>
     <pre>{JSON.stringify(deleteData)}</pre> */}
    </div>
  );
}

export default App;
