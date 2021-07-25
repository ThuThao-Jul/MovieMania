import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./MovieListStyle.css"


const myKey = process.env.REACT_APP_API_KEY;
const CarouselPart =() => {
  const history = useHistory()
  const [dataUpcoming, setDataUpcoming] = useState([])
  console.log('upcoming',dataUpcoming)
  
   
    const handleClickMovie = (movie_ID) => {
      history.push(`/movie/${movie_ID}`);
    };
    
  useEffect(() => {
    const getUpcoming = async () => {
      let urlUpcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${myKey}&language=en-US`
      const data = await fetch(urlUpcoming);
      const resultUpcoming = await data.json();
      console.log(resultUpcoming)
      resultUpcoming.results.map((r) => console.log(r.id))
      setDataUpcoming(resultUpcoming.results)
  }
  getUpcoming() 
  }, [])

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return(
      <div style={{paddingTop:"3rem", paddingBottom:"2rem", backgroundColor:"black", color:"red"}}> <h2>UPCOMING</h2>
     
    <Carousel
  focusOnSelect={true}
  centerMode={true}
  swipeable={true}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  customTransition="transform 400ms ease-in-out"
  transitionDuration={400}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
 
  
> 

  {dataUpcoming.map((m) => 
<div className="containerCarousel" onClick={() => handleClickMovie(m.id)}>
  <img className="image" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${m.poster_path}`}  alt="poster"  />
  <div className="middle">
    <div className="content">
        <h4 style={{color:"red"}}>{m.title}</h4>
        <p>Rating {m.vote_average}</p>
        <p>Released date {m.release_date}</p>
    </div>
  </div>
</div>  
  )}

  {/* <img src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/608x608/products/88997/93196/Avengers-Endgame-Final-Style-Poster-buy-original-movie-posters-at-starstills__42370.1563973516.jpg" style={{width:"220px", height:"330px"}} alt="poster"/>
  <img src="https://img.moviepostershop.com/dora-and-the-lost-city-of-gold-movie-poster-1000779403.jpg" style={{width:"220px", height:"330px"}} alt="poster"/>
  <img src="https://i5.walmartimages.com/asr/45b12cdf-d9f3-4b97-9019-675862d39cba_1.bc4ff345a14eb44c067618ef629e20d7.jpeg" style={{width:"220px", height:"330px"}} alt="poster"/>
  <img src="https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg" style={{width:"220px", height:"330px"}} alt="poster"/>
  <img src="https://cdn.seat42f.com/wp-content/uploads/2020/07/15192015/Project-Power-Movie-Poster-Jamie-Foxx.jpg" style={{width:"220px", height:"330px"}} alt="poster"/> */}
</Carousel>
</div>

)
}




export default CarouselPart