import React, { useState } from 'react';

const SpaRecAddUpdate: React.FC = () => {
  // Set default values for both questions
  const [questionOne, setQuestionOne] = useState<string>('abc');
  const [questionTwo, setQuestionTwo] = useState<string>('jmc');
  const [documentId, setDocumentId] = useState<string>('');  // Leave this empty for new entries

  const spaSave = async () => {
    try {
      const apiUrl = process.env.API_URL;
      const response = await fetch(`${apiUrl}/spaops`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questionOne: questionOne,
          questionTwo: questionTwo,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message + data.id);

        // Set the document ID if the response contains it
        setDocumentId(data.id);  // Set the new document ID
      } else {
        alert('Failed to save data');
      }
    } catch (error) {
      console.error('Error saving data:', error);
      alert('An error occurred while saving data');
    }
  };

  const spaUpdate = async () => {
    try {
      if (!documentId) {
        alert('Please provide a valid document ID for update.');
        return;
      }
      const apiUrl = process.env.API_URL;
      const response = await fetch(`${apiUrl}/spaops`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          questionOne: questionOne,
          questionTwo: questionTwo,
          _id: documentId,  // Pass the document ID in the body for update
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Data updated successfully!');
      } else {
        alert('Failed to update data');
      }
    } catch (error) {
      console.error('Error updating data:', error);
      alert('An error occurred while updating data');
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

      {/* Save Button */}
      <div className="button-container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={spaSave}
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

      {/* Update Button */}
      <div className="button-container" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={spaUpdate}
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

export default SpaRecAddUpdate;
