import React from 'react'
import '../css/Header.css'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import logo from '../images/logo.svg'
export default function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <img src={logo} alt='logo' className='logo-img'/>
        <h3 className='logo-name'>Júlia Domenciano</h3>
      </div>
      <nav>
        <div className= 'internal-links'>
          <a href='#about'>About</a>
          <a href='#about'>Skills</a>
          <a href='#about'>Projects</a>
          <a href='#about'>Contact</a>
        </div>  
      </nav>
      <div className='external-links'>
          <a href='#linkedin'><img src={linkedin} alt='linkedin'/></a>
          <a href='#github'><img src={github} alt='github'/></a>
        </div>
    </header>
  )
}
