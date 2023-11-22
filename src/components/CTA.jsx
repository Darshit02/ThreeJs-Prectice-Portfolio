import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Have a project in mind? <br className='sm:block hidden'/>
        Let's build Something together!</p>
        <Link to='/contact' className='btn'>Get in Touch</Link>
    </section>
  )
}

export default CTA