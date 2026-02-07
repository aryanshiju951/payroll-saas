import Navbar from "./components/Navbar";
import EmployeesPage from "./pages/EmployeesPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <EmployeesPage />
      </main>
    </div>
  );
}

export default App;
