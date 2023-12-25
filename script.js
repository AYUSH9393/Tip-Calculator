document.getElementById('calculate').addEventListener('click', function() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const serviceQuality = parseFloat(document.getElementById('serviceQuality').value);
    const totalPeople = parseInt(document.getElementById('totalPeople').value);
  
    // Check if inputs are valid numbers
    if (!isNaN(billAmount) && !isNaN(serviceQuality) && !isNaN(totalPeople)) {
      // Calculate tip amount per person
      const tipAmount = (billAmount * serviceQuality) / totalPeople;
  
      // Display the calculated tip amount
      document.getElementById('tip').textContent = tipAmount.toFixed(2);
      document.getElementById('each').style.display = 'block'; // Show 'each' text
    } else {
      // If any input is not a valid number, display an error
      alert('Please enter valid numeric values for all fields.');
    }
  });
  