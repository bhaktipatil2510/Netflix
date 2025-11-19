import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Home } from './components/Home'
import './App.css'
import { Applayout } from "./Applayout/Applayout"




function App() {

  const router = createBrowserRouter([

        {
          path: "/",
          element: <Applayout/>,
          children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/blog",
          element: <Blog/>
        }]
        },

        
      ])
  
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
     
      
    </>
  )
}

export default App
