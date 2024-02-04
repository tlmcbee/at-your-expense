import { useState } from 'react'
import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpFormFunc from "../../components/SignUpFormFunc/SignUpFormFunc"
import './AuthPage.css'

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false)

  function switchForm() {
    setShowSignUp(!showSignUp)
  }

  return (
    <main className='AuthPage'>
      {showSignUp ?
        <SignUpFormFunc setUser={setUser} switchForm={switchForm}/>
        :
        <LoginForm setUser={setUser} switchForm={switchForm} />
      }
  </main>
  )
}