function buildRegisterNumber() {
    // Prompt user for input
    const theLetters = prompt('Enter the letters for the register number (2-3 uppercase letters excluding W):');
    const theDigits = prompt('Enter the digits for the register number (1-3 digits with no leading zeros):');
  
    // Regular expressions for validation
    const lettersRegex = /^[A-VX-Z]{2,3}$/; // Two to three uppercase letters excluding W
    const digitsRegex = /^[1-9]\d{0,2}$/; // One to three digits with no leading zeros
  
    // Validate theLetters argument
    if (!lettersRegex.test(theLetters)) {
      throw new Error('Invalid register number letters');
    }
  
    // Validate theDigits argument
    if (!digitsRegex.test(theDigits)) {
      throw new Error('Invalid register number digits');
    }
  
    // If both arguments are valid, return the register number
    return `${theLetters}-${theDigits}`;
  }
  
  // Test the function
  try {
    const registerNumber = buildRegisterNumber();
    console.log('Generated register number:', registerNumber);
  } catch (error) {
    console.error(error.message);
  }
  