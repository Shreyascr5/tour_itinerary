import "./App.css";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
 const[tour,setTour]=useState([]);
 
 const removeTour=(id)=>{
  const newTour=tour.filter((tour)=>{
    return tour.id!== id;
console.log(newTour);
 })
 setTour(newTour);
 }

 const fetchTour=async ()=>{
  setLoading(true);
  try{
  const respone=await fetch(url);
  const tours= await respone.json();
  console.log(tours);
  setLoading(false); 
  setTour(tours); 
}catch(error){
  setLoading(false);
  console.log("Error", error);
}
 }

useEffect(()=>{
  fetchTour();
},[])

  if (loading) {
    return <main>
      <Loading/>
    </main>;
  }
  if(tour.length===0){
    return(
      <main>
        <h2>No tours left</h2>
        {/* <div className="underline"></div> */}
        <button onClick={
          fetchTour
       } className="btn">Refresh</button>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tour} removeTour={removeTour}/>
    </main>
  );
}

export default App;
