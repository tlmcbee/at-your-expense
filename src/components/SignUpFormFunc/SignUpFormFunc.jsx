import { useState } from 'react';
import { signUp } from '../../utilities/users-services'

export default function SignUpFormFunc({ setUser, switchForm }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  })
  const disable = formData.password !== formData.confirm;
  
  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: '',
    })
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const userData = {...formData}
      delete userData.error;
      delete userData.confirm
      const user = await signUp(userData)
      setUser(user)
    } catch {
     setFormData({error: 'Sign Up Failed - Try Again'})
    }
  }

  return (
    <div>
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        <label>Confirm</label>
        <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
        <button type="submit" disabled={disable}>SIGN UP</button>
      </form>
    </div>
    <div>Already have an account? <button onClick={switchForm}>Log In</button></div>
    <p className="error-message">&nbsp;{formData.error}</p>
  </div>
  )
}