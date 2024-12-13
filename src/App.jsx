import React, { useState } from 'react';
import './App.css';


const Button = ({ type = 'button', onClick, disabled, size = 'md', variant = 'primary', children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${size} ${variant}`}
    >
      {children}
    </button>
  );
};

const Input = ({ type = 'text', placeholder, value, onChange, disabled, label, danger }) => {
  return (
    <div className={`input-wrapper ${danger ? 'danger' : ''}`}>
      {label && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="input"
      />
    </div>
  );
};


const Typography = ({ textSize = 'md', className = '', children }) => {
  return <p className={`typography ${textSize} ${className}`}>{children}</p>;
};


const Heading = ({ level = 1, className = '', children }) => {
  const Tag = `h${level}`;
  return <Tag className={`heading ${className}`}>{children}</Tag>;
};


const Tooltip = ({ text, position = 'top', children }) => {
  return (
    <div className="tooltip-wrapper">
      {children}
      <div className={`tooltip ${position}`}>{text}</div>
    </div>
  );
};


const Accordion = ({ title, defaultOpen = false, children }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};


const App = () => {
  return (
    <div className="app">
      <Heading level={1}>UI Library</Heading>

      <div className="section">
        <Heading level={2}>Buttons</Heading>
        <Button size="lg" variant="primary">Large Primary</Button>
        <Button size="md" variant="primary">Medium Primary</Button>
        <Button size="sm" variant="bordered">Small Bordered</Button>
      </div>

      <div className="section">
        <Heading level={2}>Inputs</Heading>
        <Input label="Name" placeholder="Enter your name" />
        <Input label="Name" danger placeholder="Danger Input" />
      </div>

      <div className="section">
        <Heading level={2}>Typography</Heading>
        <Typography textSize="sm">Small Text</Typography>
        <Typography textSize="md">Medium Text</Typography>
        <Typography textSize="lg">Large Text</Typography>
      </div>

      <div className="section">
        <Heading level={2}>Tooltips</Heading>
        <Tooltip text="Tooltip Top" position="top">Hover me (Top)</Tooltip>
        <Tooltip text="Tooltip Right" position="right">Hover me (Right)</Tooltip>
      </div>


      <div className="section">
        <Heading level={2}>Accordion</Heading>
        <Accordion title="Accordion Example" defaultOpen>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Accordion>
      </div>
    </div>
  );
};

export default App;
