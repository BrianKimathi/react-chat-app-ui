import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { useSelector } from "react-redux";

const App = () => {
  const user = true;

  const chatArea = useSelector((state) => state.chat.chatArea);

  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          {chatArea && <Detail />}
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
  );
};

export default App;
