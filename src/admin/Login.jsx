function Login() {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "80px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "12px",
      }}
    >
      <h2>Login Admin</h2>

      <input
        type="email"
        placeholder="Email"
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "20px",
        }}
      />

      <input
        type="password"
        placeholder="Password"
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "15px",
        }}
      />

      <button
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "12px",
          background: "#2E7D32",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;