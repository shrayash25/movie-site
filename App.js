
import './App.css';
import Tlogo from "./logo.png" ;
import {useEffect, useState} from "react";
import axios from "axios";
import {MovieCard} from "/Users/shrayashbarnwal/Desktop/my-app/src/components/MovieCard.jsx"
function App(){

  const [movie, setMovies]=useState([]);

  const getMovies= async ()=>{
    try{
      const {data}= await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=f2acd3ccd2c40430f3cf93794f16f820');
      setMovies(data.results);
     
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    getMovies();
  },[])
 
  
 

 
  return (
   
    <div className="App">
      <div className="navbar">
        <img className="logo" src={Tlogo} alt="Logo"></img>
        </div>
        <main className="main">
        {
         movie.map(
          movie => 
          {return(<MovieCard />)})
        }
       
        </main>
    </div>
    
  );

}



export default App;
