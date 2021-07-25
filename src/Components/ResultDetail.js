import SearchBox from "./SearchBox"
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from "react-bootstrap"
import PaginationBar from "./Pagination"


const ResultDetail = ({data, dataSearch, query, page, setPage}) => {
  
   console.log(data)
    return (
    <>
        <SearchBox />
        <div style={{backgroundColor:"black", color:"white", paddingTop:"2rem"}}>
        
        <Container>
        <h2>Results for: {query}</h2>
        <h4>{dataSearch.total_results} results</h4>
        <Row>
           
     {data.map((r) => 
       <Col xs={6} md={4} lg={3} className="g-4">
       <Image src={`https://www.themoviedb.org/t/p/w220_and_h330_face${r.poster_path}`} rounded />
      </Col>
     )}
     <div style={{marginTop:"2rem"}}>
    <PaginationBar data={dataSearch} page={page} setPage={setPage} />
    </div>
    </Row>
    
</Container>
</div>
    </>
    )
}

export default ResultDetail