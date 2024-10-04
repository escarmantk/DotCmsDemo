import React from 'react'
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import '../styles.css'
import logo from '../logo0.png'
import Home from '../App'

import travelblog from '../TravelBlog'
import destinations from '../Destinations'
import Store from '../Store'
import travelbot from '../Travelbot'
import membersonly from '../MembersOnly'
import contactus from '../ContactUs'


function NavigationBar({navigationData}) {
  console.log('NAV DATA', navigationData)

  const NAVITEMMAPPER = (item) => {
    const BASEURL = 'https://demo.dotcms.com'
    return( <li><Link to={`${BASEURL}${item.href}`}>{item.title}</Link></li>)
  }  
  const ROUTEMAPPER = (item) => {
    const BASEURL = 'https://demo.dotcms.com'
    return( 
      <Route path={item.href} component={item.title} />
  )
  }
  return (
    <>
      <div>        
        <Routes>
        {navigationData !== undefined && navigationData.entity.children.map(ROUTEMAPPER)}
          </Routes>
        <nav>
          <div className="navigationBar">
            <img src={logo}/>
          <ul>
            {navigationData !== undefined && navigationData.entity.children.map(NAVITEMMAPPER)}
            </ul>
          </div>
        </nav>

      </div>

    </>
  )
}

export default NavigationBar