import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrainerList from "./components/TrainerList";
import AddTrainer from "./components/AddTrainer";
import EditTrainer from "./components/EditTrainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TrainerList />} />
        <Route path="/add-trainer" element={<AddTrainer />} />
        <Route path="/edit-trainer/:id" element={<EditTrainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
