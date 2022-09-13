import Header from "./components/Header";
import TaskList from "./components/TaskList";
import headerLogo from "./img/logo.jpg"

function App() {
  return (
    <div className="container">
      <Header logo={headerLogo}/>
      <TaskList/>
    </div>
  );
}

export default App;
