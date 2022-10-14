import React from "react";
import AddMes from "./AddMes";
import Meses from "./Meses";


const Home = () => {
    return (
        <>
         <AddMes/>

          <Meses/>

            {/* <button onClick={newSave}>Salvar</button>
            <pre>{JSON.stringify(postData)}</pre>
            <button onClick={doRemove}>Remove</button>
            <pre>{JSON.stringify(deleteData)}</pre> */}

        </>
    )
}
export default Home