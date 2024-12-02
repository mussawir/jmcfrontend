import React, { useState, useRef  } from 'react';
import './Tabs2.css'; // Add styles as needed

  
  
const documentDetails = [
    {
      shortHeading: "End financier",
      questions: [
        "End financier name",
        "End financier company registration number",
        "End financier registered office address",
        "End financier branch office address",
        "End financier CAC/SDC office address",
        "End financier branch file reference number",
        "End financier CAC/SDC file reference number",
        "End financier branch contact number",
        "End financier branch email address",
        "End financier CAC/SDC contact number",
        "End financier CAC/SDC email address",
        "End financier CAC/SDC person in charge name",
        "End financier CAC/SDC person in charge name contact number",
        "End financier CAC/SDC person in charge email address",
        "End financier 1st attorney name",
        "End financier 1st attorney identity card number",
        "End financier 1st attorney designation",
        "End financier 2nd attorney name",
        "End financier 2nd attorney identity card number",
        "End financier 2nd attorney designation",
        "End financier noting PA number registered in which land registry"
      ]
    },
    {
      shortHeading: "Chargor (Individual Malaysian)",
      questions: [
        "1st Chargor name",
        "1st Chargor identity card",
        "1st Chargor contact number",
        "1st Chargor email address",
        "2nd Chargor name",
        "2nd Chargor identity card",
        "2nd Chargor contact number",
        "2nd Chargor email address",
        "3rd Chargor name",
        "3rd Chargor identity card",
        "3rd Chargor contact number",
        "3rd Chargor email address",
        "4th Chargor name",
        "4th Chargor identity card",
        "4th Chargor contact number",
        "4th Chargor email address",
        "5th Chargor name",
        "5th Chargor identity card",
        "5th Chargor contact number",
        "5th Chargor email address",
        "Chargor correspondence address"
      ]
    },
    {
      shortHeading: "Chargor (Individual Foreigner)",
      questions: [
        "1st Chargor name",
        "1st Chargor passport number",
        "1st Chargor contact number",
        "1st Chargor email address",
        "2nd Chargor name",
        "2nd Chargor passport number",
        "2nd Chargor contact number",
        "2nd Chargor email address",
        "3rd Chargor name",
        "3rd Chargor passport number",
        "3rd Chargor contact number",
        "3rd Chargor email address",
        "Chargor correspondence address",
        "Chargor correspondence address in Malaysia"
      ]
    },
    {
      shortHeading: "Chargor (Company)",
      questions: [
        "Chargor name",
        "Chargor company registration number",
        "Chargor registered office address",
        "Chargor place of business address",
        "Chargor contact number",
        "Chargor email address",
        "Chargor person in charge name",
        "Chargor person in charge name contact number",
        "Chargor person in charge email address",
        "Chargor authorised 1st signatory name",
        "Chargor authorised 1st identity card number",
        "Chargor authorised 1st signatory designation",
        "Chargor authorised 2nd signatory name",
        "Chargor authorised 2nd identity card number",
        "Chargor authorised 2nd signatory designation"
      ]
    },
    {
      shortHeading: "Borrower (Individual Malaysian)",
      questions: [
        "1st Borrower name",
        "1st Borrower identity card",
        "1st Borrower contact number",
        "1st Borrower email address",
        "2nd Borrower name",
        "2nd Borrower identity card",
        "2nd Borrower contact number",
        "2nd Borrower email address",
        "3rd Borrower name",
        "3rd Borrower identity card",
        "3rd Borrower contact number",
        "3rd Borrower email address",
        "4th Borrower name",
        "4th Borrower identity card",
        "4th Borrower contact number",
        "4th Borrower email address",
        "5th Borrower name",
        "5th Borrower identity card",
        "5th Borrower contact number",
        "5th Borrower email address",
        "Borrower correspondence address"
      ]
    },
    {
      shortHeading: "Borrower (Individual Foreigner)",
      questions: [
        "1st Borrower name",
        "1st Borrower passport number",
        "1st Borrower contact number",
        "1st Borrower email address",
        "2nd Borrower name",
        "2nd Borrower passport number",
        "2nd Borrower contact number",
        "2nd Borrower email address",
        "3rd Borrower name",
        "3rd Borrower passport number",
        "3rd Borrower contact number",
        "3rd Borrower email address",
        "Borrower correspondence address",
        "Borrower correspondence address in Malaysia"
      ]
    },
    {
      shortHeading: "Borrower (Company)",
      questions: [
        "Borrower name",
        "Borrower company registration number",
        "Borrower registered office address",
        "Borrower place of business address",
        "Borrower contact number",
        "Borrower email address",
        "Borrower person in charge name"
      ]
    },
    {
        shortHeading: "Guarantor (Individual Malaysian)",
        questions: [
          "1st Guarantor name",
          "1st Guarantor identity card",
          "1st Guarantor contact number",
          "1st Guarantor email address",
          "2nd Guarantor name",
          "2nd Guarantor identity card",
          "2nd Guarantor contact number",
          "2nd Guarantor email address",
          "3rd Guarantor name",
          "3rd Guarantor identity card",
          "3rd Guarantor contact number",
          "3rd Guarantor email address",
          "4th Guarantor name",
          "4th Guarantor identity card",
          "4th Guarantor contact number",
          "4th Guarantor email address",
          "5th Guarantor name",
          "5th Guarantor identity card",
          "5th Guarantor contact number",
          "5th Guarantor email address",
          "Guarantor correspondence address"
        ]
      },
      {
        shortHeading: "Guarantor (Individual Foreigner)",
        questions: [
          "1st Guarantor name",
          "1st Guarantor passport number",
          "1st Guarantor contact number",
          "1st Guarantor email address",
          "2nd Guarantor name",
          "2nd Guarantor passport number",
          "2nd Guarantor contact number",
          "2nd Guarantor email address",
          "3rd Guarantor name",
          "3rd Guarantor passport number",
          "3rd Guarantor contact number",
          "3rd Guarantor email address",
          "Guarantor correspondence address",
          "Guarantor correspondence address in Malaysia"
        ]
      },
      {
        shortHeading: "Guarantor (Company)",
        questions: [
          "Guarantor name",
          "Guarantor company registration number",
          "Guarantor registered office address",
          "Guarantor place of business address",
          "Guarantor contact number",
          "Guarantor email address",
          "Guarantor person in charge name",
          "Guarantor person in charge name contact number",
          "Guarantor person in charge email address",
          "Guarantor authorised 1st signatory name",
          "Guarantor authorised 1st identity card number",
          "Guarantor authorised 1st signatory designation",
          "Guarantor authorised 2nd signatory name",
          "Guarantor authorised 2nd identity card number",
          "Guarantor authorised 2nd signatory designation"
        ]
      },
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
          "Developer person in charge name contact number",
          "Developer person in charge email address",
          "Developer authorised 1st signatory name",
          "Developer authorised 1st identity card number",
          "Developer authorised 1st signatory designation",
          "Developer authorised 2nd signatory name",
          "Developer authorised 2nd identity card number",
          "Developer authorised 2nd signatory designation"
        ]
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
          "Proprietor PA number registered in High Court",
          "Proprietor Noting PA registered in which land registry"
        ]
      },
      {
        shortHeading: "Master chargee",
        questions: [
          "Master chargee name",
          "Master chargee company registration number",
          "Master chargee registered office address",
          "Master chargee place of business address",
          "Master chargee file reference number",
          "Master chargee contact number",
          "Master chargee email address",
          "Master chargee person in charge name",
          "Master chargee person in charge name contact number",
          "Master chargee person in charge email address",
          "Redemption cum Disclaimer letter date",
          "Redemption sum in numerics"
        ]
      },
      {
        shortHeading: "Master title details",
        questions: [
          "Title type - Freehold / Leasehold",
          "Title description - H.S.(D) / H.S.(M) / PN / PM / Geran / Geran Mukim",
          "Title number",
          "Lot/PT number",
          "Mukim/Bandar/Pekan",
          "Daerah",
          "Negeri",
          "If leasehold, numbers of years and expiration date",
          "Land area"
        ]
      },
      {
        shortHeading: "Project details",
        questions: [
          "Type of building",
          "Project name",
          "Phase number",
          "Advertisement & sale permit number",
          "Approved layout plan reference number",
          "Local municipal name"
        ]
      },
      {
        shortHeading: "Property details",
        questions: [
          "Parcel/unit/lot number",
          "Title type - Freehold / Leasehold",
          "Title description - H.S.(D) / H.S.(M) / PN / PM / Geran / Geran Mukim",
          "Title number",
          "Lot/PT number",
          "Mukim/Bandar/Pekan",
          "Daerah",
          "Negeri",
          "If leasehold, numbers of years and expiration date",
          "Parcel/unit/lot area",
          "Parcel/unit/lot built up area",
          "Property address"
        ]
      },
      {
        shortHeading: "Housing Development Account (HDA) details",
        questions: [
          "Developer HDA number",
          "Bank/financial institution name",
          "Bank/financial institution registered office address",
          "Bank/financial institution file reference number"
        ]
      },
      {
        shortHeading: "Developer solicitors details",
        questions: [
          "Developer solicitors name",
          "Developer solicitors office address",
          "Developer solicitors file reference number",
          "Developer solicitors contact number",
          "Developer solicitors email address",
          "Developer attestation lawyer name",
          "Developer attestation lawyer identity card number",
          "Developer solicitors lawyer & clerk in charge contact number",
          "Developer solicitors lawyer and clerk in charge email address"
        ]
      },
      {
        shortHeading: "Purchaser solicitors details",
        questions: [
          "Purchaser solicitors name",
          "Purchaser solicitors office address",
          "Purchaser solicitors file reference number",
          "Purchaser solicitors contact number",
          "Purchaser solicitors email address",
          "Purchaser attestation lawyer name",
          "Purchaser attestation lawyer identity card number",
          "Purchaser solicitors lawyer & clerk in charge contact number",
          "Purchaser solicitors lawyer and clerk in charge email address"
        ]
      },
      {
        shortHeading: "End financier solicitors details",
        questions: [
          "End financier solicitors name",
          "End financier solicitors office address",
          "End financier solicitors file reference number",
          "End financier solicitors contact number",
          "End financier solicitors email address",
          "End financier attestation lawyer name",
          "End financier attestation lawyer identity card number",
          "End financier solicitors lawyer & clerk in charge contact number",
          "End financier solicitors lawyer and clerk in charge email address"
        ]
      },
      {
        shortHeading: "Developer stakeholder details",
        questions: [
          "Developer stakeholder name",
          "Developer stakeholder office address",
          "Developer stakeholder file reference number",
          "Developer stakeholder contact number",
          "Developer stakeholder email address",
          "Developer stakeholder person in charge contact number",
          "Developer stakeholder person in charge email address"
        ]
      },
      {
        shortHeading: "Purchase price (in Ringgit Malaysia)",
        questions: [
          "Purchase price in words",
          "Purchase price in numerics"
        ]
      },
      {
        shortHeading: "Facility(ies) details (in Ringgit Malaysia)",
        questions: [
          "Type of facility(ies) - Conventional / Islamic",
          "Purpose of facility(ies)",
          "Facility(ies) product name",
          "Total facility(ies) in words",
          "Total facility(ies) in numerics",
          "MRTA / MRTT in numerics",
          "Valuation in numerics",
          "Legal fee in numerics",
          "Sales price in words",
          "Sales price in numerics",
          "Purchase price in words",
          "Purchase price in numerics",
          "Repayment tenure in words",
          "Repayment tenure in numerics",
          "Monthly repayment in words",
          "Monthly repayment in numerics",
          "Prescribed rate",
          "Base rate",
          "Ceiling profit rate",
          "Effective profit rate",
          "Facility / Facilities / Loan / Commodity Murabahah Agreement date",
          "Charge date",
          "Charge presentation number and which land registry",
          "Letter of Guarantee date",
          "Letter of Offer date",
          "Supplementary Letter of Offer / Letter of Variation / Letter of Extension / Amendment (LOI)"
        ]
      },
    
  ];
  
  
  

const LoanGTabs = () => {
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
            {documentDetails.map((heading, index) => (
              <div
                key={index}
                className={`tab ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {heading.shortHeading} {/* Corrected this line */}
              </div>
            ))}
          </div>
          <button className="scroll-btn right" onClick={() => scrollTabs("right")}>
            &gt;
          </button>
        </div>
        <div className="tab-content">
          <h2>{documentDetails[activeTab].shortHeading}</h2>
          <form>
            {documentDetails[activeTab].questions.map((question, index) => (
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
    
    export default LoanGTabs;