import React, { useEffect, useState } from "react";
import reactDom from "react-dom";
import Coverflow from "react-coverflow"
import MovieList from "./MovieList";
import Banner from "./banner"
import CarouselPart from "./CarouselPart"
import SearchBox from "./SearchBox";



const myKey = process.env.REACT_APP_API_KEY;
console.log(myKey)
const MainPage = () => {
  const [dataBanner, setDataBanner] = useState([])
  
  
    
  useEffect(() => {

   const getData = async () => {
      let url = `https://api.themoviedb.org/3/trending/all/day?api_key=${myKey}`
      const data = await fetch(url);
      const result = await data.json();
      setDataBanner(result.results.slice(0,11))
      // console.log(result)
      
   }
   getData()
  }, [])
  
    return (
  <>
  <SearchBox />
  
      <div style={{backgroundColor:"black"}}>
      <h2 style={{color:"red"}}>TOP TRENDING</h2>
       <Coverflow style={{position:"relative"}}
     media={{
      '@media (min-width: 768px)': {
        width: '100%',
        height: '15rem'
      },
      '@media (min-width: 992px)': {
        width: '100%',
        height: '32rem'
      },
      '@media (max-width: 767px)': {
        width: '100%',
        height: '36rem'
      },
    }}
    displayQuantityOfSide={2}
    navigation={false}
    enableHeading={false}
  >
    <div role="menuitem" tabIndex="0">
    </div>
   
    {dataBanner.map((e) => <Banner data={(e)} />)}

  </Coverflow>
  </div>

  <CarouselPart />

  <div style={{backgroundColor:"black", padding:"4rem 3rem 3rem 3rem"}}>
    
    <h2 style={{color:"white"}}>Category</h2>
    <MovieList /> 
    
    
  </div>

  
      </>
       
        )
}

export default MainPage