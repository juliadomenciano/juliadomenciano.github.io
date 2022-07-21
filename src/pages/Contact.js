import React from 'react'
import '../css/Contact.css'


export default function Contact() {
  return (

    <section className='home'>

      <div className='hello'>
          <div className='circle'>
            <div className='circle2'>
              <h1>ABOUT</h1>
            </div>
          </div>
      </div>


      <div className='contact'>
        <form>
          <h2>Let's chat </h2>
          <label htmlFor='name'>
            Name*
            <input type='text' name='name'/>
          </label>
          <label htmlFor='email'>
            E-mail*
            <input type='email' name='email'/>
          </label>
          <label htmlFor='message'>
            Message*
            <textarea name='textarea'/>
          </label>
          <button>SEND</button>
        </form>
      </div>

     
    </section>
   
   
  )
}
