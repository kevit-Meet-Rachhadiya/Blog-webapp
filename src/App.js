import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("/api/data");
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
