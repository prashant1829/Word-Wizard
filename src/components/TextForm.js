import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Switch from './switch';



export default function TextForm(props) {
  const [text, setText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode state
  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

  // Text transformation handlers
  const handleUpClick = () => setText(text.toUpperCase());
  const handleDownClick = () => setText(text.toLowerCase());
  const handleClearClick = () => setText("");
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
  };
  const handleExtraSpaces = () => setText(text.split(/\s+/).join(' '));
  const handleTitleCase = () => setText(text.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  ));

  // Statistics calculations
  const wordCount = text.split(/\s+/).filter(word => word !== "").length;
  const charCount = text.length;
  const readingTime = (wordCount * 0.008).toFixed(2);
  const sentenceCount = text.split(/[.!?]+/).length - 1;
  const paragraphCount = text.split(/\n\s*\n/).filter(p => p !== "").length;

  return (
    <div className={`container-fluid min-vh-100 py-4 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="container">
        <h1 className="display-4 mb-4">{props.headings}</h1>
        
        {/* Dark Mode Toggle using the custom Switch component */}
        <div className="mb-4">
          <Switch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        
        {/* Text Area */}
        <div className="mb-4">
          <textarea 
            className={`form-control ${darkMode ? 'bg-secondary text-light' : ''}`} 
            rows="8" 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your text here..."
          />
        </div>

        {/* Action Buttons */}
        <div className="d-flex flex-wrap gap-2 mb-4">
          <button className="btn btn-primary" onClick={handleUpClick}>
            <i className="bi bi-arrow-up"></i> Uppercase
          </button>
          <button className="btn btn-primary" onClick={handleDownClick}>
            <i className="bi bi-arrow-down"></i> Lowercase
          </button>
          <button className="btn btn-primary" onClick={handleTitleCase}>
            <i className="bi bi-type"></i> Title Case
          </button>
          <button className="btn btn-primary" onClick={handleExtraSpaces}>
            <i className="bi bi-spaces"></i> Remove Extra Spaces
          </button>
          <button className="btn btn-success" onClick={handleCopyClick}>
            <i className="bi bi-clipboard"></i> Copy
          </button>
          <button className="btn btn-danger" onClick={handleClearClick}>
            <i className="bi bi-x-circle"></i> Clear
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 mb-4">
          <div className="col">
            <div className={`card ${darkMode ? 'bg-secondary text-light' : ''}`}>
              <div className="card-body">
                <h5 className="card-title"><i className="bi bi-file-text"></i> Words</h5>
                <p className="card-text display-6">{wordCount}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card ${darkMode ? 'bg-secondary text-light' : ''}`}>
              <div className="card-body">
                <h5 className="card-title"><i className="bi bi-body-text"></i> Characters</h5>
                <p className="card-text display-6">{charCount}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card ${darkMode ? 'bg-secondary text-light' : ''}`}>
              <div className="card-body">
                <h5 className="card-title"><i className="bi bi-clock"></i> Reading Time</h5>
                <p className="card-text display-6">{readingTime} min</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card ${darkMode ? 'bg-secondary text-light' : ''}`}>
              <div className="card-body">
                <h5 className="card-title"><i className="bi bi-chat-text"></i> Sentences</h5>
                <p className="card-text display-6">{sentenceCount}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={`card ${darkMode ? 'bg-secondary text-light' : ''}`}>
              <div className="card-body">
                <h5 className="card-title"><i className="bi bi-text-paragraph"></i> Paragraphs</h5>
                <p className="card-text display-6">{paragraphCount}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className={`card ${darkMode ? 'bg-secondary text-light' : ''}`}>
          <div className="card-body">
            <h5 className="card-title"><i className="bi bi-eye"></i> Preview</h5>
            <p className="card-text">
              {text || <span className="text-muted">Nothing to preview</span>}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}