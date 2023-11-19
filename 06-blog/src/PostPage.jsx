import React from 'react'
import { useParams, Link } from "react-router-dom"

const PostPage = ({posts, handleDelete}) => {
  const {id} = useParams()
  
  const post = posts.find(post => (post.id).toString() === id)
   return (
    <main className="postPage">
      <article className='post'>
        {
          post && 
          <>
            <h2>
              {post.title}
            </h2>
            <p className='postData'>
              {post.datetime}
            </p>
            <p className='postBody'>
              {post.body}
            </p>
            <button className='delete-btn'
              onClick={()=> handleDelete(post.id)}
            >
              delete post
            </button>
          </>
        } { !post &&
          <>
            <h2>post no found</h2>
            <Link to="/" style={{textAlign: 'center', margin: '15px auto', display: 'block'}}>go home page</Link>
          </>
        }
      </article>
    </main>
  )
}

export default PostPage