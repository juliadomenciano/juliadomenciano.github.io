import React from 'react'
// import '../css/Home.css'
import '../css/Skills.css'
import bootstrap from '../images/bootstrap.svg'
import chai from '../images/chai.svg'
import css from '../images/css.svg'
import express from '../images/express.svg'
import figma from '../images/figma.svg'
import html from '../images/html.svg'
import javascript from '../images/javascript.svg'
import jest from '../images/jest.svg'
import mocha from '../images/mocha.svg'
import mysql from '../images/mysql.svg'
import nodejs from '../images/nodejs.svg'
import react from '../images/react.svg'
import redux from '../images/redux.svg'
import rtl from '../images/rtl.svg'
import sequelize from '../images/sequelize.svg'


export default function Skills() {
  return (
    <section className='home'>

      <div className='hello'>

          <div className='circle'>
            <div className='circle2'>
              <h1>SKILLS</h1>
            </div>
          </div>
  
      </div>
     
      <div className='skills-container'>
        <div className='skills'>
          <img src={html} alt='Me'/>
          <img src={css} alt='Me'/>
          <img src={javascript} alt='Me'/>
          <img src={bootstrap} alt='Me'/>
        </div>
        <div className='skills'>
          <img src={react} alt='Me'/>
          <img src={redux} alt='Me'/>
          <img src={jest} alt='Me'/>
          <img src={figma} alt='Me'/>
        </div>
        <div className='skills'>
          <img src={nodejs} alt='Me'/>
          <img src={mysql} alt='Me'/>
          <img src={express} alt='Me'/>
        </div>
        <div className='skills'>
          <img src={chai} alt='Me'/>
          <img src={mocha} alt='Me'/>
          <img src={rtl} alt='Me'/>
          <img src={sequelize} alt='Me'/>
        </div>
       
       
      </div>

    </section>
  )
}
