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


const usePost = (url) => {
    const [data, dispatch] = useReducer(reducer, {
        loading: false,
        data: {}
    })
    const post = data => {
        dispatch({type: 'REQUEST'})
        //first params : URL, second params: object 
        axios.post(url,data)
        .then(res => {
          console.log(res,data)
          dispatch({
            type: 'SUCCESS',
            data: res.data
          })
        })
      }
      return [data,post]
}
export default usePost