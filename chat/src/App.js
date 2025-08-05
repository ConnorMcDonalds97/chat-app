import './App.css';
import { Sidebar } from "./containers/Sidebar"
import { MessagesList } from "./containers/MessagesList"
import { AddMessage } from "./containers/AddMessage"



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
