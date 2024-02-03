import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpFormFunc from "../../components/SignUpFormFunc/SignUpFormFunc"

export default function AuthPage({ setUser, updateReport }) {
  return (
    <main>
      <h1>Auth Page</h1>
      {/* <SignUpForm setUser={setUser}/> */}
      <SignUpFormFunc setUser={ setUser } updateReport={updateReport}/>
      <LoginForm setUser={setUser} updateReport={updateReport} />
  </main>
  )
}