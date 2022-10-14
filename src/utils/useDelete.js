import  { useReducer } from "react"
import axios from "axios"

//função pura

const reducer = (state, action) => {
    if(action.type ==='REQUEST'){
        return {
            ...state,
            loading:true
        }
    }
    if(action.type === 'SUCCESS'){
        return {
            ...state,
            loading: false,
            data: action.data
        }
    }
    return state
}


const useDelete = () => {
    const [data, dispatch] = useReducer(reducer, {
        loading: false,
        data: {}
    })
    const remove = url => {
        dispatch({type: 'REQUEST'})
        //first params : URL, second params: object 
        axios.delete(url,data)
        .then(() => {
         
          dispatch({
            type: 'SUCCESS'
          })
        })
      }
      return [data,remove]
}
export default useDelete