$(document).ready(function() {
  // Sample event data
  const featuredEvents = [
      {
          id: 'fe001',
          title: 'Summer Music Festival',
          type: 'concert',
          date: '2023-07-15',
          location: 'Central Park',
          price: 49.99,
          image: 'concert.jpg',
          rating: 4.8
      },
      {
          id: 'fe002',
          title: 'Avengers: Endgame',
          type: 'movie',
          date: '2023-06-20',
          location: 'Cineplex Downtown',
          price: 14.99,
          image: 'movies.jpg',
          rating: 4.5
      },
      {
          id: 'fe003',
          title: 'Championship Finals',
          type: 'sports',
          date: '2023-07-05',
          location: 'City Stadium',
          price: 89.99,
          image: 'sport.jpg',
          rating: 4.9
      },
      {
          id: 'fe004',
          title: 'Comedy Night Live',
          type: 'comedy',
          date: '2023-06-25',
          location: 'Laugh Factory',
          price: 29.99,
          image: 'standup.jpg',
          rating: 4.7
      }
  ];

  // Render featured events
  function renderFeaturedEvents() {
      const container = $('#featuredEventsContainer');
      
      featuredEvents.forEach(event => {
          const card = $(`
              <div class="col-md-6 col-lg-3">
                  <div class="card event-card h-100">
                      <img src="../assets/images/events/${event.image}" class="card-img-top" alt="${event.title}">
                      <div class="card-body">
                          <div class="d-flex justify-content-between align-items-start mb-2">
                              <h5 class="card-title mb-0">${event.title}</h5>
                              <span class="badge bg-primary">${event.rating} <i class="fas fa-star"></i></span>
                          </div>
                          <p class="card-text text-muted small">
                              <i class="fas fa-calendar-alt me-1"></i> ${new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                              <br>
                              <i class="fas fa-map-marker-alt me-1"></i> ${event.location}
                          </p>
                      </div>
                      <div class="card-footer bg-white border-top-0">
                          <div class="d-flex justify-content-between align-items-center">
                              <span class="price">$${event.price.toFixed(2)}</span>
                              <a href="${event.type}s.html" class="btn btn-sm btn-primary">Book Now</a>
                          </div>
                      </div>
                  </div>
              </div>
          `);
          
          container.append(card);
      });
  }

  // Initialize carousel
  $('.carousel').carousel({
      interval: 5000,
      pause: 'hover'
  });

  // Initialize functions
  renderFeaturedEvents();
});