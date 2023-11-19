import React from "react";
import { useState, useEffect } from 'react';
import {Route,Routes, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
// 
import Home from './Home';
import Layout from "./Layout";
import About from './About';
import Missing from "./Missing";
import PostPage from './PostPage';
import NewPost from './NewPost';

function App() {
  	const [posts, setPosts] = useState([
		{
			id: 1,
			title: "My First Post",
			datetime: "July 07, 2022 12:17:36 AM",
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
		},
		{
			id: 2,
			title: "My 2nd Post",
			datetime: "July 06, 2022 11:17:36 AM",
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
		},
		{
			id: 3,
			title: "My 3rd Post",
			datetime: "July 03, 2022 13:17:36 AM",
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
		},
		{
			id: 4,
			title: "My Fourth Post",
			datetime: "July 02, 2022 14:17:36 AM",
			body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
		}
	]);

	const [search, setSearch  ] = useState("");
	const [searchResault, setSarchResault] = useState([]);
	const [postTitle, setPostTitle] = useState("");
	const [postBody, setPostBody] = useState("");

	const navigate = useNavigate()

	const handleDelete = id => {
		const postlist = posts.filter(post => post.id !== id)
		setPosts(postlist);
		navigate("/");
	}

	const handleSubmit = e => {
		e.preventDefault();
		const id = posts.length ? posts[posts.length - 1]?.id + 1 : 1
		const datetime = format(new Date(), 'MMM dd, yyyy pp');
		const newPost = {
			id,
			title: postTitle,
			body: postBody,
			datetime
		}

		const allPost = [...posts, newPost];
		setPosts(allPost);
		setPostTitle("");
		setPostBody("");

		navigate('/');
	}

	useEffect(() => {
		const filterPost = posts.filter(post => 
			((post.body).toLowerCase()).includes(search.toLowerCase())
			|| ((post.title).toLowerCase()).includes(search.toLowerCase())	
		)
		setSarchResault(filterPost.reverse())
	}, [posts, search]);
	
  return (
    <Routes>
		<Route path="/" 
			element={<Layout 
				posts={posts}
				search={search}
				setSearch={setSearch}
			/>}
		>	
			<Route index element={<Home posts={searchResault}/>}/>	
			<Route path="post">
				<Route index element={<NewPost
					postTitle={postTitle}
					postBody={postBody}
					setPostTitle={setPostTitle}
					setPostBody={setPostBody}
					handleSubmit={handleSubmit}
				/> }/>
				<Route path=":id" element={<PostPage posts={posts} 
					handleDelete={handleDelete}/>}
				/>
			</Route>
			
			<Route path="about" element={<About/>}/>
			<Route path="*" element={<Missing/>}/>
		</Route>

	</Routes>
  );
}

export default App;
