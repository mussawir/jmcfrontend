import React, { useState, useRef  } from 'react';
import './Tabs2.css'; // Add styles as needed

  
  
  const loanHeadings = [
    {
      shortHeading: "End Financier",
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
        "End financier noting PA number registered in which land registry",
      ],
    },
    {
      shortHeading: "Assignor (Individual - Malaysian)",
      questions: [
        "1st Assignor name",
        "1st Assignor identity card",
        "1st Assignor contact number",
        "1st Assignor email address",
        "2nd Assignor name",
        "2nd Assignor identity card",
        "2nd Assignor contact number",
        "2nd Assignor email address",
        "3rd Assignor name",
        "3rd Assignor identity card",
        "3rd Assignor contact number",
        "3rd Assignor email address",
        "4th Assignor name",
        "4th Assignor identity card",
        "4th Assignor contact number",
        "4th Assignor email address",
        "5th Assignor name",
        "5th Assignor identity card",
        "5th Assignor contact number",
        "5th Assignor email address",
        "Assignor correspondence address",
      ],
    },
    {
      shortHeading: "Assignor (Individual - Foreigner)",
      questions: [
        "1st Assignor name",
        "1st Assignor passport number",
        "1st Assignor contact number",
        "1st Assignor email address",
        "2nd Assignor name",
        "2nd Assignor passport number",
        "2nd Assignor contact number",
        "2nd Assignor email address",
        "3rd Assignor name",
        "3rd Assignor passport number",
        "3rd Assignor contact number",
        "3rd Assignor email address",
        "Assignor correspondence address",
        "Assignor correspondence address in Malaysia",
      ],
    },
    {
      shortHeading: "Assignor (Company)",
      questions: [
        "Assignor name",
        "Assignor company registration number",
        "Assignor registered office address",
        "Assignor place of business address",
        "Assignor contact number",
        "Assignor email address",
        "Assignor person in charge name",
        "Assignor person in charge contact number",
        "Assignor person in charge email address",
        "Assignor authorised 1st signatory name",
        "Assignor authorised 1st identity card number",
        "Assignor authorised 1st signatory designation",
        "Assignor authorised 2nd signatory name",
        "Assignor authorised 2nd identity card number",
        "Assignor authorised 2nd signatory designation",
      ],
    },
    {
      shortHeading: "Borrower (Individual - Malaysian)",
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
        "Borrower correspondence address",
      ],
    },
    {
      shortHeading: "Borrower (Individual - Foreigner)",
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
        "Borrower correspondence address in Malaysia",
      ],
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
        "Borrower person in charge name",
        "Borrower person in charge contact number",
        "Borrower person in charge email address",
        "Borrower authorised 1st signatory name",
        "Borrower authorised 1st identity card number",
        "Borrower authorised 1st signatory designation",
        "Borrower authorised 2nd signatory name",
        "Borrower authorised 2nd identity card number",
        "Borrower authorised 2nd signatory designation",
      ],
    },
    {
      shortHeading: "Guarantor (Individual - Malaysian)",
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
        "Guarantor correspondence address",
      ],
    },
    {
      shortHeading: "Guarantor (Individual - Foreigner)",
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
        "Guarantor correspondence address in Malaysia",
      ],
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
        "Guarantor person in charge contact number",
        "Guarantor person in charge email address",
        "Guarantor authorised 1st signatory name",
        "Guarantor authorised 1st identity card number",
        "Guarantor authorised 1st signatory designation",
        "Guarantor authorised 2nd signatory name",
        "Guarantor authorised 2nd identity card number",
        "Guarantor authorised 2nd signatory designation",
      ],
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
          "Proprietor Noting PA registered in which land registry",
        ],
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
          "Redemption sum in numerics",
        ],
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
          "Land area",
        ],
      },
      {
        shortHeading: "Project details",
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
        shortHeading: "Property details",
        questions: [
          "Parcel/unit/lot number",
          "Storey number",
          "Building/block number",
          "Parcel/unit/lot area",
          "Parcel/unit/lot built up area",
          "Accessory parcel(s) number",
          "Accessory parcel(s) building/block number",
          "Air-cond ledge parcel(s) number",
          "Car park lot(s) number",
          "Car park building/block number",
        ],
      },
      {
        shortHeading: "Housing Development Account (HDA) details",
        questions: [
          "Developer HDA number",
          "Bank/financial institution name",
          "Bank/financial institution registered office address",
          "Bank/financial institution file reference number",
        ],
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
          "Developer solicitors lawyer and clerk in charge email address",
        ],
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
          "Purchaser solicitors lawyer and clerk in charge email address",
        ],
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
          "End financier solicitors lawyer and clerk in charge email address",
        ],
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
          "Developer stakeholder person in charge email address",
        ],
      },
      {
        shortHeading: "Purchase price (in Ringgit Malaysia)",
        questions: [
          "Purchase price in words",
          "Purchase price in numerics",
        ],
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
          "Deed of Assignment date",
          "Power of Attorney date",
          "Letter of Guarantee date",
          "Letter of Offer date",
          "Supplementary Letter of Offer / Letter of Variation / Letter of Notification date",
          "PA registration date",
          "Registered PA number and which High Court",
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
            {loanHeadings.map((heading, index) => (
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
          <h2>{loanHeadings[activeTab].shortHeading}</h2>
          <form>
            {loanHeadings[activeTab].questions.map((question, index) => (
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