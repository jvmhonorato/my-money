import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
//import useDelete from "./useDelete";
// import usePost from "./usePost";
//import useGet from "./useGet";
import Header from "./elements/Header";
import Home from "./pages/Home";
import Movimentacoes from "./pages/Movimentacoes";
import Rest from "./utils/rest";



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


  return (
 
    <div className="container" >

      <Router>
        <Header/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/movimentacoes/:data" element={<Movimentacoes/>}/>
        </Routes>
        
       

      </Router>

    </div>
  );
}

export default App;
