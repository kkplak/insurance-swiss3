import React, { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

const ToggleDescription = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="toggle-description-container">
      <button
        type="button"
        className="toggle-header"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="toggle-title">{title}</span>
        <span
          className={`toggle-icon${isOpen ? " toggle-icon--open" : ""}`}
          aria-hidden="true"
        >
          <ChevronDown size={20} />
        </span>
      </button>
      {isOpen && (
        <div id={contentId} className="toggle-content">
          <div className="toggle-content__inner">{description}</div>
        </div>
      )}
    </div>
  );
};

export default ToggleDescription;
