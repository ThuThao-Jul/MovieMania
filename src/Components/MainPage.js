import React, { useEffect, useState } from "react";
import reactDom from "react-dom";
import Coverflow from "react-coverflow";
// import DetailPage from "./DetailPage"
import MovieList from "./MovieList";
import Banner from "./banner";
import CarouselPart from "./CarouselPart";
import Footer from "./Footer";

const myKey = process.env.REACT_APP_API_KEY;
console.log(myKey);
const MainPage = () => {
  const [dataBanner, setDataBanner] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let url = `https://api.themoviedb.org/3/trending/all/day?api_key=${myKey}`;
      const data = await fetch(url);
      const result = await data.json();
      setDataBanner(result.results.slice(0, 11));
      // console.log(result)
    };
    getData();
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <h2 style={{ color: "red" }}>TOP TRENDING</h2>
        <Coverflow
          style={{ position: "relative" }}
          media={{
            "@media (min-width: 768px)": {
              width: "100%",
              height: "15rem",
            },
            "@media (min-width: 992px)": {
              width: "100%",
              height: "32rem",
            },
            "@media (max-width: 767px)": {
              width: "100%",
              height: "36rem",
            },
          }}
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={false}
        >
          <div
            // {onClick={() => fn()}
            // onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="0"
          >
            {/* <img
        src='https://www.themoviedb.org/t/p/w1920_and_h1080_face/a3tL7vRFN63zE8IrpjLHtheAcBM.jpg'
        alt='title or description'
        style={{ display: 'block', width: '100%' }}
   /> 
    {<h5 style={{textAlign:"center", color:"#FF0000"}}>Ted Lasso</h5>}
        {<p style={{textAlign:"center", color:"white"}}>Popularity 80.417</p>} */}
          </div>

          {dataBanner.map((e) => (
            <Banner data={e} />
          ))}
        </Coverflow>
      </div>

      <CarouselPart />

      <div style={{ backgroundColor: "black", padding: "6rem 3rem 3rem 3rem" }}>
        <h2 style={{ color: "white" }}>Category</h2>
        <MovieList />
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
