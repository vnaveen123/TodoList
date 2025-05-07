import React, { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
const Counter=()=>{
   const[count,setCount]=useState("")
   const[items,setItems]=useState([{id:uuidv4(),name:"Eat",cross:false},{id:uuidv4(),name:"Bed",cross:true},
    {id:uuidv4(),name:"Sandhya",cross:false}
   ])
   const[itemName,setItemName]=useState("")
   const [bgColor,setBgColor]=useState("#bf57f2")
   const [filterTest,setFilterText]=useState("")
let bgColors= {
    "#e62b1e":"#e62b1e",
    "#1ee6e6":"#1ee6e6",
    "#c25977":"#c25977"
}
const onChangeBgColor=(e)=>{
    console.log(bgColors[e.target.value])
    setBgColor(bgColors[e.target.value])
}
   const onAdd=()=>{
    setItems((prev)=>[...prev,{id:uuidv4(),name:itemName}])
    setItemName("")

   }

   const onCrossTest=(id)=>{
    console.log("id::::",id)
    let s= items.map((each)=>{
        if(each.id==id){
            return {...each,cross:!each.cross}
        }else{
            return each
        }
    })
    setItems(s)

   }

   const onDeleteItem=(id)=>{
    setItems(items.filter(each=>each.id !==id))
   }

    return(
        <>
     <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:bgColor,height:"100vh"}}>
        <select style={{width:250,height:50}} onChange={onChangeBgColor}>
            <option value= "#e62b1e">
            #e62b1e
            </option>
            <option value="#1ee6e6">
            #1ee6e6
            </option>
            <option value="#c25977">
            #c25977
            </option>
        </select>
     <h1>To DoList</h1>
     <p>Total Items {items.length}</p>
     <div>
     <input style={{width:250,height:30,borderColor:"none",borderWidth:0}} placeholder="Enter Todoitem" type= "text" value={itemName} onChange={(e)=>setItemName(e.target.value)}/> 

     </div>
        <br/>
        <button disabled={itemName===""} style={{width:150,height:50,backgroundColor:"#79f257",border:0,borderRadius:10}} onClick={onAdd}>
            <p style={{color:"#f28602",fontWeight:"bold"}}>
        Add to list
        </p></button>
        <p> OR </p> 
        <div>
            <p>Filter The List</p>
     <input style={{width:250,height:30,borderColor:"none",borderWidth:0}} placeholder="Filter the List" type= "text" value={filterTest} onChange={(e)=>setFilterText(e.target.value)}/> 

     </div>
        <ul style={{listStyleType:"none"}}>
            {
                items.filter(each=>each.name.toLowerCase().includes(filterTest.toLowerCase())).map(each=>{
                    return(
                        
                        <li id={each.id}>
                            <input checked={each.cross} style={{width:20,height:20,marginRight:10}}  type="checkbox" value={each.id} onChange={(each)=>onCrossTest(each.target.value)}/> 
                            <span style={{textDecoration:each.cross ? "line-through":"none",fontSize:"24px",marginRight:10}}>{each.name}</span> 
                            <button onClick={()=>onDeleteItem(each.id)} 
                            disabled={!each.cross}>Delete</button>
                        </li>
                    )
                })
            }
        </ul>
     </div>
     
        </>
    )
}
export default Counter