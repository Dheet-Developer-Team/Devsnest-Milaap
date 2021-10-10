export default function RegisterCard({ setLogin }) {
 
  return (
    <>
      <h2 className="login-header">Register</h2>
      Email
      <input id="email" placeholder="Email"></input>
      Password
      <input id="password" placeholder="Password"></input>
      Confirm Password
      <input id="confirm-password" placeholder="Confirm Password"></input>
      {/* <div className="RememberMe">
        <input className="check-box" type="checkbox"></input> Remember Me
      </div> */}
      <button id="submit-btn">Submit</button>
      Already a Member ?{" "}
      <span
        className="link"
        onClick={() => {
          setLogin(true);
        }}
      >
        Login
      </span>
    </>
  );
}
