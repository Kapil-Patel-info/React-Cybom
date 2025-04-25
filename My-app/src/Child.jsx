import { useContext } from "react";
import { info } from "./Info";

const Child = ()=>{
    const appData = useContext(info);
    return(<>
    <div style={{textAlign:"center"}}>
    <h1>hello {appData.data}</h1>
    <button onClick={() => appData.setData('Bob')}>Change Alice</button>
    <button onClick={() => appData.setData('Alice')}>Change Bob</button>
    <h2>child component</h2> 
    </div>
    </>);
}


export default Child;