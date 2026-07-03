import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/header"
import Body from "./components/body";

function Githubcall(){
    return(
        <>
            <Header/>
            <Body/>
        </>
    )
    
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Githubcall/>)