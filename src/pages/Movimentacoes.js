import React from 'react'
import Rest from "../utils/rest";
import { useParams } from 'react-router-dom'



const baseURL = 'https://mymoney-jvmh-default-rtdb.firebaseio.com/'
const { useGet } = Rest(baseURL)


const Movimentacoes = () => {
    const params = useParams()
    const id = params.data
   

const data = useGet(`movimentacoes/${id}`)
    return (
        <div className='container'>
          <h1>Movimentações</h1>
          <pre>{JSON.stringify(data)}</pre>
        </div>
    )
}
export default Movimentacoes
