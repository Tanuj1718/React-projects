import { useState } from "react";
import data from "./data";
const Accordion = ()=>{
    const [selected, setSelected] = useState(null)
    const [enable, setEnable] = useState(false);
    const [multiple, setMultiple] = useState([]);
   
    const handleSingleSelection = (getCurrentId)=>{
        console.log(getCurrentId);
        setSelected(getCurrentId);
    }

    const handleMultipleSelection = (getCurrentId)=>{
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)
        if(findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
        else copyMultiple.splice(findIndexOfCurrentId, 1)

        setMultiple(copyMultiple)
    }

    return (
        <>
        <div className=" flex flex-col gap-5 items-center justify-center h-[100vh] w-[100vw]">
            <button 
            onClick={()=> setEnable(!enable)}
            className="bg-blue-400 rounded-md font-medium cursor-pointer p-1">Enable Multiple Selection</button>
            <div className="text-xl font-medium">
                {
                    data && data.length >0 ? 
                    data.map((dataItem )=> <div>
                        <div
                        className="bg-slate-400" 
                        onClick={
                            enable
                            ?()=>
                            handleMultipleSelection(dataItem.id)
                            :()=>handleSingleSelection(dataItem.id)}>
                            <h3
                            className="bg-green-700 p-2">{dataItem.question}</h3>
                            <span className="p-1 font-semibold ">+</span>
                        </div>
                        {
                            selected === dataItem.id || multiple.indexOf(dataItem.id)!==-1 ? (<div
                            className="bg-yellow-200 p-2">{dataItem.answer}</div>) :null
                        }
                    </div> ) : <div>No data found !</div>
                }
            </div>
        </div>
        </>
    )
}

export default Accordion;