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
          <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                { data.data &&
                  Object
                  .keys(data)
                  .map(movimentacao => {
                    return (
                        <tr key={movimentacao}>
                            <td>{data.data.descricao}</td>
                            <td>{data.data.valor}</td>
                        </tr>
                    )
                  })  
                }
            </tbody>
          </table>
          <pre>{JSON.stringify(data)}</pre>
        </div>
    )
}
export default Movimentacoes
