import React from "react";
import { useSearchParts } from "../Context/SearchContext";
import { SearchItem } from "../Types";
import img from '../assets/IMAGE2.webp'

export default function SearchItems(){

 const { data,loading } = useSearchParts();

   return (
      <>
       <img className="absolute w-full z-[-1] blur-[5px] " src = {img} alt = 'pic' />
      <section className="w-full flex flex-wrap justify-center ml-auto mr-auto" style={{opacity:loading ? 0.3 : 1}}>
      {  
         data.length === 0 ? 
            <h1 className="text-center font-bold text-xl md:text-2xl"> 
             Oops No Result Found 
            </h1> :
      	data.map((value,index) => <Card {...value} key = {index} />)
      }
      </section>
      </>
    )
}


const Card:React.FC<SearchItem> = (props) => {
	return <div className="w-[300px] sm:w-[400px] md:w-[500px] sm:h-[400px] md:h-[500px] h-[300px] rounded-2xl  m-6"
          style={{backdropFilter:'blur(10px)',
                      backgroundColor:'rgb(255,255,255,0.3)'
                    }}
     >
	    <h1 className="font-bold md:text-[30px] text-[16px] text-center mt-6"> Part Name: {props["Part Name"]}  </h1>
       <h2 className="font-semibold font-bold md:text-[25px] text-[10px] ml-4">  Age: {props["Age (years)"]} </h2>
       <h2 className="font-medium font-bold md:text-[25px] text-[10px] ml-4"> place: {props.Location} </h2>
       <h2 className="font-medium font-bold md:text-[25px] text-[10px] ml-4"> Energy Consumption: {props["Energy Consumption - New Parts (kWh)"]} kWh </h2>
       <h2 className="font-medium font-bold md:text-[25px] text-[10px] ml-4"> Energy Consumption for Recycle: {props["Energy Consumption - Recycled Parts (kWh)"]} kWh </h2>
       <h2 className="font-medium font-bold md:text-[25px] text-[10px] ml-4"> Energy Consumption Saved: {props["Energy Consumption Saved (kWh)"]} kWh </h2>
       <h2 className="font-medium font-bold md:text-[25px] text-[10px] ml-4"> Water Usage Saved: {props["Water Usage Saved (liters)"]} L </h2>
       <h2 className="font-medium font-bold md:text-[25px] text-[10px] ml-4"> Water Usage for Recycle: {props["Water Usage - Recycled Parts (liters)"]} L </h2>
   </div>
}
