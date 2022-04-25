import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
   return (
      <Router>
         <div className="flex flex-column justify-between h-screen">
            <Navbar />
            <main>Content</main>
            <h1>git hub test</h1>
         </div>
      </Router>
   );
}

export default App;
