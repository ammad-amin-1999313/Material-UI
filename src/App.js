import './App.css'
import Login from './pages/Login.jsx'
import Main from './pages/Main.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './pages/SignUp.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import {useEffect, useState} from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const auth = getAuth()

    onAuthStateChanged(auth, user => {
      if (user) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
      }
    })
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/main"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Main />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
