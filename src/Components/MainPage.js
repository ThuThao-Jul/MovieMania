// import React, { useEffect } from "react";
import DetailPage from "./DetailPage"
import MovieList from "./MovieList";




// let myKey = process.env.REACT_APP_API_KEY;
// console.log(myKey)
const MainPage = ({data}) => {
  console.log("Im MainPage I receive data from App", data);
    
  // useEffect(() => {

  //  const getData = async () => {
  //     let url = `https://api.themoviedb.org/3/trending/all/day?api_key=${myKey}`
  //     const data = await fetch(url);
  //     const result = await data.json();
  //     // console.log(result)
      
  //  }
  //  getData()
  // }, [])
  
    return (
      <>
      <MovieList />
      <DetailPage />
      </>
       
        )
}

export default MainPage