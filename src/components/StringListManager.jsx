import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
const StringListManager = () => {
  const [inputValue, setInputValue] = useState("");
  const [strings, setStrings] = useState([]);
  const [selectedString, setSelectedString] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleAddString = () => {
    if (inputValue.trim() !== "") {
      setStrings([...strings, inputValue]);
      setInputValue("");
    }
  };
  const handleStringClick = (str) => {
    setSelectedString(str);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a String"
      />
      <button onClick={handleAddString}>
        <BsPlusCircle />
        Add List
      </button>
      <ul className="string-list">
        {strings.map((str, index) => (
          <li key={index} onClick={() => handleStringClick(str)}>
            {str.length < 6 ? str : `${str.substring(0, 5)}...`}
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <p>{selectedString}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StringListManager;
