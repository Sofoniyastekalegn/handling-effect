import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { i } from 'vite/dist/node/types.d-aGj9QkWt'
// consider the follwing example code snipter 
import classes from "./BlogPosts.module.css";
 async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogPosts = awai response.json();
  return blogPosts;

 }

 function BlogPosts() {
  const [loadedPosts, setLoadedPosts] = useState([]);
  fetchPosts().then((fetchedPosts) => setLoadedPosts(fetchedPosts));
  return (
    <ul className={'classes.posts'}>
      {loadedPosts.map((post) => {
        <li key={post.id}>{post.title}</li>
      })}
    </ul>
  );
 
}

export default BlogPosts;
