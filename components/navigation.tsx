import React from "react";

interface NavigationProps {
  selected: string;
  options: string[];
  onChange: (option: string) => void;
}

const Navigation = ({ selected, options, onChange }: NavigationProps) => {
  return (
    <div>
      {options.map((o) => (
        <button
          key={o}
          value={o}
          className={o === selected ? "active" : ""}
          onClick={() => {
            onChange(o);
          }}
        >
          {o}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
