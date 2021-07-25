import React, { useState } from "react"
import { Pagination } from "react-bootstrap"

const PaginationBar = ({data, page, setPage}) => {
    const totalPage = data.total_pages

    const handlePrev = () => {
      setPage(page-1)
   }
  
   const handleNext = () => {
     setPage(page+1)
  }
  
   const handleFirst = () => {
     setPage(1)
   } 
  
   const handleLast =() => {
     setPage(totalPage)
   }
    
   const handleVal =(value) => {
     setPage(value)
   }
    return (
      
        <Pagination>
        <Pagination.First onClick={handleFirst}/>
        <Pagination.Prev disabled={page==1} onClick={handlePrev}/>
        <Pagination.Item hidden={page<=3} onClick={() => handleVal(1)}>{1}</Pagination.Item>
        <Pagination.Ellipsis hidden={page<=3} />
      
        <Pagination.Item hidden={page<=2} onClick={() => handleVal(page-2)}>{page-2} </Pagination.Item>
        <Pagination.Item hidden={page==1} onClick={() => handleVal(page-1)}>{page-1}</Pagination.Item>
        <Pagination.Item active>{page}</Pagination.Item>
        <Pagination.Item hidden={page>=totalPage-1} onClick={() => handleVal(page+1)}>{page+1}</Pagination.Item>
        <Pagination.Item hidden={page>=totalPage-2} onClick={() => handleVal(page+2)}>{page+2}</Pagination.Item>
      
        <Pagination.Ellipsis hidden={page>= totalPage-3}/>
        <Pagination.Item hidden={page==totalPage} onClick={() => handleVal(totalPage)}>{totalPage}</Pagination.Item>
        <Pagination.Next disabled={page==totalPage} onClick={handleNext}/>
        <Pagination.Last onClick={handleLast}/>
      </Pagination>
    )
}

export default PaginationBar
