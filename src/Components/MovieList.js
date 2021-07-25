import React, { useEffect, useState } from "react"
import { Tab, Col, Nav, Row, Image, DropdownButton, ButtonGroup, Dropdown} from "react-bootstrap";
import PaginationBar from "./Pagination";



const myKey = process.env.REACT_APP_API_KEY;
const MovieList = () => {
    const [data, setData] = useState({})
    const [genres, setGenres] = useState([])
    const [movies, setMovies] = useState([])
    const [activeItem, setActiveItem] = useState('Action')
    const [page, setPage] = useState(1)
    console.log('data',data)

    useEffect(() => {
      const getGenres = async () => {
        let urlGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${myKey}&language=en-US`
        const data = await fetch(urlGenres);
        const resultGenres = await data.json();
        setGenres(resultGenres.genres)
        // console.log(resultGenres.genres)
    }
    getGenres() 
    }, [])

    useEffect(() => {
      const getMovies = async () => {
        let urlMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${myKey}&language=en-US`
        if (page) {urlMovies+= `&page=${page}`}

        const data = await fetch(urlMovies);
        const resultMovies = await data.json();
        setMovies(resultMovies.results)
        setData(resultMovies)
        console.log('data movies', resultMovies)
    }
    getMovies()
    },[page])
    
    

    const handleClick = (eventKey) => {
      console.log('handleClick', eventKey)
      setActiveItem(eventKey)
    }
    
  
    return (
 <>
        <Tab.Container id="left-tabs-example" defaultActiveKey="Action">
        <Row>
          <Col sm={3}>
          <Nav variant="pills" className="flex-column">
        
            {['Danger'].map(
  (variant) => (
    <DropdownButton
      as={ButtonGroup}
      key={variant}
      // id={`dropdown-variants-${variant}`}
      variant={variant.toLowerCase()}
      title={activeItem}
    >
       {genres.map((g) => 
         <Dropdown.Item eventKey={g.name} active={onclick} name={g.name} onSelect={(handleClick)}>{g.name}</Dropdown.Item>
       )}
    </DropdownButton>
  ),
)}
          </Nav>
        </Col>
        <Col sm={9}>
          <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:"2rem"}}>
          <Tab.Content>
              
                 {genres.map((g) => {
                   const findGenresId = [];
                   movies.map((m) => {if (m.genre_ids.includes(g.id)) {findGenresId.push(m)}})
                     console.log('findGenresId', findGenresId)
                    return (
                      <Tab.Pane eventKey={g.name}>

              {Array.from({ length: 1 }).map((_, idx) => (
                <Col >
                <Row xs={1} md={2} lg={3} className="g-4">
                {findGenresId.map((movie) =>
                      <Image type="button" src = {`https://www.themoviedb.org/t/p/w1920_and_h1080_face/${movie.backdrop_path}`} fluid /> )}
                </Row>
                </Col>)
                )}
                    </Tab.Pane>)
                 })}
          </Tab.Content>

          <PaginationBar data={data} page={page} setPage={setPage} />
          </div>
        </Col>
       
        </Row>
        
      </Tab.Container>
 
     
      
  
      </>
    )
}
export default MovieList