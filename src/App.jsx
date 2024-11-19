// style
import './App.css'

// react-router-dom
import {
  RouterProvider, 
  createBrowserRouter, 
} from 'react-router-dom' // 6.11

// pages
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Form from './pages/help/Form'
import Articles from './pages/articles/Articles'
import ArticlesDetail from './pages/articles/ArticlesDetail'
import ErrorPage from './pages/ErrorPage'

// layouts
import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import ArticlesLayout from './layout/ArticlesLayout'

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: 'about',
          element: <About/>
        },
        {
          path: 'contact',
          element: <ContactLayout/>,
          children: [
            {
              path: 'faq',
              element: <Faq/>
            },
            {
              path: 'form',
              element: <Form/>
            }
          ]
        },
        {
          path: 'articles',
          element: <ArticlesLayout/>,
          children: [
            {
              index: true,
              element: <Articles/>
            },
            {
              path: ':id',
              element: <ArticlesDetail/>
            }
          ]
        },
      ]
    }
  ])

  return (
    <div className='App'>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
