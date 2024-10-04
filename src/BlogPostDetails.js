import React from 'react'
import { useParams } from 'react-router-dom';
import post1 from './components/Post1'

function BlogPostDetails() {
    console.log(post1)
    let { postId } = useParams()
    const CONTENTMAPPER = (content,id) => {
        return(
            <div key={id} className='post-content-container'>
                <div className='post-content-header'>
                    <p className='post-content-title'>
                        <div className='post-content-meta-data'>
                            <p>by: {content.author}</p>
                            <p>{content.published}</p>
                            <p>views: {content.views}</p>
                            <p>comments: {content.comments}</p>
                        </div>
                    </p>
                </div>
                <div className='post-content-body'>
                    <img src={content.imgUrl} className='post-image'/>
                    <div className='post-content-text-container'>
                        <p>{content.body}</p>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div className='page'>
        {post1.map(CONTENTMAPPER)}
    </div>
  )
}

export default BlogPostDetails