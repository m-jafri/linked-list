import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Modal from "./components/Modal.tsx";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleHomeClick = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <Navbar onHomeClick={handleHomeClick} />
        <Modal show={isModalOpen} onClose={handleCloseModal} />
      </div>
    </>
  );
}

export default App;
