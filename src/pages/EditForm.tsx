import React, { useState } from 'react';

const EditForm: React.FC = () => {
  // Set default values for both questions
  const [questionOne, setQuestionOne] = useState<string>('abc'); 
  const [questionTwo, setQuestionTwo] = useState<string>('jmc'); 
  const [documentId, setDocumentId] = useState<string>('673d8d3fe8520dcf527fea48');

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:5000/edit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questionOne: questionOne,
          questionTwo: questionTwo,
          _id: documentId,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Data saved successfully!');
      } else {
        alert('Failed to save data');
      }
    } catch (error) {
      console.error('Error saving data:', error);
      alert('An error occurred while saving data');
    }
  };

  
  const Update = async () => {
    try {
      const response = await fetch('http://localhost:5000/edit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questionOne: questionOne,
          questionTwo: questionTwo,
          _id: documentId,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Data saved successfully!');
      } else {
        alert('Failed to save data');
      }
    } catch (error) {
      console.error('Error saving data:', error);
      alert('An error occurred while saving data');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <div className="form-group" style={{ marginBottom: '15px' }}>
        <label htmlFor="questionOne">Question One</label>
        <input
          type="text"
          id="questionOne"
          value={questionOne}
          onChange={(e) => setQuestionOne(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '5px',
          }}
          placeholder="Enter your answer"
        />
      </div>

      <div className="form-group" style={{ marginBottom: '15px' }}>
        <label htmlFor="questionTwo">Question Two</label>
        <input
          type="text"
          id="questionTwo"
          value={questionTwo}
          onChange={(e) => setQuestionTwo(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '5px',
          }}
          placeholder="Enter your answer"
        />
      </div>

      <div className="button-container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={handleSave}
          style={{
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Save
        </button>
      </div>
      <div className="button-container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={Update}
          style={{
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
        Update
        </button>
      </div>

    </div>
  );
};

export default EditForm;
