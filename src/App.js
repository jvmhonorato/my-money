import React from "react";

// import usePost from "./usePost";
import useGet from "./useGet";
import usePost from "./usePost";
import axios from "axios";


const url = 'https://mymoney-jvmh-default-rtdb.firebaseio.com/movimentacoes/2022-10.json'

function App() {
  const data = useGet(url)
 const [postData, post] = usePost(url)

  const newSave = () => {
    post({valor: 44, descricao:'Victor'})
  }
  
  
  // const saveNew = () => {
  //   post({valor: 14, descricao: 'olá'})
  // }

  if(data.loading){
    return <h2>Loading...</h2>
  }

  return (
    <div >
     <h1>My Money</h1>
     {JSON.stringify(data)}
     <button onClick={newSave}>Salvar</button>
     <pre>{JSON.stringify(postData)}</pre>
    </div>
  );
}

export default App;
