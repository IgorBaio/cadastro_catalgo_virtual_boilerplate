import AuthenticationService from "../../services/AuthenticationService"

function Login (props) {
  function handleLogin () {
    AuthenticationService.loginWithGoogle().then((r)=>{
      console.log('r',r.user.photoURL)
      const {
        uid, 
        displayName,
        email,
        emailVerified,
        photoURL
      } = r.user
      props.history.push('/mess')
    })
  }

  return <div className="Login">
    <button
      onClick={handleLogin}
    >
      Login com o Google
    </button>
  </div>
}

export default Login