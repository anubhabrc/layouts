import React, { useState, useRef, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Update height when content changes or accordion opens/closes
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="w-full mx-auto my-3 rounded-lg bg-indigo-50">
      <div
        className="flex justify-between p-4 md:p-6 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="md:text-xl font-bold">{title}</h3>
        <button
          className="transition-transform duration-300 ease-in-out"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          <FaPlus className="w-5 h-5 text-blue-700" />
        </button>
      </div>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: `${height}px`,
          // maxHeight: 200,
          // opacity: isOpen ? 1 : 0,
          opacity: 1,
        }}
      >
        <div ref={contentRef} className="p-4 pt-0 text-gray-600">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
