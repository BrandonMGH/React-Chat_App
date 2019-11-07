import React, {useState, useEffect} from "react"
import queryString from 'query-string';

export default function Chat () {
    const [name,setName] = useState("")
    useEffect(() => {

        const {name} = queryString.parse(location.search)
        console.log(name)

        setName(name)
        
        // const { name, room } = queryString.parse(location.search);
    
     
    
        // setRoom(room);
        // setName(name)
    
       
      }, [location.search]);
    return (
        <p>{name}</p>
    )
}