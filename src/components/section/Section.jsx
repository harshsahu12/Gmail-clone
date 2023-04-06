import React from "react";
import "./Section.css";

const Section = ({ Icon, title, color, selected }) => {
  const sectionStyle = {
    borderBottom: `3px solid ${color}`,
    color: selected && color,
  };

  return (
    <div className={`section ${selected && "section--selected"}`} 
    style={sectionStyle}>
      {Icon}
      <h4>{title}</h4>
    </div>
  );
};

export default Section;
