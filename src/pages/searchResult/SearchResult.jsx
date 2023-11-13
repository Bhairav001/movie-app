import React, { useState } from 'react'
import "./style.scss"
import { useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../../utils/api';
const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const {query} = useParams();

  const fetchInitialData =()=>{
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`)
  }

  return (
    <div className='searchResultsPage'>
              
    </div>
  )
}

export default SearchResult