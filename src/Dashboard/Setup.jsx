import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useAppContext } from "../context/AppContext";

const Setup = () => {
  const { settings, setSettings, setCurrencySymbol, getCurrencySymbol } =
    useAppContext();

  const handleCurrencyChange = (e) => {
    const selectedCurrency = e.target.value;
    setSettings((prev) => ({ ...prev, currency: selectedCurrency }));
    setCurrencySymbol(getCurrencySymbol(selectedCurrency));
  };

  // Handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // If the value is empty, keep it empty, otherwise ensure it does not go below 0
    const numericValue = value === "" ? "" : Math.max(0, Number(value));

    setSettings((prev) => ({
      ...prev,
      [name]: numericValue,
    }));
  };

  const handleSaveSettings = () => {
    console.log("Saved Settings:", settings);
    alert("Settings saved successfully!");
  };

  return (
    <div className="mt-4 px-4 px-md-5">
      <div className="bg-white p-4 row px-md-5 rounded">
        <h3 className="mb-4 text-center">Setup</h3>
        <Form>
          <Row className="mb-4 g-4 justify-content-center">
            <Col md={6} className="pe-0 pe-md-2">
              <Form.Group controlId="formFarmName">
                <Form.Label className="fw-medium">Farm Name</Form.Label>
                <Form.Control
                  type="text"
                  name="farmName"
                  value={settings.farmName}
                  onChange={handleInputChange}
                  placeholder="Enter your farm's name"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="ps-0 ps-md-2">
              <Form.Group controlId="formCurrency">
                <Form.Label className="fw-medium">Currency</Form.Label>
                <Form.Control
                  as="select"
                  name="currency"
                  value={settings.currency}
                  onChange={handleCurrencyChange}
                  className="form-select cursor-pointer"
                >
                  <option value="NPR">NPR</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="INR">INR</option>
                  <option value="GBP">GBP</option>
                  <option value="AUD">AUD</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4 g-4">
            <Col md={6} className="pe-0 pe-md-2">
              <Form.Group controlId="formSellingDays">
                <Form.Label className="fw-medium">Days to Sell Out</Form.Label>
                <Form.Control
                  type="number"
                  name="sellingDays"
                  value={settings.sellingDays}
                  onChange={handleInputChange}
                  placeholder="Enter days to sell chickens"
                />
              </Form.Group>
            </Col>
            <Col md={6} className="ps-0 ps-md-2">
              <Form.Group controlId="formAlertBeforeSale">
                <Form.Label className="fw-medium">
                  Alert Before Vaccination (Days)
                </Form.Label>
                <Form.Control
                  type="number"
                  name="alertBeforeSale"
                  value={settings.alertBeforeSale}
                  onChange={handleInputChange}
                  placeholder="Enter days before vaccination to alert"
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="mt-4 d-flex justify-content-center">
            <Button variant="primary" onClick={handleSaveSettings}>
              Save Settings
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Setup;
