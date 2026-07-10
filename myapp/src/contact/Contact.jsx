import React from 'react'
import Map from './Map'
import { useContext } from 'react'
import { userContext } from '../App'

export default function Contact(props) {
  const { name, age } = useContext(userContext);

  // console.log("inside contact", name, age);
  return (
   <>
    {/* <div>contact {name}{age}</div> */}
    {/* <Map name={name} age={age} /> */}
   </>
  )
}
