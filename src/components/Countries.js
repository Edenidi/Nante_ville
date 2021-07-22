import { className } from "postcss-selector-parser";
import React, { useState ,useEffect} from "react";
import axios from "axios";
import Card from "./Card";
import Navigation2 from "./Navigation2";
import Navigation from "./Navigation";

const Countries = () => {
    const [data ,setData ]= useState([]);
    const[playOne,setplayOne]=useState(true);

    //function Test(){
        useEffect(()=> {
            if(playOne){
                //setData([]);
                axios
                    .get("https://lokimo-map.s3.eu-west-3.amazonaws.com/test-lokimo-full-stack.json")
                    .then((res)=>{
                        setData(res.data.population);
                        setplayOne(false);
                    });
            }    
        },[data])

    return (
    <div className="countries">
        <Navigation/> 
        <Navigation2/>
        <ul className="countrie-list">
               
                  {data.map((country)=>(
                      <li>
                            <Card country={country}/>
                      </li>
                  ))}
                  
        </ul>
    </div> );
};
export default Countries ;
