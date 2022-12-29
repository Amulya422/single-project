import React from 'react'

export default function Card(props) {
  return (
    <>
        <div className='col-lg-3  d-flex justify-content-center' >
                        <div className='My-card border w-100  my-3 px-3 rounded card mx-3'>
                                <div className='card-top text-center  mx-3 my-3'>

                                        <h4 className='text-warning'><strong>Location :</strong> {props.loc}</h4>    
                                
                                </div>
                                <hr/>  
                                <div className='card-bottom'>
                                        <h6 ><strong>Confirmed Cases Indian :</strong>{props.confirmedCasesIndian}</h6>
                                        <h6 ><strong>Confirmed Cases Foreign :</strong>{props.confirmedCasesForeign}</h6>
                                        <h6 ><strong>Deaths:</strong>{props.deaths}</h6>
                                        <h6 ><strong>Discharged :</strong>{props.discharged}</h6>
                                </div>
                        </div>
                </div>
       
    </>
  )
}
