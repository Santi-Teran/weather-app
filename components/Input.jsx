'use client'
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai"

const Input = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex md:w-2/4 gap-4">
      <input
        type="text"
        className="w-1/2 rounded-sm p-1 outline-none bg-transparent border-b-2 placeholder font-medium"
        placeholder="Search city or airport..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit"><AiOutlineSearch size={25}/></button>
    </form>
  );
};

export default Input;