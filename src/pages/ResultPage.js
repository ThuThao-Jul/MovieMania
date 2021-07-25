import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ResultDetail from "../Components/ResultDetail";

const myKey = process.env.REACT_APP_API_KEY;
const ResultPage = () => {
    const params = useParams();
    const queryInput = params.query
    console.log('query', queryInput)
    const [dataResult, setDataResult]=useState([])
    const [dataSearch, setDataSearch] = useState()
    const [page, setPage] = useState(1)
    console.log(dataSearch)
    useEffect(() => {

      const getResult = async () => {
          let url = `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&language=en-US&query=${queryInput}&page=${page}&include_adult=false`;

          if (queryInput) {
          const data = await fetch(url);
          const res= await data.json();
          console.log(res);
          console.log("The query has changed", queryInput);
          setDataResult(res.results);
          setDataSearch(res);
          }
      }
      getResult();
    },[queryInput, page]);

    return (
    <ResultDetail data={dataResult} dataSearch={dataSearch} query={queryInput} page={page} setPage={setPage}/>
    )
}

export default ResultPage