import React from "react";

const DeveloperTab: React.FC = () => {
  return (
    <div>
      <form>
        <div>
          <label>Developer Name:</label>
          <input type="text" placeholder="Enter developer name" />
        </div>
        <div>
          <label>Company Registration Number:</label>
          <input type="text" placeholder="Enter registration number" />
        </div>
        <div>
          <label>Registered Office Address:</label>
          <input type="text" placeholder="Enter office address" />
        </div>
        <div>
          <label>Place of Business Address:</label>
          <input type="text" placeholder="Enter business address" />
        </div>
        <div>
          <label>File Reference Number:</label>
          <input type="text" placeholder="Enter file reference number" />
        </div>
        <div>
          <label>Licence Number:</label>
          <input type="text" placeholder="Enter licence number" />
        </div>
        <div>
          <label>Contact Number:</label>
          <input type="text" placeholder="Enter contact number" />
        </div>
      </form>
    </div>
  );
};

export default DeveloperTab;
