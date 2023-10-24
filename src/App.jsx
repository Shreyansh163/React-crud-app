import React from 'react'
import Layouts from './components/Layouts'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CreatePost from './components/posts/CreatePost'
import Allposts from './components/posts/Allposts'
import Post from './components/posts/Post'
import UpdatePost from './components/posts/UpdatePost'
import NotFound from './pages/NotFound';

let router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts />,
        children: [
            {
                index: true,
                element: <Dashboard/>
            },
            {
                path: "create-post",
                element: <CreatePost/>
            },
            {
                path: "all-posts",
                element: <Allposts/>
            },
            {
                path: "post/:id",
                element: <Post/>
            },
            {
                path: "updatepost/:id",
                element: <UpdatePost/>
            },
            {
                path: "*",
                element: <NotFound/>
            },
        ]
    }
])

const App = () => {
  return (
      <RouterProvider router={router}>
      </RouterProvider>
  )
}

export default App