// Fetch locations from the backend API
fetch('http://localhost:3000/api/locations') 
  .then(response => response.json())
  .then(locations => {
    const locationDropdown = document.getElementById('locationCompany');
    locations.forEach(location => {
      const option = document.createElement('option');
      option.value = `${location.name} - ${location.company}`;
      option.textContent = `${location.name} - ${location.company}`;
      locationDropdown.appendChild(option);
    });
  })
  .catch(error => {
    console.error('Error fetching locations:', error);
  });

// Handle form submission
const feedbackForm = document.getElementById("feedbackForm");

feedbackForm.addEventListener("submit", async (e) => {  
  e.preventDefault(); 

  const location = document.getElementById("locationCompany").value;
  const favoriteItems = document.getElementById("favoriteItems").value;
  const itemsToSee = document.getElementById("itemsToSee").value;
  const itemsDontLike = document.getElementById("itemsDontLike").value;
  const dietaryPreferences = document.getElementById("dietaryPreferences").value;
  const additionalComments = document.getElementById("additionalComments").value;

  const feedbackData = {
    location,
    favoriteItems,
    itemsToSee,
    itemsDontLike,
    dietaryPreferences,
    additionalComments,
  };

  try {
    const response = await fetch('/api/locations/feedback', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData)
    });

    const result = await response.json();
    if (response.ok) {
      alert(result.message);  
    } else {
      alert(result.message);  
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error submitting feedback. Please try again later.');
  }
});
