// Fetch locations from backend and populate dropdown
fetch('http://localhost:3000/api/locations') // Make sure the API endpoint is correct
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
feedbackForm.addEventListener("submit", (e) => {
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

  // Log feedback data for now (you could send this to a backend later if needed)
  console.log("Feedback submitted:", feedbackData);
});
