import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './emoji.css'
import EmojiCard from './EmojiCard'

export default function Emoji() {

    const [emojidata,setEmojidata] = useState([])
    const [search,setSearch] = useState([])
    const Url = 'https://emoji-api.com/emojis?access_key=91393ab5cd7b19895dee58fdf4bbbcfaaa5b8250'
      
      useEffect(()=>{
        axios.get(Url).then(res =>{
          console.log(res.data)
           setEmojidata(res.data)

        })
      },[])

      useEffect(()=>{
        const newData = emojidata.filter(emoji => emoji.slug.toLowerCase().includes(search.toLowerCase()));
        setEmojidata(newData);
    },[search])
  return (
    <div>
        <h1></h1>
        
        
        <div className='emoji-container  '>
      <div className='row my-2'>
      
        <h1 className='head'>Emoji's</h1>
        <div>
        <input size="40" className='form-data border-info border rounded' type="text" placeholder='search Emoji' value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        {emojidata.map((val)=>{
          return(
            <div className='col-lg-3'>
              <EmojiCard emoji={val.character} group={val.group} point={val.codePoint} slug={val.slug} code={val.subGroup}/>
            </div>
          )
        })}
      </div>
    </div>
    </div>
  )
}