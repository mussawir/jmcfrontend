import React, { useState } from 'react';
import { Box, Typography, Toolbar, CssBaseline, Button, TextField, DialogActions,Select, MenuItem, InputLabel, FormControl, } from '@mui/material';
import Radio from '@mui/material/Radio';
import DrawerComponent from './DrawerComponent';
import HeaderComponent from './HeaderComponent';

function Properties() {
  const [carParkLotNumber, setCarParkLotNumber] = useState('');
  const [carParkBuildingBlockNumber, setCarParkBuildingBlockNumber] = useState('');
  const [selectedValue, setSelectedValue] = useState('a');
  const [dnNumber, setDnNumber] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [fileNumber, setFileNumber] = useState<string>('');
  const [matterCode, setMatterCode] = useState<string>('');
  const [manualNumber, setManualNumber] = useState<string>('');
  const [abc, setAbc] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [billTo, setBillTo] = useState<string>('');
  const [property, setProperty] = useState<string>('');
  const [blank, setBlank] = useState<string>('');
  const [billType, setBillType] = useState<string>('');
  const [propertyCount, setPropertyCount] = useState<string>('');
  const [otherBlank, setOtherBlank] = useState<string>('');
  const [bankRef, setBankRef] = useState<string>('');
  const [adjudicated, setAdjudicated] = useState<string>('');
  const [purchasePrice, setPurchasePrice] = useState<string>('');
  const [loanAmount, setLoanAmount] = useState<string>('');
  const [freeDiscount, setFreeDiscount] = useState<string>('');
  const [disbursementsDeduction, setDisbursementsDeduction] = useState<string>('');
  const [disbursements, setDisbursements] = useState<string>('');
  const [professionalFess, setProfessionalFess] = useState<string>('');
  const [serviceTax, setServiceTax] = useState<string>('');
  const [amountBilled, setAmountBilled] = useState<string>('');
  const [remark, setRemark] = useState<string>('');
  

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const addProperty = async () => {
    const propertyData = {
      dnNumber,
      currentDate,
      fileNumber,
    };

    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await fetch(`${apiUrl}/add-property`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(propertyData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Property added successfully');
      } else {
        alert('Failed to add property');
        console.error(result);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerComponent />
      <HeaderComponent />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
          Add Bill
        </Typography>
        <Box sx={{ display: 'flex', width: '100%', marginBottom: 1, marginTop: 6 }}>
          <Radio
            checked={selectedValue === 'a'}
            onChange={handleChange}
            value="a"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'A' }}
          />
          <Typography sx={{ marginTop: 1 }}>Debit Note</Typography>
          <Radio
            checked={selectedValue === 'b'}
            onChange={handleChange}
            value="b"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'B' }}
          />
          <Typography sx={{ marginTop: 1 }}>Final Legal Bill</Typography>
        </Box>

        {/* Conditional Rendering of Forms */}
        {/* {selectedValue === 'a' ? ( */}
          <Box>
            {/* <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Dibit Note
            </Typography> */}
            <Typography variant="h6" sx={{ marginBottom: 2, }}>
              Bill Detail
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="DN NO"
                fullWidth
                variant="outlined"
                value={dnNumber}
                onChange={(e) => setDnNumber(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Date"
                type="date"
                fullWidth
                variant="outlined"
                value={currentDate}
                onChange={(e) => setCurrentDate(e.target.value)}
                InputLabelProps={{
                  shrink: true, // Ensures the label floats above the input field
              }}
                sx={{ marginBottom: 1 }}
              />
              </Box>
              <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2, }}>
                <InputLabel id="select-title-label">File NO</InputLabel>
                <Select
                  labelId="select-title-label"
                  value={fileNumber}
                  onChange={(e) => setFileNumber(e.target.value)}
                  label="Select Title"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="2000-0161   320   K025 Mathialagan A/L">2000-0161   320   K025 Mathialagan A/L</MenuItem>
                  <MenuItem value="002">002</MenuItem>
                  <MenuItem value="003">003</MenuItem>
                  <MenuItem value="004">004</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2,}}>
                <InputLabel id="select-title-label">Matter Code</InputLabel>
                <Select
                  labelId="select-title-label"
                  value={matterCode}
                  onChange={(e) => setMatterCode(e.target.value)}
                  label="Select Title"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="001">001</MenuItem>
                  <MenuItem value="002">002</MenuItem>
                  <MenuItem value="003">003</MenuItem>
                  <MenuItem value="004">004</MenuItem>
                </Select>
              </FormControl>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2, }}>
                <InputLabel id="select-title-label">Manual NO</InputLabel>
                <Select
                  labelId="select-title-label"
                  value={manualNumber}
                  onChange={(e) => setManualNumber(e.target.value)}
                  label="Select Title"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="001">001</MenuItem>
                  <MenuItem value="002">002</MenuItem>
                  <MenuItem value="003">003</MenuItem>
                  <MenuItem value="004">004</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Abc"
                fullWidth
                variant="outlined"
                value={abc}
                onChange={(e) => setAbc(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              </Box>
              <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="File Name"
                fullWidth
                variant="outlined"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="State"
                fullWidth
                variant="outlined"
                value={state}
                onChange={(e) => setState(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
            <FormControl fullWidth variant="outlined">
                <InputLabel id="select-title-label">Bill To</InputLabel>
                <Select
                  labelId="select-title-label"
                  value={billTo}
                  onChange={(e) => setBillTo(e.target.value)}
                  label="Select Title"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Mathialagan A/L Kandasmy Client">Mathialagan A/L Kandasmy Client</MenuItem>
                  <MenuItem value="Mathialagan A/L Kandasmy Testator">Mathialagan A/L Kandasmy Testator</MenuItem>
                  <MenuItem value="Fazidah Binti Mohamad Yusof Executor">Fazidah Binti Mohamad Yusof Executor</MenuItem>
                  <MenuItem value="FUZAIMIN BIN ABDUL GHANI Executor">FUZAIMIN BIN ABDUL GHANI Executor</MenuItem>
                  <MenuItem value="Fauziah Binti Khalid Executor">Fauziah Binti Khalid Executor</MenuItem>
                  <MenuItem value="Ganesh a/l Ramachandran Executor">Ganesh a/l Ramachandran Executor</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Property"
                fullWidth
                variant="outlined"
                multiline
                rows={4}
                value={property}
                onChange={(e) => setProperty(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
            <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2, }}>
                <InputLabel id="select-title-label"></InputLabel>
                <Select
                  // labelId="select-title-label"
                  value={blank}
                  onChange={(e) => setBlank(e.target.value)}
                  label="Select Title"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="001">001</MenuItem>
                  <MenuItem value="002">002</MenuItem>
                  <MenuItem value="003">003</MenuItem>
                  <MenuItem value="004">004</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="select-title-label">Bill Type</InputLabel>
                <Select
                  labelId="select-title-label"
                  value={billType}
                  onChange={(e) => setBillType(e.target.value)}
                  label="Select Title"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="P0017  Loan(Assignment Case) (Phg)   Pahang      Common">P0017  Loan(Assignment Case) (Phg)   Pahang      Common</MenuItem>
                  <MenuItem value="P0039  Will - RM200.00                 Common      Will">P0039  Will - RM200.00               Common      Will</MenuItem>
                  <MenuItem value="P0040  Will - RM250.00                 Common      Will">P0040  Will - RM250.00               Common      Will</MenuItem>
                  <MenuItem value="P0041  Will - RM200.00                 Common      Will">P0041  Will - RM200.00               Common      Will</MenuItem>
                  <MenuItem value="P0042  Will - RM350.00                 Common      Will">P0042  Will - RM350.00               Common      Will</MenuItem>
                  <MenuItem value="P0043  Will - RM400.00                 Common      Will">P0042  Will - RM350.00               Common      Will</MenuItem>
                  <MenuItem value="P0055  Entery and withdrawal of Caveat Common      Common">P0039  Will - RM200.00             Common      Common</MenuItem>
                  <MenuItem value="P0062  Lump Sum Bill                   Common      Common">P0062  Lump Sum Bill               Common      Common</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Property Count"
                fullWidth
                variant="outlined"
                type='number'
                value={propertyCount}
                onChange={(e) => setPropertyCount(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                // label="Car park building/block number"
                fullWidth
                variant="outlined"
                value={otherBlank}
                onChange={(e) => setOtherBlank(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Bank Ref"
                fullWidth
                variant="outlined"
                value={bankRef}
                onChange={(e) => setBankRef(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Adjudicated Value"
                fullWidth
                // type='time'
                variant="outlined"
                value={adjudicated}
                onChange={ (e) => setAdjudicated(e.target.value)}
                InputLabelProps={{
                  shrink: true, // Ensures the label floats above the input field
              }}
                sx={{ marginBottom: 1 }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Purchase Price"
                fullWidth
                // type='time'
                variant="outlined"
                InputLabelProps={{
                  shrink: true, // Ensures the label floats above the input field
              }}
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Loan Amount"
                fullWidth
                // type='time'
                variant="outlined"
                InputLabelProps={{
                  shrink: true, // Ensures the label floats above the input field
              }}
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Free Discount"
                fullWidth
                // type='time'
                variant="outlined"
                InputLabelProps={{
                  shrink: true, // Ensures the label floats above the input field
              }}
                value={freeDiscount}
                onChange={(e) => setFreeDiscount(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Disbursements Deduction"
                fullWidth
                // type='time'
                variant="outlined"
                InputLabelProps={{
                  shrink: true, // Ensures the label floats above the input field
              }}
                value={disbursementsDeduction}
                onChange={(e) => setDisbursementsDeduction(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
            </Box>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Bill Analysis
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Professional Fees"
                fullWidth
                // type='time'
                variant="outlined"
                InputLabelProps={{
                  shrink: true, // Ensures the label floats above the input field
              }}
                value={professionalFess}
                onChange={(e) => setProfessionalFess(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Disbursements"
                fullWidth
                // type='time'
                variant="outlined"
                InputLabelProps={{
                  shrink: true, // Ensures the label floats above the input field
              }}
                value={disbursements}
                onChange={(e) => setDisbursements(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Service Tax"
                fullWidth
                // type='time'
                variant="outlined"
                InputLabelProps={{
                  shrink: true, // Ensures the label floats above the input field
              }}
                value={serviceTax}
                onChange={(e) => setServiceTax(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Amout Billed"
                fullWidth
                // type='time'
                variant="outlined"
                InputLabelProps={{
                  shrink: true, // Ensures the label floats above the input field
              }}
                value={amountBilled}
                onChange={(e) => setAmountBilled(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Remark"
                // fullWidth
                // type='time'
                multiline
                rows={4}
                variant="outlined"
                InputLabelProps={{
                  shrink: true, 
              }}
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                sx={{ marginBottom: 1, width: '50%', paddingRight: 1, }}
              />
              {/* <TextField
                label="Disbursements Deduction"
                fullWidth
                // type='time'
                variant="outlined"
                InputLabelProps={{
                  shrink: true, // Ensures the label floats above the input field
              }}
                value={carParkBuildingBlockNumber}
                onChange={(e) => setCarParkBuildingBlockNumber(e.target.value)}
                sx={{ marginBottom: 1 }}
              /> */}
            </Box>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Office Use
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
            <FormControl fullWidth variant="outlined">
                <InputLabel id="select-title-label">Entered by</InputLabel>
                <Select
                  labelId="select-title-label"
                  value={fileNumber}
                  onChange={(e) => setFileNumber(e.target.value)}
                  label="Select Title"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Chang Ka Foh">Chang Ka Foh</MenuItem>
                  <MenuItem value="b">b</MenuItem>
                  <MenuItem value="c">c</MenuItem>
                  <MenuItem value="d">d</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="select-title-label">@</InputLabel>
                <Select
                  labelId="select-title-label"
                  value={fileNumber}
                  onChange={(e) => setFileNumber(e.target.value)}
                  label="Select Title"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="15/03/2007">15/03/2007</MenuItem>
                  <MenuItem value="21/05/2015">21/05/2015</MenuItem>
                  <MenuItem value="17/07/2020">17/07/2020</MenuItem>
                  <MenuItem value="13/04/2024">13/04/2024</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
            <FormControl fullWidth variant="outlined">
                <InputLabel id="select-title-label">Updated by</InputLabel>
                <Select
                  labelId="select-title-label"
                  value={fileNumber}
                  onChange={(e) => setFileNumber(e.target.value)}
                  label="Select Title"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="a">a</MenuItem>
                  <MenuItem value="b">b</MenuItem>
                  <MenuItem value="c">c</MenuItem>
                  <MenuItem value="d">d</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="select-title-label">@</InputLabel>
                <Select
                  labelId="select-title-label"
                  value={fileNumber}
                  onChange={(e) => setFileNumber(e.target.value)}
                  label="Select Title"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="15/03/2007">15/03/2007</MenuItem>
                  <MenuItem value="21/05/2015">21/05/2015</MenuItem>
                  <MenuItem value="17/07/2020">17/07/2020</MenuItem>
                  <MenuItem value="13/04/2024">13/04/2024</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <DialogActions sx={{ justifyContent: 'center' }}>
              <Button variant="contained" color="primary" onClick={addProperty}>
                Submit
              </Button>
            </DialogActions>
          </Box>
        {/* ) : ( */}
          {/* <Box> */}
            {/* Form for "Property with individual/strata title" */}
            {/* <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Final Legal Bill
            </Typography> */}
            {/* <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Parcel/unit/lot number"
                fullWidth
                variant="outlined"
                value={parcelUnit}
                onChange={(e) => setParcelUnit(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Title type - Freehold / Leasehold"
                fullWidth
                variant="outlined"
                value={titleTypeFreehold}
                onChange={(e) => setTitleTypeFreehold(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Title description"
                fullWidth
                variant="outlined"
                value={titleDescription}
                onChange={(e) => setTitleDescription(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Title number"
                fullWidth
                variant="outlined"
                value={titleNumber}
                onChange={(e) => setTitleNumber(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Lot number"
                fullWidth
                variant="outlined"
                value={lotNumber}
                onChange={(e) => setLotNumber(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Mukim/Bandar/Pekan"
                fullWidth
                variant="outlined"
                value={mukimBandarPekan}
                onChange={(e) => setMukimBandarPekan(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Daerah"
                fullWidth
                variant="outlined"
                value={daerah}
                onChange={(e) => setDaerah(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Negeri"
                fullWidth
                variant="outlined"
                value={negeri}
                onChange={(e) => setNegeri(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
              <TextField
                label="Leasehold years"
                fullWidth
                variant="outlined"
                value={leaseholdNumbers}
                onChange={(e) => setLeaseholdNumbers(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
              <TextField
                label="Parcel/unit area (square meters)"
                fullWidth
                variant="outlined"
                value={parcelUnitArea}
                onChange={(e) => setParcelUnitArea(e.target.value)}
                sx={{ marginBottom: 1 }}
              />
            </Box> */}
            {/* <Typography variant="h6" sx={{ marginBottom: 2 }}>
              Office Use
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, width: '100%', marginBottom: 1 }}>
            <FormControl fullWidth variant="outlined">
                <InputLabel id="select-title-label">Bill Type</InputLabel>
                <Select
                  labelId="select-title-label"
                  value={fileNumber}
                  onChange={(e) => setFileNumber(e.target.value)}
                  label="Select Title"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Mr">a</MenuItem>
                  <MenuItem value="Ms">b</MenuItem>
                  <MenuItem value="Dr">c</MenuItem>
                  <MenuItem value="Prof">d</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="select-title-label">Bill Type</InputLabel>
                <Select
                  labelId="select-title-label"
                  value={fileNumber}
                  onChange={(e) => setFileNumber(e.target.value)}
                  label="Select Title"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Mr">a</MenuItem>
                  <MenuItem value="Ms">b</MenuItem>
                  <MenuItem value="Dr">c</MenuItem>
                  <MenuItem value="Prof">d</MenuItem>
                </Select>
              </FormControl>
            </Box> */}
            {/* <DialogActions sx={{ justifyContent: 'center' }}>
              <Button variant="contained" color="primary" onClick={addProperty}>
                Submit
              </Button>
            </DialogActions> */}
          {/* </Box> */}
        {/* )} */}
      </Box>
    </Box>
  );
}

export default Properties;
