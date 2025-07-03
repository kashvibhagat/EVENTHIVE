// $(document).ready(function() {
//     // Sample event data (would normally come from an API)
//     const events = {
//         movies: [
//             {
//                 id: 'm001',
//                 title: 'Avengers: Endgame',
//                 image: 'avengers.jpg',
//                 rating: '4.8',
//                 duration: '3h 2m',
//                 genre: 'Action, Adventure',
//                 showtimes: [
//                     { time: '10:00 AM', price: 12.99 },
//                     { time: '1:30 PM', price: 14.99 },
//                     { time: '5:00 PM', price: 16.99 },
//                     { time: '8:30 PM', price: 18.99 }
//                 ],
//                 theaters: ['Cineplex Downtown', 'AMC City Center']
//             },
//             {
//                 id: 'm002',
//                 title: 'The Batman',
//                 image: 'batman.jpg',
//                 rating: '4.5',
//                 duration: '2h 56m',
//                 genre: 'Action, Crime',
//                 showtimes: [
//                     { time: '11:00 AM', price: 12.99 },
//                     { time: '2:30 PM', price: 14.99 },
//                     { time: '6:00 PM', price: 16.99 },
//                     { time: '9:30 PM', price: 18.99 }
//                 ],
//                 theaters: ['Cineplex Downtown', 'Regal Cinemas']
//             }
//         ],
//         concerts: [
//             {
//                 id: 'c001',
//                 title: 'Global Music Festival',
//                 image: 'music-festival.jpg',
//                 date: '2023-07-15',
//                 venue: 'Central Park',
//                 artists: ['Coldplay', 'Beyoncé', 'The Weeknd'],
//                 priceRange: { min: 49.99, max: 299.99 }
//             },
//             {
//                 id: 'c002',
//                 title: 'Jazz in the Park',
//                 image: 'jazz-concert.jpg',
//                 date: '2023-06-25',
//                 venue: 'Riverside Park',
//                 artists: ['Diana Krall', 'Jamie Cullum', 'Norah Jones'],
//                 priceRange: { min: 39.99, max: 149.99 }
//             }
//         ],
//         sports: [
//             {
//                 id: 's001',
//                 title: 'Championship Finals',
//                 image: 'championship.jpg',
//                 date: '2023-07-05',
//                 teams: ['City Lions', 'United Bears'],
//                 venue: 'City Stadium',
//                 priceRange: { min: 59.99, max: 249.99 }
//             }
//         ],
//         comedy: [
//             {
//                 id: 'cm001',
//                 title: 'Stand-Up Night',
//                 image: 'comedy-show.jpg',
//                 date: '2023-06-18',
//                 comedians: ['Kevin Hart', 'Ali Wong', 'Dave Chappelle'],
//                 venue: 'Laugh Factory',
//                 price: 34.99
//             }
//         ]
//     };
    
//     // Load events based on page
//     const path = window.location.pathname.split('/').pop();
    
//     if (path === 'movies.html') {
//         renderMovies(events.movies);
//     } else if (path === 'concerts.html') {
//         renderConcerts(events.concerts);
//     } else if (path === 'sports.html') {
//         renderSports(events.sports);
//     } else if (path === 'comedy.html') {
//         renderComedy(events.comedy);
//     }
    
//     // Booking functionality
//     $(document).on('click', '.book-btn', function() {
//         const eventId = $(this).data('event-id');
//         const eventType = $(this).data('event-type');
//         const event = getEventById(eventType, eventId);
        
//         if (!event) return;
        
//         // Check if user is logged in
//         const user = JSON.parse(localStorage.getItem('currentUser'));
//         if (!user) {
//             alert('Please login to book tickets');
//             window.location.href = 'login.html';
//             return;
//         }
        
//         // Store selected event for booking process
//         sessionStorage.setItem('selectedEvent', JSON.stringify({
//             type: eventType,
//             data: event
//         }));
        
//         window.location.href = 'payment.html';
//     });
    
//     // Helper functions
//     function renderMovies(movies) {
//         const container = $('#eventsContainer');
        
//         movies.forEach(movie => {
//             const card = $(`
//                 <div class="col-md-6 col-lg-4 mb-4">
//                     <div class="card h-100 shadow-sm">
//                         <img src="../assets/images/events/${movie.image}" class="card-img-top" alt="${movie.title}">
//                         <div class="card-body">
//                             <h5 class="card-title">${movie.title}</h5>
//                             <div class="d-flex justify-content-between mb-2">
//                                 <span class="badge bg-primary">${movie.rating} ★</span>
//                                 <span>${movie.duration}</span>
//                                 <span>${movie.genre}</span>
//                             </div>
//                             <h6 class="mt-3">Showtimes:</h6>
//                             <div class="showtimes">
//                                 ${movie.showtimes.map(st => `
//                                     <div class="showtime-item d-flex justify-content-between align-items-center p-2 border-bottom">
//                                         <span>${st.time}</span>
//                                         <span>$${st.price.toFixed(2)}</span>
//                                         <button class="btn btn-sm btn-primary book-btn" 
//                                                 data-event-id="${movie.id}" 
//                                                 data-event-type="movies">
//                                             Book
//                                         </button>
//                                     </div>
//                                 `).join('')}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             `);
            
//             container.append(card);
//         });
//     }
    
//     function renderConcerts(concerts) {
//         const container = $('#eventsContainer');
        
//         concerts.forEach(concert => {
//             const card = $(`
//                 <div class="col-md-6 col-lg-4 mb-4">
//                     <div class="card h-100 shadow-sm">
//                         <img src="../assets/images/events/${concert.image}" class="card-img-top" alt="${concert.title}">
//                         <div class="card-body">
//                             <h5 class="card-title">${concert.title}</h5>
//                             <p class="card-text">
//                                 <i class="fas fa-calendar-alt me-2"></i>
//                                 ${new Date(concert.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
//                             </p>
//                             <p class="card-text">
//                                 <i class="fas fa-map-marker-alt me-2"></i>
//                                 ${concert.venue}
//                             </p>
//                             <p class="card-text">
//                                 <i class="fas fa-users me-2"></i>
//                                 ${concert.artists.join(', ')}
//                             </p>
//                             <p class="card-text">
//                                 <i class="fas fa-tag me-2"></i>
//                                 $${concert.priceRange.min.toFixed(2)} - $${concert.priceRange.max.toFixed(2)}
//                             </p>
//                         </div>
//                         <div class="card-footer bg-white">
//                             <button class="btn btn-primary w-100 book-btn"
//                                     data-event-id="${concert.id}"
//                                     data-event-type="concerts">
//                                 Book Tickets
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             `);
            
//             container.append(card);
//         });
//     }
    
//     function getEventById(type, id) {
//         return events[type].find(event => event.id === id);
//     }
// });

$(document).ready(function() {
    // Sample event data (would normally come from an API)
    const events = {
        movies: [
            {
                id: 'm001',
                title: 'Avengers: Endgame',
                image: 'Avengers.png',
                rating: '4.8',
                duration: '3h 2m',
                genre: 'Action, Adventure',
                showtimes: [
                    { time: '10:00 AM', price: 12.99 },
                    { time: '1:30 PM', price: 14.99 },
                    { time: '5:00 PM', price: 16.99 },
                    { time: '8:30 PM', price: 18.99 }
                ],
                theaters: ['Cineplex Downtown', 'AMC City Center']
            },
            {
                id: 'm002',
                title: 'The Batman',
                image: 'BatMan.png',
                rating: '4.5',
                duration: '2h 56m',
                genre: 'Action, Crime',
                showtimes: [
                    { time: '11:00 AM', price: 12.99 },
                    { time: '2:30 PM', price: 14.99 },
                    { time: '6:00 PM', price: 16.99 },
                    { time: '9:30 PM', price: 18.99 }
                ],
                theaters: ['Cineplex Downtown', 'Regal Cinemas']
            }
        ],
        concerts: [
            {
                id: 'c001',
                title: 'Global Music Festival',
                image: 'music-festival.png',
                date: '2023-07-15',
                venue: 'Central Park',
                artists: ['Coldplay', 'Beyoncé', 'The Weeknd'],
                priceRange: { min: 49.99, max: 299.99 }
            },
            {
                id: 'c002',
                title: 'Jazz in the Park',
                image: 'jazz-concert.png',
                date: '2023-06-25',
                venue: 'Riverside Park',
                artists: ['Diana Krall', 'Jamie Cullum', 'Norah Jones'],
                priceRange: { min: 39.99, max: 149.99 }
            }
        ],
        sports: [
            {
                id: 's001',
                title: 'Championship Finals',
                image: 'championship.png',
                date: '2023-07-05',
                teams: ['City Lions', 'United Bears'],
                category: 'Cricket',
                venue: 'City Stadium',
                priceRange: { min: 59.99, max: 249.99 }
            },
            {
                id: 's002',
                title: 'Tennis Open Tournament',
                image: 'tennis-open.png',
                date: '2023-08-12',
                teams: ['Alex Murray vs. Rafael Nadovic'],
                venue: 'Grand Slam Arena',
                category: 'Tennis',
                priceRange: { min: 45.99, max: 189.99 }
            },
            {
                id: 's003',
                title: 'Basketball All-Stars',
                image: 'Basketball All-Stars.png',
                date: '2023-07-22',
                teams: ['East Legends', 'West Champions'],
                venue: 'Sports Dome Center',
                category: 'Basketball',
                priceRange: { min: 55.99, max: 220.99 }
            }
        ],
        comedy: [
            {
                id: 'cm001',
                title: 'Stand-Up Night',
                image: 'comedy.png',
                date: '2023-06-18',
                comedians: ['Kevin Hart', 'Ali Wong', 'Dave Chappelle'],
                venue: 'Laugh Factory',
                price: 34.99
            },
            {
                id: 'cm002',
                title: 'Comedy Festival Weekend',
                image: 'comedy-festival.png',
                date: '2023-07-08',
                comedians: ['John Mulaney', 'Hannah Gadsby', 'Trevor Noah'],
                venue: 'Comedy Central Theater',
                price: 49.99
            },
            {
                id: 'cm003',
                title: 'Improv Comedy Night',
                image: 'improv-comedy.png',
                date: '2023-06-30',
                comedians: ['The Second City Troupe', 'Upright Citizens Brigade'],
                venue: 'Improv Club Downtown',
                price: 29.99
            }
        ],
        streams: [
            {
                id: 'st001',
                title: 'Live Music Concert',
                image: 'live-stream-music.jpg',
                date: '2023-06-28',
                time: '8:00 PM',
                performer: 'The Weekend Warriors',
                category: 'Music',
                price: 19.99
            },
            {
                id: 'st002',
                title: 'Gaming Tournament Finals',
                image: 'gaming-stream.jpg',
                date: '2023-07-02',
                time: '3:00 PM',
                performer: 'Pro Gaming League',
                category: 'Gaming',
                price: 9.99
            }
        ],
        activities: [
            {
                id: 'a001',
                title: 'Yoga Workshop',
                image: 'yoga.png',
                date: '2023-07-20',
                venue: 'Community Center',
                highlights: ['Relaxation', 'Mindfulness', 'Health'],
                price: 19.99
            },

            {
                id: 'a002',
                title: 'Mountain Hiking',
                image: 'hiking.png',
                date: '2023-08-05',
                venue: 'Rocky Mountains',
                highlights: ['Adventure', 'Nature', 'Fitness'],
                price: 49.99
            },
            {
                id: 'a003',
                title: 'Cooking Class',
                image: 'cooking.png',
                date: '2023-07-15',
                venue: 'Downtown Kitchen Studio',
                highlights: ['Culinary Skills', 'Fun', 'Learning'],
                price: 29.99
            }
    ]
    };
    
    // Load events based on page
    const path = window.location.pathname.split('/').pop();
    
    if (path === 'movies.html') {
        renderMovies(events.movies);
    } else if (path === 'concerts.html') {
        renderConcerts(events.concerts);
    } else if (path === 'sports.html') {
        renderSports(events.sports);
    } else if (path === 'comedy.html') {
        renderComedy(events.comedy);
    } else if (path === 'streams.html') {
        renderStreams(events.streams);
    }else if (path === 'activities.html') {
        renderStreams(events.activities);
    }
    
    // Booking functionality
    $(document).on('click', '.book-btn', function() {
        const eventId = $(this).data('event-id');
        const eventType = $(this).data('event-type');
        const event = getEventById(eventType, eventId);
        
        if (!event) return;
        
        // Check if user is logged in
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (!user) {
            alert('Please login to book tickets');
            window.location.href = 'login.html';
            return;
        }
        
        // Store selected event for booking process
        sessionStorage.setItem('selectedEvent', JSON.stringify({
            type: eventType,
            data: event
        }));
        
        window.location.href = 'payment.html';
    });
    
    // Helper functions
    function renderMovies(movies) {
        const container = $('#eventsContainer');
        container.empty(); // Clear previous content
    
        movies.forEach(movie => {
            const card = $(`
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card h-100 border-0 shadow transition-card rounded-4">
                        <img src="../assets/images/movies/${movie.image}" 
                             class="card-img-top object-fit-cover rounded-top-4" 
                             style="height: 250px;" alt="${movie.title}">
                        
                        <div class="card-body bg-white d-flex flex-column justify-content-between" style="color: #46414E;">
                            <div>
                                <h5 class="card-title fw-bold text-dark mb-2">${movie.title}</h5>
                                <div class="d-flex justify-content-between align-items-center mb-3 small text-muted">
                                    <span class="badge rounded-pill" style="background-color: #970C3F; color: #fff;">
                                        ${movie.rating} ★
                                    </span>
                                    <span>${movie.duration}</span>
                                    <span>${movie.genre}</span>
                                </div>
    
                                <h6 class="mt-2 mb-2 text-dark">Showtimes:</h6>
                                <div class="showtimes">
                                    ${movie.showtimes.map(st => `
                                        <div class="showtime-item d-flex justify-content-between align-items-center p-2 rounded mb-2" 
                                             style="background-color: #f8f9fa; border: 1px solid #e0e0e0;">
                                            <span>${st.time}</span>
                                            <span>$${st.price.toFixed(2)}</span>
                                            <button class="btn btn-sm fw-semibold"
                                                    style="background-color: #970C3F; color: #FFFFFF;"
                                                    data-event-id="${movie.id}"
                                                    data-event-type="movies">
                                                Book
                                            </button>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
    
            container.append(card);
        });
    }
    
    function renderConcerts(concerts) {
        const container = $('#eventsContainer');
        container.empty(); // Clear existing content
    
        concerts.forEach(concert => {
            const card = $(`
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card h-100 border-0 shadow transition-card rounded-4">
                        <img src="../assets/images/concerts/${concert.image}" 
                             class="card-img-top object-fit-cover rounded-top-4" 
                             style="height: 250px;" 
                             alt="${concert.title}">
                        
                        <div class="card-body bg-white" style="color: #46414E;">
                            <h5 class="card-title fw-bold text-dark mb-2">${concert.title}</h5>
    
                            <p class="card-text mb-2">
                                <i class="fas fa-calendar-alt me-2 text-secondary"></i>
                                ${new Date(concert.date).toLocaleDateString('en-US', {
                                    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
                                })}
                            </p>
    
                            <p class="card-text mb-2">
                                <i class="fas fa-map-marker-alt me-2 text-secondary"></i>
                                ${concert.venue}
                            </p>
    
                            <p class="card-text mb-2">
                                <i class="fas fa-users me-2 text-secondary"></i>
                                ${concert.artists.join(', ')}
                            </p>
    
                            <p class="card-text">
                                <i class="fas fa-tag me-2 text-secondary"></i>
                                $${concert.priceRange.min.toFixed(2)} - $${concert.priceRange.max.toFixed(2)}
                            </p>
                        </div>
    
                        <div class="card-footer bg-white border-top-0">
                            <button class="btn w-100 fw-semibold"
                                    style="background-color: #970C3F; color: #FFFFFF;"
                                    data-event-id="${concert.id}"
                                    data-event-type="concerts">
                                Book Tickets
                            </button>
                        </div>
                    </div>
                </div>
            `);
    
            container.append(card);
        });
    }
    
    
    function renderSports(sports) {
        const container = $('#eventsContainer');
        container.empty(); // Clear previous content
    
        if (sports.length === 0) {
            container.html(`
                <div class="col-12">
                    <div class="alert alert-info text-center shadow-sm rounded bg-white text-dark border">
                        <i class="fas fa-info-circle me-2"></i>No sports events are currently available.
                    </div>
                </div>
            `);
            return;
        }
    
        sports.forEach(sport => {
            const card = $(`
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card h-100 border-0 shadow transition-card rounded-4">
                        <img src="../assets/images/sports/${sport.image}" 
                             class="card-img-top object-fit-cover rounded-top-4" 
                             style="height: 200px;" alt="${sport.title}">
                        
                        <div class="card-body d-flex flex-column justify-content-between bg-white" style="color: #46414E;">
                            <div>
                                <h5 class="card-title fw-bold text-dark mb-2">${sport.title}</h5>
                                ${sport.category ? `<span class="badge rounded-pill mb-3" style="background-color: #970C3F; color: white;">${sport.category}</span>` : ''}
    
                                <p class="card-text mb-2">
                                    <i class="fas fa-calendar-alt me-2" style="color: #970C3F;"></i>
                                    ${new Date(sport.date).toLocaleDateString('en-US', {
                                        weekday: 'short',
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </p>
    
                                <p class="card-text mb-2">
                                    <i class="fas fa-trophy me-2" style="color: #970C3F;"></i>
                                    ${sport.teams.join(' vs ')}
                                </p>
    
                                <p class="card-text mb-2">
                                    <i class="fas fa-map-marker-alt me-2" style="color: #970C3F;"></i>
                                    ${sport.venue}
                                </p>
    
                                <p class="card-text mb-0">
                                    <i class="fas fa-tag me-2" style="color: #970C3F;"></i>
                                    $${sport.priceRange.min.toFixed(2)} - $${sport.priceRange.max.toFixed(2)}
                                </p>
                            </div>
                        </div>
    
                        <div class="card-footer bg-white border-top-0 mt-auto">
                            <button class="btn w-100 book-btn fw-semibold"
                                    style="background-color: #970C3F; color: #FFFFFF;"
                                    data-event-id="${sport.id}"
                                    data-event-type="sports">
                                <i class="fas fa-ticket-alt me-2"></i>Book Tickets
                            </button>
                        </div>
                    </div>
                </div>
            `);
    
            container.append(card);
        });
    }
    

    function renderActivities(activities) {
        const container = $('#activitiesContainer');
        container.empty(); // Clear old content
    
        if (activities.length === 0) {
            container.html('<div class="col-12"><div class="alert alert-info">No activities are currently available.</div></div>');
            return;
        }
    
        activities.forEach(activity => {
            const card = $(`
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card h-100 shadow-sm border-0 rounded-4 transition-card">
                        <img src="../assets/images/activities/${activity.image}" 
                             class="card-img-top object-fit-cover rounded-top-4" 
                             alt="${activity.title}" 
                             style="height: 250px;">
    
                        <div class="card-body p-4 bg-white text-dark" style="color: #46414E;">
                            <h5 class="card-title fw-bold mb-3">${activity.title}</h5>
    
                            <p class="card-text mb-2">
                                <i class="fas fa-calendar-alt me-2 text-secondary"></i>
                                ${new Date(activity.date).toLocaleDateString('en-US', { 
                                    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' 
                                })}
                            </p>
    
                            <p class="card-text mb-2">
                                <i class="fas fa-map-marker-alt me-2 text-secondary"></i>
                                ${activity.venue}
                            </p>
    
                            <div class="mb-3">
                                <i class="fas fa-star me-2 text-secondary"></i>
                                ${activity.highlights.map(h => `
                                    <span class="badge rounded-pill border border-danger text-danger me-1 bg-light">
                                        ${h}
                                    </span>
                                `).join('')}
                            </div>
    
                            <p class="card-text fw-semibold fs-5">
                                <i class="fas fa-tag me-2 text-secondary"></i>
                                $${activity.price.toFixed(2)}
                            </p>
                        </div>
    
                        <div class="card-footer bg-white border-top-0 px-4 pb-4">
                            <button class="btn w-100 text-white fw-semibold book-btn" 
                                    style="background-color: #970C3F;"
                                    data-event-id="${activity.id}" 
                                    data-event-type="activity">
                                Book Activity
                            </button>
                        </div>
                    </div>
                </div>
            `);
    
            container.append(card);
        });
    }
    
    
    function renderComedy(comedyShows) {
        const container = $('#eventsContainer');
        
        if (comedyShows.length === 0) {
            container.html('<div class="col-12"><div class="alert alert-info">No comedy shows are currently available.</div></div>');
            return;
        }
        
        comedyShows.forEach(show => {
            const card = $(`
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card h-100 shadow-sm">
                        <img src="../assets/images/comedy/${show.image}" class="card-img-top" alt="${show.title}">
                        <div class="card-body">
                            <h5 class="card-title">${show.title}</h5>
                            <p class="card-text">
                                <i class="fas fa-calendar-alt me-2"></i>
                                ${new Date(show.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                            </p>
                            <p class="card-text">
                                <i class="fas fa-map-marker-alt me-2"></i>
                                ${show.venue}
                            </p>
                            <p class="card-text">
                                <i class="fas fa-microphone me-2"></i>
                                ${show.comedians.join(', ')}
                            </p>
                            <p class="card-text">
                                <i class="fas fa-tag me-2"></i>
                                $${show.price.toFixed(2)}
                            </p>
                        </div>
                        <div class="card-footer bg-white">
                            <button class="btn btn-primary w-100 book-btn"
                                    data-event-id="${show.id}"
                                    data-event-type="comedy">
                                Book Tickets
                            </button>
                        </div>
                    </div>
                </div>
            `);
            
            container.append(card);
        });
    }
    
    function renderStreams(streams) {
        const container = $('#eventsContainer');
        container.empty(); // Clear old content
    
        if (streams.length === 0) {
            container.html('<div class="col-12"><div class="alert alert-info">No live streams are currently available.</div></div>');
            return;
        }
    
        streams.forEach(stream => {
            const card = $(`
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card h-100 shadow-sm border-0 rounded-4 transition-card">
                        <div class="position-relative">
                            <img src="../assets/images/streams/${stream.image}" 
                                 class="card-img-top object-fit-cover rounded-top-4" 
                                 alt="${stream.title}" 
                                 style="height: 250px;">
                            <span class="badge position-absolute top-0 end-0 m-2 bg-danger text-white">
                                LIVE STREAM
                            </span>
                        </div>
                        <div class="card-body p-4 bg-white text-dark" style="color: #46414E;">
                            <h5 class="card-title fw-bold mb-3">${stream.title}</h5>
    
                            <span class="badge mb-3 bg-light text-dark border border-secondary">${stream.category}</span>
    
                            <p class="card-text mb-2">
                                <i class="fas fa-calendar-alt me-2 text-secondary"></i>
                                ${new Date(stream.date).toLocaleDateString('en-US', { 
                                    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' 
                                })}
                            </p>
    
                            <p class="card-text mb-2">
                                <i class="fas fa-clock me-2 text-secondary"></i>
                                ${stream.time}
                            </p>
    
                            <p class="card-text mb-2">
                                <i class="fas fa-user me-2 text-secondary"></i>
                                ${stream.performer}
                            </p>
    
                            <p class="card-text fw-semibold fs-5">
                                <i class="fas fa-tag me-2 text-secondary"></i>
                                $${stream.price.toFixed(2)}
                            </p>
                        </div>
                        <div class="card-footer bg-white border-top-0 px-4 pb-4">
                            <button class="btn w-100 text-white fw-semibold book-btn"
                                    style="background-color: #970C3F;"
                                    data-event-id="${stream.id}"
                                    data-event-type="streams">
                                Purchase Access
                            </button>
                        </div>
                    </div>
                </div>
            `);
    
            container.append(card);
        });
    }
     
    function getEventById(type, id) {
        return events[type].find(event => event.id === id);
    }
});