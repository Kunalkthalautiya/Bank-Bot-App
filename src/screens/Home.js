import React from 'react'
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Card from '../components/Card.js'
import  Carousel  from '../components/Carousel.js';
import formpolicies from '../assets/formpolicies.png'
import adminaccess from '../assets/adminaccess.png'
import handshake from '../assets/handshake.png'


export default function Home() {
    return (
        <div>
            <div><Navbar /></div>
            <div><Carousel/></div>
            <div id='home-cards'>
            <Card
        className='card'    
        image={formpolicies}
        title="Forms, Policies, Documents"
        style={{"width":"500px","max-width":"600px"}}
        description="This one will request to HR! The employee intranet portal can give a central repository for all kinds of forms and policies (personnel public information such as extra time, leaves forms, expense claims, Mediclaim, payroll, salary, performance review policy, transport policy, alerts regarding updates to policies, to call a few)."
      />
      <Card
        className='card'  
        image={adminaccess}
        title="Admin access controls"
        description="The portal’s efficacy is only significantly increased if access is granted to numerous essentials kept inside the portal. All employees will be aware of general administrative communications and HR policies, but only finance, sales, and operations heads have access to confidential financial projections, profit, and income sheets."
      />
      <Card
        className='card'  
        image={handshake}
        title="Content Management"
        description="Content is the gasoline that fires your Intranet. Previously the portal required separate outsider combination with a Content Management System (CMS). However, Intranet these days just can’t manage without worked in CMS, or mixing and similarity with external CMS.With the working environment developing each moment, the requirement for new, up-to-date."
      /></div>
            <div><Footer/></div>
            
        </div>

    )
}

