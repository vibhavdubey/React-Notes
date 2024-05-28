import { useState } from "react";

const App = () => {
  const [friends, setFriends] = useState(["Siddhant", "Vaibhav"]);

  const addOne = () => setFriends([...friends, "Vibhav"]);

  const removeOne = () => setFriends(friends.filter((f) => f !== "Vaibhav"));

  const updateOne = () => {
    setFriends(friends.map((f) => (f === "Vibhav" ? "VKD" : f)));
  };

  return (
    <div>
      {friends.map((t) => (
        <li key={Math.random()}>{t}</li>
      ))}
      <button onClick={addOne}>Add One</button>
      <button onClick={removeOne}>Remove One</button>
      <button onClick={updateOne}>Update One</button>
    </div>
  );
};

export default App;
