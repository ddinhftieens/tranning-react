import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

console.log("About2");


export default function RouterAbout2() {

  const [paramSearch, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log(paramSearch.get("access_token"));
    console.log(paramSearch.get("page"));
    console.log(paramSearch.get("detailId"));
    
    
    
  }, [])

  return (
    <div>RouterAbout2</div>
  )
}
