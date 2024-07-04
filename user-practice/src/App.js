import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Main from "./components/Main/Main";

function App() {
  const [user, setUser] = useState("");

  const getData = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      setUser(data.results[0]);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <Header user={user} />
      <Main {...user} getData={getData} />
    </div>
  );
}

export default App;
