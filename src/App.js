import { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import ErrorModal from "./components/UI/ErrorModal";

const App = () => {
  const [usersList, setUsersList] = useState([]);
  const [error, setError] = useState();

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => [
      ...prevUsersList,
      { name: userName, age: userAge, key: Math.random().toString() },
    ]);
  };

  const errorHandler = (error) => {
    setError({ title: error.title, message: error.message });
  };

  const cancelErrorHandler = () => setError(null);

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCancelError={cancelErrorHandler}
        />
      )}
      <AddUser onAddUser={addUserHandler} onError={errorHandler} />
      {usersList.length > 0 && <UsersList users={usersList} />}
    </div>
  );
};

export default App;
