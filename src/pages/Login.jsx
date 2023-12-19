import React, {useState} from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {auth} from '../firebase/Fire'
function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onLogin = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user
        const userEmail = user.email
        navigate('/main', {state: {userEmail}})
        console.log(user)
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  return (
    <>
      <div>
        <div className="bg-gray-200 py-20">
          <div className="w-9/12 mx-auto bg-white py-20 shadow">
            <div className="bg-white lg:mx-48 xl:mx-48 md:mx-48">
              <form onSubmit={onLogin} className="">
                <div className="mb-14">
                  <h1 className="font-sans text-2xl font-semibold not-italic text-center text-current">
                    Welcome Back!
                  </h1>
                </div>

                <div className="flex flex-col my-6  w-6/12 mx-auto">
                  <label
                    htmlFor="email"
                    className="font-sans text-base font-semibold not-italic  "
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="xyz@gmail.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="w-12/12 font-sans  font-semibold not-italic  text-current border rounded p-3 outline-none"
                  />
                </div>
                <div className="flex flex-col my-6 w-6/12 mx-auto">
                  <label
                    htmlFor="password"
                    className=" font-sans text-base font-semibold not-italic  "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="*****"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    className="w-12/12 font-sans  font-semibold not-italic  text-current border rounded p-3 outline-none"
                  />
                </div>

                <div className="text-center mt-28">
                  <button
                    type="submit"
                    className="cursor-pointer rounded outline-none border button-color-orange text-white py-4 px-24 font-sans  font-semibold  !bg-[#f14536]"
                  >
                    Login
                  </button>
                  <a href="/signup">
                    <h1 className="text-[#f14536] cursor-pointer font-sans text-base font-semibold not-italic text-center mt-6">
                      Don't have an account yet?
                    </h1>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
