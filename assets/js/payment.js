// $(document).ready(function() {
//   // Load selected event from session storage
//   const selectedEvent = JSON.parse(sessionStorage.getItem('selectedEvent'));
  
//   if (!selectedEvent) {
//       window.location.href = '../index.html';
//       return;
//   }
  
//   // Display order summary
//   const summary = $('#orderSummary');
//   let total = 0;
//   let eventDetails = '';
  
//   if (selectedEvent.type === 'movies') {
//       const movie = selectedEvent.data;
//       eventDetails = `
//           <div class="mb-4">
//               <h5>${movie.title}</h5>
//               <div class="d-flex justify-content-between">
//                   <span class="text-muted">Theater:</span>
//                   <span>${movie.theaters[0]}</span>
//               </div>
//               <div class="d-flex justify-content-between">
//                   <span class="text-muted">Showtime:</span>
//                   <span>${movie.showtimes[0].time}</span>
//               </div>
//               <div class="d-flex justify-content-between">
//                   <span class="text-muted">Ticket Price:</span>
//                   <span>$${movie.showtimes[0].price.toFixed(2)}</span>
//               </div>
//           </div>
//       `;
//       total = movie.showtimes[0].price;
//   } else if (selectedEvent.type === 'concerts') {
//       const concert = selectedEvent.data;
//       eventDetails = `
//           <div class="mb-4">
//               <h5>${concert.title}</h5>
//               <div class="d-flex justify-content-between">
//                   <span class="text-muted">Venue:</span>
//                   <span>${concert.venue}</span>
//               </div>
//               <div class="d-flex justify-content-between">
//                   <span class="text-muted">Date:</span>
//                   <span>${new Date(concert.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
//               </div>
//               <div class="d-flex justify-content-between">
//                   <span class="text-muted">Ticket Price:</span>
//                   <span>$${concert.priceRange.min.toFixed(2)}</span>
//               </div>
//           </div>
//       `;
//       total = concert.priceRange.min;
//   } else if (selectedEvent.type === 'sports') {
//       const sport = selectedEvent.data;
//       eventDetails = `
//           <div class="mb-4">
//               <h5>${sport.title}</h5>
//               <div class="d-flex justify-content-between">
//                   <span class="text-muted">Teams:</span>
//                   <span>${sport.teams.join(' vs ')}</span>
//               </div>
//               <div class="d-flex justify-content-between">
//                   <span class="text-muted">Venue:</span>
//                   <span>${sport.venue}</span>
//               </div>
//               <div class="d-flex justify-content-between">
//                   <span class="text-muted">Ticket Price:</span>
//                   <span>$${sport.priceRange.min.toFixed(2)}</span>
//               </div>
//           </div>
//       `;
//       total = sport.priceRange.min;
//   } else if (selectedEvent.type === 'comedy') {
//       const comedy = selectedEvent.data;
//       eventDetails = `
//           <div class="mb-4">
//               <h5>${comedy.title}</h5>
//               <div class="d-flex justify-content-between">
//                   <span class="text-muted">Comedians:</span>
//                   <span>${comedy.comedians.join(', ')}</span>
//               </div>
//               <div class="d-flex justify-content-between">
//                   <span class="text-muted">Venue:</span>
//                   <span>${comedy.venue}</span>
//               </div>
//               <div class="d-flex justify-content-between">
//                   <span class="text-muted">Ticket Price:</span>
//                   <span>$${comedy.price.toFixed(2)}</span>
//               </div>
//           </div>
//       `;
//       total = comedy.price;
//   }
  
//   summary.append(eventDetails);
  
//   // Add fees
//   const serviceFee = 2.50;
//   const tax = total * 0.08; // 8% tax
//   const grandTotal = total + serviceFee + tax;
  
//   summary.append(`
//       <div class="border-top pt-3">
//           <div class="d-flex justify-content-between">
//               <span class="text-muted">Service Fee:</span>
//               <span>$${serviceFee.toFixed(2)}</span>
//           </div>
//           <div class="d-flex justify-content-between">
//               <span class="text-muted">Tax (8%):</span>
//               <span>$${tax.toFixed(2)}</span>
//           </div>
//           <div class="d-flex justify-content-between mt-2">
//               <h5>Total:</h5>
//               <h5>$${grandTotal.toFixed(2)}</h5>
//           </div>
//       </div>
//   `);
  
//   // Handle payment form submission
//   $('#paymentForm').submit(function(e) {
//       e.preventDefault();
      
//       // Validate form
//       const cardNumber = $('#cardNumber').val();
//       const expiry = $('#expiry').val();
//       const cvv = $('#cvv').val();
//       const name = $('#cardName').val();
      
//       if (!cardNumber || !expiry || !cvv || !name) {
//           showAlert('Please fill in all payment details', 'danger');
//           return;
//       }
      
//       if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
//           showAlert('Please enter a valid 16-digit card number', 'danger');
//           return;
//       }
      
//       // Create booking record
//       const currentUser = JSON.parse(localStorage.getItem('currentUser'));
//       if (!currentUser) {
//           alert('Please login to complete booking');
//           window.location.href = 'login.html';
//           return;
//       }
      
//       const booking = {
//           id: 'EVT-' + Math.random().toString(36).substr(2, 8).toUpperCase(),
//           event: selectedEvent,
//           date: new Date().toISOString(),
//           total: grandTotal,
//           paymentMethod: 'Credit Card',
//           lastFour: cardNumber.substr(-4)
//       };
      
//       currentUser.bookings.push(booking);
//       localStorage.setItem('currentUser', JSON.stringify(currentUser));
//       localStorage.setItem(currentUser.email, JSON.stringify(currentUser));
      
//       // Redirect to confirmation page with booking ID
//       window.location.href = `confirmation.html?bookingId=${booking.id}`;
//   });
  
//   function showAlert(message, type) {
//       const alert = $(`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
//           ${message}
//           <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
//       </div>`);
      
//       $('#paymentAlerts').empty().append(alert);
//   }
// });

$(document).ready(function() {
    const selectedEvent = JSON.parse(sessionStorage.getItem('selectedEvent'));
  
    if (!selectedEvent) {
      window.location.href = '../index.html';
      return;
    }
  
    const summary = $('#orderSummary');
    let total = 0;
    let eventDetails = '';
  
    if (selectedEvent.type === 'movies') {
      const movie = selectedEvent.data;
      eventDetails = `
        <div class="mb-4">
          <h5>${movie.title}</h5>
          <div class="d-flex justify-content-between"><span class="text-muted">Theater:</span><span>${movie.theaters[0]}</span></div>
          <div class="d-flex justify-content-between"><span class="text-muted">Showtime:</span><span>${movie.showtimes[0].time}</span></div>
          <div class="d-flex justify-content-between"><span class="text-muted">Ticket Price:</span><span>$${movie.showtimes[0].price.toFixed(2)}</span></div>
        </div>
      `;
      total = movie.showtimes[0].price;
    } else if (selectedEvent.type === 'concerts') {
      const concert = selectedEvent.data;
      eventDetails = `
        <div class="mb-4">
          <h5>${concert.title}</h5>
          <div class="d-flex justify-content-between"><span class="text-muted">Venue:</span><span>${concert.venue}</span></div>
          <div class="d-flex justify-content-between"><span class="text-muted">Date:</span><span>${new Date(concert.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span></div>
          <div class="d-flex justify-content-between"><span class="text-muted">Ticket Price:</span><span>$${concert.priceRange.min.toFixed(2)}</span></div>
        </div>
      `;
      total = concert.priceRange.min;
    } else if (selectedEvent.type === 'sports') {
      const sport = selectedEvent.data;
      eventDetails = `
        <div class="mb-4">
          <h5>${sport.title}</h5>
          <div class="d-flex justify-content-between"><span class="text-muted">Teams:</span><span>${sport.teams.join(' vs ')}</span></div>
          <div class="d-flex justify-content-between"><span class="text-muted">Venue:</span><span>${sport.venue}</span></div>
          <div class="d-flex justify-content-between"><span class="text-muted">Ticket Price:</span><span>$${sport.priceRange.min.toFixed(2)}</span></div>
        </div>
      `;
      total = sport.priceRange.min;
    } else if (selectedEvent.type === 'comedy') {
      const comedy = selectedEvent.data;
      eventDetails = `
        <div class="mb-4">
          <h5>${comedy.title}</h5>
          <div class="d-flex justify-content-between"><span class="text-muted">Comedians:</span><span>${comedy.comedians.join(', ')}</span></div>
          <div class="d-flex justify-content-between"><span class="text-muted">Venue:</span><span>${comedy.venue}</span></div>
          <div class="d-flex justify-content-between"><span class="text-muted">Ticket Price:</span><span>$${comedy.price.toFixed(2)}</span></div>
        </div>
      `;
      total = comedy.price;
    }
  
    summary.append(eventDetails);
  
    const serviceFee = 2.50;
    const tax = total * 0.08;
    const grandTotal = total + serviceFee + tax;
  
    summary.append(`
      <div class="border-top pt-3">
        <div class="d-flex justify-content-between"><span class="text-muted">Service Fee:</span><span>$${serviceFee.toFixed(2)}</span></div>
        <div class="d-flex justify-content-between"><span class="text-muted">Tax (8%):</span><span>$${tax.toFixed(2)}</span></div>
        <div class="d-flex justify-content-between mt-2"><h5>Total:</h5><h5>$${grandTotal.toFixed(2)}</h5></div>
      </div>
    `);
  
    $('#paymentForm').submit(function(e) {
      e.preventDefault();
  
      const cardNumber = $('#cardNumber').val();
      const expiry = $('#expiry').val();
      const cvv = $('#cvv').val();
      const name = $('#cardName').val();
  
      if (!cardNumber || !expiry || !cvv || !name) {
        showAlert('Please fill in all payment details', 'danger');
        return;
      }
  
      if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
        showAlert('Please enter a valid 16-digit card number', 'danger');
        return;
      }
  
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (!currentUser) {
        alert('Please login to complete booking');
        window.location.href = 'login.html';
        return;
      }
  
      const booking = {
        id: 'EVT-' + Math.random().toString(36).substr(2, 8).toUpperCase(),
        event: selectedEvent,
        date: new Date().toISOString(),
        total: grandTotal,
        paymentMethod: 'Credit Card',
        lastFour: cardNumber.substr(-4)
      };
  
      currentUser.bookings.push(booking);
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      localStorage.setItem(currentUser.email, JSON.stringify(currentUser));
  
      window.location.href = `confirmation.html?bookingId=${booking.id}`;
    });
  
    function showAlert(message, type) {
      const alert = $(`
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
          ${message}
          <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
      `);
      $('#paymentAlerts').empty().append(alert);
    }
  });
  