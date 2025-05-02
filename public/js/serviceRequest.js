// Handle form submission
const serviceRequestForm = document.getElementById("serviceRequestForm");

serviceRequestForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevents the form from submitting the usual way and refreshing the page
    
    const companyName = document.getElementById("companyName").value;
    const location = document.getElementById("location").value;
    const machineType = document.querySelector('input[name="machineType"]:checked')?.value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    const serviceRequestData = {
      companyName,
      location,
      machineType,
      email,
      phone
    };
  
    console.log(serviceRequestData);  // Debugging line to check if data is correct
  
    try {
      const response = await fetch('/api/service-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(serviceRequestData)
      });
  
      const result = await response.json();
      console.log(result);  // Debugging line to check the response from the server
  
      if (response.ok) {
        alert(result.message);  // Show success message
        serviceRequestForm.reset();  // Reset the form after successful submission
      } else {
        alert(result.message);  // Show error message if response is not OK
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting the request. Please try again later.');
    }
  });
  