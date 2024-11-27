import React, { useState, useRef  } from 'react';
import './Tabs2.css'; // Add styles as needed

const headings = [
  {
    shortHeading: "Developer",
    questions: [
      "Developer name",
      "Developer company registration number",
      "Developer registered office address",
      "Developer place of business address",
      "Developer file reference number",
      "Developer licence number",
      "Developer contact number",
      "Developer email address",
      "Developer person in charge name",
      "Developer person in charge contact number",
      "Developer person in charge email address",
      "Developer authorised 1st signatory name",
      "Developer authorised 1st identity card number",
      "Developer authorised 1st signatory designation",
      "Developer authorised 2nd signatory name",
      "Developer authorised 2nd identity card number",
      "Developer authorised 2nd signatory designation",
    ],
  },
  {
    shortHeading: "Purchaser (Individual - Malaysian)",
    questions: [
      "1st Purchaser name",
      "1st Purchaser identity card",
      "1st Purchaser contact number",
      "1st Purchaser email address",
      "2nd Purchaser name",
      "2nd Purchaser identity card",
      "2nd Purchaser contact number",
      "2nd Purchaser email address",
      "Purchaser correspondence address",
    ],
  },
  {
    shortHeading: "Purchaser (Individual - Foreigner)",
    questions: [
      "1st Purchaser name",
      "1st Purchaser passport number",
      "1st Purchaser contact number",
      "1st Purchaser email address",
      "Purchaser correspondence address",
      "Purchaser correspondence address in Malaysia",
    ],
  },
  {
    shortHeading: "Purchaser (Company)",
    questions: [
      "Purchaser name",
      "Purchaser company registration number",
      "Purchaser registered office address",
      "Purchaser place of business address",
      "Purchaser contact number",
      "Purchaser email address",
      "Purchaser person in charge name",
      "Purchaser person in charge contact number",
      "Purchaser person in charge email address",
    ],
  },
  {
    shortHeading: "Proprietor",
    questions: [
      "Proprietor name",
      "Proprietor company registration number",
      "Proprietor registered office address",
      "Proprietor place of business address",
      "Proprietor authorised 1st signatory name",
      "Proprietor authorised 1st identity card number",
      "Proprietor authorised 2nd signatory name",
      "Proprietor authorised 2nd identity card number",
    ],
  },
  {
    shortHeading: "Master Chargee",
    questions: [
      "Master chargee name",
      "Master chargee company registration number",
      "Master chargee registered office address",
      "Master chargee place of business address",
      "Master chargee file reference number",
      "Master chargee contact number",
      "Master chargee email address",
      "Master chargee person in charge name",
      "Master chargee person in charge contact number",
      "Master chargee person in charge email address",
    ],
  },
  {
    shortHeading: "Master Title",
    questions: [
      "Title type - Freehold/Leasehold",
      "Title description",
      "Title number",
      "Lot/PT number",
      "Mukim/Bandar/Pekan",
      "Daerah",
      "Negeri",
      "If leasehold, years and expiration date",
      "Land area",
    ],
  },
  {
    shortHeading: "Project Details",
    questions: [
      "Type of building",
      "Project name",
      "Phase number",
      "Advertisement & sale permit number",
      "Approved layout plan reference number",
      "Local municipal name",
    ],
  },
  {
    shortHeading: "Property Details",
    questions: [
      "Parcel/unit/lot number",
      "Storey number",
      "Building/block number",
      "Parcel/unit/lot area",
      "Parcel/unit/lot built-up area",
      "Accessory parcel(s) number",
    ],
  },
  {
    shortHeading: "Housing Development Account",
    questions: [
      "Developer HDA number",
      "Bank/financial institution name",
      "Bank/financial institution registered office address",
      "Bank/financial institution file reference number",
    ],
  },
  {
    shortHeading: "Developer Solicitors",
    questions: [
      "Developer solicitors name",
      "Developer solicitors office address",
      "Developer solicitors file reference number",
      "Developer solicitors contact number",
      "Developer solicitors email address",
      "Developer attestation lawyer name",
      "Developer attestation lawyer identity card number",
    ],
  },
  {
    shortHeading: "Purchaser Solicitors",
    questions: [
      "Purchaser solicitors name",
      "Purchaser solicitors office address",
      "Purchaser solicitors file reference number",
      "Purchaser solicitors contact number",
      "Purchaser solicitors email address",
    ],
  },
  {
    shortHeading: "Purchase Price",
    questions: [
      "Purchase price in words",
      "Purchase price in numerics",
    ],
  },
  {
    shortHeading: "Adjustment Rate",
    questions: [
      "Adjustment rate in words",
      "Adjustment rate in numerics",
    ],
  },
  {
    shortHeading: "Summary of Purchase Price",
    questions: [
      "Approved purchase price in numerics",
      "Developer discount in numerics",
      "Bumiputera lot discount in numerics",
      "Government initiative in numerics",
    ],
  },
  {
    shortHeading: "Schedule of Payment",
    questions: [
      "Purchase price (10%) in numerics",
      "Purchase price (15%) in numerics",
      "Purchase price (5%) in numerics",
      "Purchase price (2.5%) in numerics",
      "Purchase price (17.5%) in numerics",
      "Purchase price (100%) in numerics",
    ],
  },
  {
    shortHeading: "Developer Stakeholder",
    questions: [
      "Developer stakeholder name",
      "Developer stakeholder office address",
      "Developer stakeholder file reference number",
      "Developer stakeholder contact number",
      "Developer stakeholder email address",
    ],
  },
];

const Tabs2 = () => {
    const scrollTabs = (direction: "left" | "right") => {
        if (tabsRef.current) {
          const scrollAmount = direction === "left" ? -200 : 200;
          tabsRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      };

      const [activeTab, setActiveTab] = useState(0);
      const tabsRef = useRef<HTMLDivElement | null>(null);
      return (
        <div className="tabs-container">
          <div className="tabs-wrapper">
            <button className="scroll-btn left" onClick={() => scrollTabs("left")}>
              &lt;
            </button>
            <div className="tabs" ref={tabsRef}>
              {headings.map((heading, index) => (
                <div
                  key={index}
                  className={`tab ${activeTab === index ? "active" : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  {heading.shortHeading}
                </div>
              ))}
            </div>
            <button className="scroll-btn right" onClick={() => scrollTabs("right")}>
              &gt;
            </button>
          </div>
          <div className="tab-content">
            <h2>{headings[activeTab].shortHeading}</h2>
            <form>
              {headings[activeTab].questions.map((question, index) => (
                <div key={index} className="form-group">
                  <label htmlFor={`field-${activeTab}-${index}`}>{question}</label>
                  <input
                    type="text"
                    id={`field-${activeTab}-${index}`}
                    name={`field-${activeTab}-${index}`}
                    placeholder={`Enter ${question}`}
                  />
                </div>
              ))}
            </form>
          </div>
        </div>
      );
    };
    
    export default Tabs2;