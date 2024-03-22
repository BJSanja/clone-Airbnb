'use client';
import Image from "next/image";
import exp from "constants";

const Avatar=()=>{
    return ( 
        <Image 
          className="rounded-full" 
          height="30" 
          width="30" 
          alt="Avatar" 
          src= '/images/placeholder.jpg'
        />
       );
    
}

export default Avatar;