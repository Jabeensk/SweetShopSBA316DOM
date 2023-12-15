document.addEventListener('DOMContentLoaded', function () {
  // Cache elements
  const dessertSelect = document.getElementById('dessert');
  const quantityInput = document.getElementById('quantity');
  const orderForm = document.getElementById('orderForm');
  const orderSummary = document.getElementById('orderSummary');

  // Event listener for form submission
  document.getElementById('submitOrder').addEventListener('click', function () {
      // Form validation
      if (orderForm.checkValidity()) {
          // Create a new div element for order summary
          const summaryDiv = document.createElement('div');
          
          // Retrieve selected options and quantity
          const selectedDessert = dessertSelect.options[dessertSelect.selectedIndex].text;
          const selectedQuantity = quantityInput.value;
          
          // Create order summary text
          const orderText = `Order Summary: ${selectedQuantity} ${selectedDessert}(s)`;

          // Set the text content of the new div
          summaryDiv.textContent = orderText;

          // Append the new div to the orderSummary container
          orderSummary.appendChild(summaryDiv);

          // Clear the form
          orderForm.reset();
      } else {
          alert('Please fill in all the required fields.');
      }
  });
});
