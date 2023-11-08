import { useEffect } from "react"
import { fetchDataFromApi } from "./utils/api"
import { useDispatch, useSelector } from "react-redux"
import { getApiConfiguration } from "./store/homeSlice"


function App(){

  const dispatch = useDispatch()
  const {url} = useSelector((store)=>store.home)
  console.log("url",url)
  useEffect(()=>{
      apiTesting()
  },[])
  const apiTesting =()=>{
    fetchDataFromApi("/movie/popular")
    .then((res)=>{
      console.log("res",res)
      dispatch(getApiConfiguration(res))
    })
  }
  return (
    <>
      App
      {url?.total_pages}
    </>
  )
}

export default App
