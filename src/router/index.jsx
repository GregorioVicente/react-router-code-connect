import { Login } from '../../src/pages/Login/index.jsx'
import { Register } from '../../src/pages/Register/index.jsx'
import { Feed } from '../../src/pages/Feed/index.jsx'
import { BlogPost } from '../../src/pages/BlogPost/index.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ProtectedRoute } from '../../src/components/ProtectedRoute/index.jsx'
import { Logout } from '../../src/pages/Logout/index.jsx'
import { AuthLayout } from '../layouts/Auth/index.jsx'
import { AppLayout } from '../layouts/App/index.jsx'
import { NotFound } from '../pages/NotFound/index.jsx'


export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<AuthLayout />}>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='logout' element={<Logout />} />
        </Route>
        <Route path='/' element={<AppLayout />} d>
          <Route path='' element={
            <ProtectedRoute>
              <Feed />
            </ProtectedRoute>
          } />
          <Route path='blog-post/:slug' element={
            <ProtectedRoute>
              <BlogPost />
            </ProtectedRoute>} />
          <Route path='/not-found' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}