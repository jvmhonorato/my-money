import React, {useState, useEffect} from "react";
import axios from "axios";

//axios.get('https://mymoney-jvmh-default-rtdb.firebaseio.com/valor.json').then(res => {console.log(res)})

// axios
// .post('https://mymoney-jvmh-default-rtdb.firebaseio.com/valor.json',{outro2:'Victor Honorato'}).then(res => {
//   console.log(res)
// })

const url = 'https://mymoney-jvmh-default-rtdb.firebaseio.com/movimentacoes/2022-10.json'

function App() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    
    axios.get(url).then(res => {
      console.log(res.data)
      setData(res.data)
      setLoading(false)
    })
  },[])
  if(loading){
    return <h2>Loading...</h2>
  }

  return (
    <div >
     <h1>My Money</h1>
     {JSON.stringify(data)}
    </div>
  );
}

export default App;
