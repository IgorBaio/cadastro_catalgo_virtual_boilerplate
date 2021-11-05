import { useState } from "react"
import AuthenticationService from "../../services/AuthenticationService"
import SignInput from "./components/SignInput"

function Login (props) {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  function handleLogin () {
    // if()
    console.log(user)
    // AuthenticationService.loginWithGoogle().then((r)=>{
    //   console.log('r',r.user.photoURL)
    //   const {
    //     uid, 
    //     displayName,
    //     email,
    //     emailVerified,
    //     photoURL
    //   } = r.user
      // props.history.push('/mess')
    // })
  }

  return <div className="Login">
    <div>
      
    </div>
    {/* <input onChange={(text)=>setUser(text.target.value)} />
    <input onChange={(text)=>setUser(text.target.value)} /> */}

    <SignInput
          IconName="email"
          placeholder="Digite seu e-mail"
          value={user}
          onChange={(text) => setUser(text.target.value)}
        />
        <SignInput
          IconName="lock"
          placeholder="Digite sua senha"
          value={password}
          onChangeText={(text) => setPassword(text.target.value)}
          password={true}
        />

    {/* <input onChange={(text)=>setUser(text.target.value)} /> */}
    <button
      onClick={handleLogin}
    >
      Login com o Google
    </button>
  </div>
}

export default Login