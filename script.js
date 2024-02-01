document.addEventListener("DOMContentLoaded", function() {
    // Fetch events from leekduck.com API (replace API_URL with the actual API endpoint)
    const API_URL = "https://api.leekduck.com/events";
    
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const upcomingEventsList = document.getElementById("upcoming-events");
            const ongoingEventsList = document.getElementById("ongoing-events");

            data.forEach(event => {
                const eventDate = new Date(event.start);

                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <div class="event">
                        <strong>${event.title}</strong> - ${eventDate.toLocaleDateString()}
                    </div>
                `;

                if (eventDate > new Date()) {
                    upcomingEventsList.appendChild(listItem);
                } else {
                    ongoingEventsList.appendChild(listItem);
                }
            });
        })
        .catch(error => console.error("Error fetching events:", error));
});
