import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Assignment() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function submit(e) {
    e.preventDefault();
    setName(username);
  }

  if (name) {
    return (
      <div className="container mt-5 text-center">
        <h1>Welcome {name}!</h1>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card p-4 mx-auto" style={{ width: "400px" }}>
        <h2 className="text-center">Login</h2>

        <form onSubmit={submit}>
          <input type="text" className="form-control mt-3" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
          <input type="password" className="form-control mt-3" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <button className="btn btn-primary mt-3 w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Assignment;
