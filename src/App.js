import { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import ErrorModal from "./components/UI/ErrorModal";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => [
      ...prevUsersList,
      { name: userName, age: userAge, key: Math.random().toString() },
    ]);
  };

  return (
    <div>
      <ErrorModal title="An error occured!" message="Something went wrong!" />
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
