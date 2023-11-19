import React from 'react'

const NewPost = ({postTitle, postBody,setPostTitle,setPostBody, handleSubmit}) => {
  return (
    <main className='newPost'>
      <h2>new post</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor="postTitle">
          Title:
          <input 
            type="text" 
            id="postTitle"
            required
            value={postTitle}
            onChange={e=> setPostTitle(e.target.value)}
            style={{marginTop: '10px'}}
          />
        </label>
        <label htmlFor="postBody">
          Body:
          <textarea 
            id="postBody"
            required
            value={postBody}
            onChange={e =>setPostBody(e.target.value)}
            style={{marginTop: '10px'}}
          />
        </label>
        <button type='submit'
          style={{background: "#66d8f5", border: 'none', 'textTransform': 'capitalize', maxWidth: '50%',width: '100%', margin: '0px auto'}}
        >
          add to 
        </button>
      </form>
    </main>
  )
}

export default NewPost;