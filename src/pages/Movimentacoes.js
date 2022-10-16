import React, { useState } from 'react'
import Rest from "../utils/rest";
import { useParams } from 'react-router-dom'



const baseURL = 'https://mymoney-jvmh-default-rtdb.firebaseio.com/'
const { useGet, usePost } = Rest(baseURL)


const Movimentacoes = () => {
    const params = useParams()
    const id = params.data
   

const data = useGet(`movimentacoes/${id}`)
const [postData, salvar] = usePost(`movimentacoes/${id}`)
const object = Object.keys(data.data)
const [descricao, setDescricao] = useState('')
const [valor, setValor] = useState(0.0)

const onChangeDescricao = evt => {
    setDescricao(evt.target.value)
}
const onChangeValor = evt => {
    setValor(parseFloat(evt.target.value))
}
const salvarMovimentacao = () => {
    salvar({
        descricao:descricao,
        valor:valor
    })
}

    return (
        <div className='container'>
          <h1>Movimentações</h1>
          <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                { data.data &&
                 object
                  .map(movimentacao => {
                    return (
                        <tr key={movimentacao}>
                            <td>{data.data[movimentacao].descricao}</td>
                            <td>{data.data[movimentacao].valor}</td>
                        </tr>
                    )
                  })  
                }
                <tr>
                    <td>
                        <input type='text' value={descricao} onChange={onChangeDescricao}/>
                    </td>
                    <td>
                        <input type='text' value={valor} onChange={onChangeValor}/>
                        <button onClick={salvarMovimentacao}>Add</button>
                    </td>
                </tr>
            </tbody>
          </table>
          <pre>{JSON.stringify(data.data)}</pre>
        </div>
    )
}
export default Movimentacoes
