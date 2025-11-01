import React, { useState } from 'react';

/**
 * SumCalculator Component
 * 
 * A React component that allows users to input two numbers and calculates their sum.
 * Features:
 * - Controlled input components using useState
 * - Input validation (checks for empty fields and non-numeric values)
 * - Dynamic result display
 * - Error handling with user-friendly messages
 */
const SumCalculator = () => {
  // State management using React Hooks
  const [number1, setNumber1] = useState(''); // First number input
  const [number2, setNumber2] = useState(''); // Second number input
  const [sum, setSum] = useState(null); // Calculated sum result
  const [error, setError] = useState(''); // Error message for validation

  /**
   * Handles the calculation of the sum
   * Validates inputs before performing calculation
   */
  const handleCalculate = () => {
    // Reset previous error and result
    setError('');
    setSum(null);

    // Validation: Check if inputs are empty
    if (number1.trim() === '' || number2.trim() === '') {
      setError('⚠️ Please enter both numbers');
      return;
    }

    // Convert inputs to numbers
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    // Validation: Check if inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      setError('⚠️ Please enter valid numbers');
      return;
    }

    // Calculate and display the sum
    const result = num1 + num2;
    setSum(result);
  };

  /**
   * Handles input change for number1
   * @param {Event} e - The input change event
   */
  const handleNumber1Change = (e) => {
    setNumber1(e.target.value);
    // Clear error when user starts typing
    if (error) setError('');
    if (sum !== null) setSum(null);
  };

  /**
   * Handles input change for number2
   * @param {Event} e - The input change event
   */
  const handleNumber2Change = (e) => {
    setNumber2(e.target.value);
    // Clear error when user starts typing
    if (error) setError('');
    if (sum !== null) setSum(null);
  };

  /**
   * Handles Enter key press to trigger calculation
   * @param {Event} e - The keyboard event
   */
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCalculate();
    }
  };

  /**
   * Resets all inputs and results
   */
  const handleReset = () => {
    setNumber1('');
    setNumber2('');
    setSum(null);
    setError('');
  };

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        {/* Header */}
        <h1 className="calculator-title">➕ Sum Calculator</h1>
        <p className="calculator-subtitle">Enter two numbers to calculate their sum</p>

        {/* Input Section */}
        <div className="input-section">
          {/* Number 1 Input */}
          <div className="input-group">
            <label htmlFor="number1" className="input-label">
              Number 1:
            </label>
            <input
              type="text"
              id="number1"
              className="input-field"
              placeholder="Enter first number"
              value={number1}
              onChange={handleNumber1Change}
              onKeyPress={handleKeyPress}
            />
          </div>

          {/* Number 2 Input */}
          <div className="input-group">
            <label htmlFor="number2" className="input-label">
              Number 2:
            </label>
            <input
              type="text"
              id="number2"
              className="input-field"
              placeholder="Enter second number"
              value={number2}
              onChange={handleNumber2Change}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>

        {/* Button Section */}
        <div className="button-section">
          <button 
            className="calculate-button" 
            onClick={handleCalculate}
          >
            Calculate Sum
          </button>
          <button 
            className="reset-button" 
            onClick={handleReset}
          >
            Reset
          </button>
        </div>

        {/* Result/Error Display Section */}
        <div className="result-section">
          {/* Error Message */}
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {/* Success Result */}
          {sum !== null && !error && (
            <div className="result-display">
              <div className="result-label">Result:</div>
              <div className="result-value">{sum}</div>
              <div className="calculation-details">
                {number1} + {number2} = {sum}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SumCalculator;
