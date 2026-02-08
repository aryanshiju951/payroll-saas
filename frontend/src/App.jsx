import Navbar from "./components/Navbar";
import EmployeesPage from "./pages/EmployeesPage";


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
