function t02() {
    let jokers = new Array();
    const range = 10; // Range of numbers (0-9)
    const numberOfJokers = 7; // Number of joker numbers to generate

    // Generate random joker numbers
    for (let i = 0; i < numberOfJokers; i++) {
      const randomNumber = Math.floor(Math.random() * range);
      jokers.push(randomNumber);
    }

    // Print joker numbers with spaces
    document.getElementById("joker").textContent = jokers.join(" ");
  }
  function t03() {
    const lottoNumbers = new Array(41).fill(0); // Array to store lotto numbers
    const range = 40; // Range of lotto numbers
    const numberOfLottoNumbers = 7; // Number of lotto numbers to generate

    // Generate 7 different lotto numbers
    let count = 0;
    while (count < numberOfLottoNumbers) {
      const randomNumber = Math.floor(Math.random() * range) + 1;
      if (lottoNumbers[randomNumber] === 0) {
        lottoNumbers[randomNumber] = 1;
        count++;
      }
    }

    // Generate the extra number (different from lotto numbers)
    let extraNumber = 0;
    while (extraNumber === 0 || lottoNumbers[extraNumber] === 1) {
      extraNumber = Math.floor(Math.random() * range) + 1;
    }

    // Generate the plus number (any number between 1 and 40)
    const plusNumber = Math.floor(Math.random() * range) + 1;

    // Print the lotto numbers
    const lottoNumbersString = [];
    for (let i = 1; i < lottoNumbers.length; i++) {
      if (lottoNumbers[i] === 1) {
        lottoNumbersString.push(i);
      }
    }

    document.getElementById("lotto").textContent = lottoNumbersString.join(" ");

    // Print the extra number
    document.getElementById("extra").textContent = extraNumber;

    // Print the plus number
    document.getElementById("plus").textContent = plusNumber;
  }

function t04() {    

        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
        // Clear the print element
        document.getElementById("random").textContent = "";
    
        while (numbers.length > 0) {
          // Generate a random index within the range of the current array length
          const randomIndex = Math.floor(Math.random() * numbers.length);
    
          // Print the value from the array using the random index
          document.getElementById("random").textContent += numbers[randomIndex] + " ";
    
          // Remove the printed value from the array
          numbers.splice(randomIndex, 1);
        }
      }
 