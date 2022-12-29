import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import "./Covid.css"
import  image from "./../Image/covid.jpg";

export default function Covid() {
    const [apiData,setCovidData]=useState([])
    const [search,setSearch]=useState('')
    const url = 'https://api.rootnet.in/covid19-in/stats/latest'

    const getApidata = async()=>{
      await axios.get(url).then(res =>{
          
        setCovidData(res.data.data.regional)
        
        console.log(res.data.data.regional)
     })
    }
      
      useEffect(()=>{
        axios.get(url).then(res =>{
           getApidata()
           
        })
      },[])

      console.log(apiData)

      const getInputValue = (e)=>{
        setSearch(e.target.value)
      }
      const filterCovidData = apiData.filter(val=>{
        return val.loc.toLowerCase().includes(search.toLocaleLowerCase())
      })
      console.log(apiData)
           
  return (
    <div>
        <h1></h1>
        <h1></h1>
        <div className='container-fluid main-container'>
        <img className='rounded mx-auto d-block image-fluid' src={image}/>
        <input onChange={getInputValue} className='form-control border-success w-50 text-center mt-5 mb-3 mx-auto' type='search' placeholder='Search Cases By State'/>
            <div className='row'>
              {apiData.map(val=>{
                return <Card loc={val.loc} confirmedCasesIndian={val.confirmedCasesIndian} confirmedCasesForeign={val.confirmedCasesForeign} deaths={val.deaths}  discharged={val.discharged}/> 
              })}     
        
            </div>
      </div>
    </div>
  )
}



