import './App.css';
import { Sidebar } from "./components/Sidebar"
import { MessagesList } from "./components/MessagesList"
import { AddMessage } from "./components/AddMessage"



function App() {
  return (
    <div className="container">

      <Sidebar/>

      <div className="chatBoxes">
        <MessagesList/>
        <AddMessage/>
      </div>

    </div>
    
  );
}

export default App;
