import React from 'react'
import {ContactBubble} from './contactBubble'
import { contactData } from '../data'

export const ContactPage = () => {
  const contactBubbles = contactData.map((t) => <ContactBubble {...t}/>)

  return (
    <div className="middle" id="contact-page">
    <div className="row">
      <div className='col-4 offset-4' id="contact-bubbles">
        {contactBubbles}
      </div>
    </div>
      <div className="row">
        <p className='col-6 offset-3'>Or send me an email at: <a target="_blank" href="mailto:nick@rubberkalimba.com">nick@rubberkalimba.com</a></p>
      </div>
    </div>  
  )
}


// Contact page: