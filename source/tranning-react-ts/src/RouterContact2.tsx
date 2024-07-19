import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';

console.log("Contact2");


export default function RouterContact2() {

  const location = useLocation();

  const { username } = useParams<{ username: string }>();

  useEffect(() => {
    console.log(location.pathname);
    console.log(location.search);
    console.log("---------------");
    console.log(username);
    
    
    
  }, [])

  return (
    <div>RouterContact2</div>
  )
}
