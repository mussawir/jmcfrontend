import React from 'react';
import { PDFViewer, Document, Page, Text, Image, View } from '@react-pdf/renderer';
import docImage from '../images/doc3image.jpg';
import docImage2 from '../images/doc4image.jpg';


function App() {
  return (
    <>
      <PDFViewer style={{ width: '100%', height: '100vh', padding: '10px' }}>
        <Document>
          {/* Page 1 */}
          <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>Document Loan</Text>
              <Text style={styles.subtitle}>Property Loan</Text>
            </View>

            {/* Content */}
            <View style={styles.content}>
              {/* Paragraph 1 */}
              <View style={styles.paragraph}>
                <Text style={styles.heading}>About Loan Process:</Text>
                <Text style={styles.paragraphText}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                </Text>
              </View>

              {/* Image Section */}
              <View style={styles.imageSection}>
                <Text style={styles.heading}>Sample Image</Text>
                <Image src={docImage} style={styles.image} />
              </View>

              {/* Paragraph 2 */}
              <View style={styles.paragraph}>
                <Text style={styles.heading}>History of Loan</Text>
                <Text style={styles.paragraphText}>
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged A loan is a sum borrowed from a financial institution, usually a bank or financial institution, with the obligation to repay it over time. Interest is typically charged on loans, the cost of borrowing money. A loan can be used for a variety of objectives. What are the types of Loans
                </Text>
              </View>
              <View style={styles.paragraph}>
                <Text style={styles.heading}>Loan requirement</Text>
                <Text style={styles.paragraphText}>
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged A loan is a sum borrowed from a financial institution, usually a bank or financial institution, with the obligation to repay it over time. Interest is typically charged on loans, the cost of borrowing money. A loan can be used for a variety of objectives. What are the types of Loans
                </Text>
              </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Footer Information: Page 1</Text>
            </View>
          </Page>

          {/* Page 2 */}
          <Page size="A4" style={styles.page}>
            {/* Content for Page 2 */}
            <View style={styles.content}>
              <View style={styles.paragraph}>
                <Text style={styles.heading}>More Content on Second Page</Text>
                <Text style={styles.paragraphText}>
                  This is some additional content to demonstrate the multi-page functionality. You can keep adding more paragraphs, images, or other content. A loan is a sum borrowed from a financial institution, usually a bank or financial institution, with the obligation to repay it over time. Interest is typically charged on loans, the cost of borrowing money. A loan can be used for a variety of objectives. What are the types of Loans
                </Text>
              </View>

              <View style={styles.imageSection}>
                <Text style={styles.heading}>Another Sample Image</Text>
                <Image src={docImage2} style={styles.image} />
              </View>

              <View style={styles.paragraph}>
                <Text style={styles.heading}>More information about loan</Text>
                <Text style={styles.paragraphText}>
                  The content is flowing nicely into the next page, and this will keep going as long as there is enough content. A loan is a sum borrowed from a financial institution, usually a bank or financial institution, with the obligation to repay it over time. Interest is typically charged on loans, the cost of borrowing money. A loan can be used for a variety of objectives. What are the types of Loans. A loan is a sum borrowed from a financial institution, usually a bank or financial institution, with the obligation to repay it over time. Interest is typically charged on loans, the cost of borrowing money. A loan can be used for a variety of objectives. What are the types of Loans. A loan is a sum borrowed from a financial institution, usually a bank or financial institution, with the obligation to repay it over time. Interest is typically charged on loans, the cost of borrowing money. A loan can be used for a variety of objectives. What are the types of Loans
                </Text>
              </View>
            </View>

            {/* Footer for Page 2 */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Footer Information: Page 2</Text>
            </View>
          </Page>

        </Document>
      </PDFViewer>
    </>
  );
}

// Styles for PDF Document
const styles = {
  page: {
    padding: 20,
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
  },
  content: {
    marginBottom: 40,
  },
  paragraph: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  paragraphText: {
    fontSize: 12,
    lineHeight: 1.5,
  },
  imageSection: {
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
  },
  footer: {
    textAlign: 'center',
    fontSize: 10,
    color: '#555',
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
  },
  footerText: {
    marginTop: 10,
  },
};

export default App;
