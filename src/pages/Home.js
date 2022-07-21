import React from 'react'
import '../css/Home.css'


export default function Home() {
  return (

    <section className='home'>

      <div className='hello'>

          <div className='circle'>
            <div className='circle2'>
              <h1>HELLO WORLD!</h1>
              <h1>I'M JÚLIA!</h1>
            </div>
          </div>
          
          <div className='hello-info'>
            <h3>Software Developer</h3>
            <p>From <span>BRAZIL</span></p>
          </div>
  
      </div>
     
      <div className='photo'>
        <img src='' alt='Me'/>
      </div>

    </section>
   
   
  )
}
