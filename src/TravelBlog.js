import React from 'react'
import './styles.css' 
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const POSTDATA = [
  { id:1,
    badge:'ecoenthusiast',
    title:'Ecotourism in Costa Rica',
    description:'Ecotourism in Costa Rica is a robust industry because the country was one of the earliest adopters of connecting ...',
    date:'September 02, 2024',
    thumbUrl:'https://demo.dotcms.com/dA/a7df3f39-a18a-4b16-b369-aa9d7acb0b27/image/300h/50q/sloth-1879999_960_720.jpg',
  },

  { id:2,
    badge:'french polynesia',
    title:'French Polynesia Everything You Need to Know',
    description:'Few to no other place in the world has a more exotic feel to its name than what French Polynesia has.',
    date:'February 10, 2024',
    thumbUrl:'https://demo.dotcms.com/dA/2b100ac7-07b1-48c6-8270-dc01ff958c69/image/300h/50q/bora-bora-french-polynesia.jpeg',
  },

  { id:3,
    badge:'surfing',
    title:'10 Surfing spots to checkout in Tahiti',
    description:'Famous for its blue lagoons and beaches',
    date:' January 30, 2024',
    thumbUrl:'https://demo.dotcms.com/dA/e7ceee89-3cc5-4e35-9795-5927ac88ad89/image/300h/50q/tahiti-surf.jpeg',
  }
]

const POSTMAPPER = (post,id) => {
  return(
    <React.Fragment key={id}>
    <Link to={`/travel-blog/post/${post.id}`}>
      <div className='post-container'>
        <img src={post.thumbUrl} alt='a' className='post-thumb'/>
        <div className='post-details-container'>
          <div className='post-badge'>
            <p>{post.badge}</p> 
          </div>
          <p className='post-title'>{post.title}</p> 
          <p>{post.description}</p> 
        </div>
      </div>
      </Link>
    </React.Fragment>
  )
}

function TravelBlog() {

  return (
    <div className='travel-blog-body'>
      <div className='travel-description-container'>
        
      <p className='header-black'>Travel Blog</p>
      <p>Get inspired to experience the world. Our writers will give you their first-hand 
        stories and recommendations that will inspire, excite you, and help you make the best desition s for planning your next adventure.</p>
    
      </div>
      <div className='section-container-2'>
        {POSTDATA.map(POSTMAPPER)}
      </div>
    </div>
  )
}

export default TravelBlog