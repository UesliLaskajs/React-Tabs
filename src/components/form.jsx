import { useState } from "react";


const Form=(prop)=>{
    const[tab,setTab]=useState(0);

    const clicker=(index)=>{
        setTab(index);
    }


    return(
        <>
        <div className="tabs_container">
            {prop.tab.map((item,index)=>(
                <div key={index}
                onClick={()=>clicker(index)}>
                    {item.title}
                </div>
            ))}
            </div>
            <div className="content">
                {prop.tab[tab].content}
            </div>
 
        </>
    )  
}

export default Form;