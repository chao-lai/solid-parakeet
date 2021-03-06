import React from 'react'
import '../styles/blogs.scss'
import Blog from './Blog'

const Blogs = ({ blogs, owner, currentUser, deleteBlog, updateBlog }) => {
  const displayBlogs = () => blogs.length && blogs.map(blog => {
    const { title, text, created_at, user: { username: author, id: userId }, comments } = blog

    return (
      <Blog key={blog.id} title={title} text={text} date={created_at} author={author} currentUser={currentUser} comments={comments} userId={userId} blogId={blog.id} deleteBlog={deleteBlog} updateBlog={updateBlog} />
    )
  })

  const display = () => {
    return !blogs.length ? (
      <h3>No existing blog(s) in the database. Come back in 2 years!</h3>
    ) : <>{displayBlogs()}</>
  }

  return (
    <div className='blogs-container'>
      <h2>{(owner && owner.username) || 'The Bicyclist'}'s Blog</h2>
      {display()}
    </div>
  )
}

export default Blogs
