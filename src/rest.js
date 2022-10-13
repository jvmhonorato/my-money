import { useReducer, useEffect } from "react";
import axios from "axios";

const INITIAL_STATE = {
    loading: false,
    data: {}
}

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

const init = baseURL => {
    const useGet = resource => {
        const [data, dispatch] = useReducer(reducer, INITIAL_STATE)
        useEffect(()=> {
            dispatch({type: 'REQUEST'})
            axios.get(baseURL + resource + '.json').then(res => {
              dispatch({type: 'SUCCESS', data: res.data})
            })
            
          },[resource])
        return data
    }

    const usePost = resource => {
        const [data, dispatch] = useReducer(reducer, INITIAL_STATE)
        const post = data => {
            dispatch({type: 'REQUEST'})
            //first params : URL, second params: object 
            axios.post(baseURL+resource+'.json',data)
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
    const useDelete = () => {
        const [data, dispatch] = useReducer(reducer, INITIAL_STATE )
        const remove = resource => {
            dispatch({type: 'REQUEST'})
            //first params : URL, second params: object 
            axios.delete(baseURL+resource+'.json')
            .then(() => {
             
              dispatch({
                type: 'SUCCESS'
              })
            })
          }
          return [data,remove]
    }
  return {
    useGet,
    usePost,
    useDelete
  }
}


export default init