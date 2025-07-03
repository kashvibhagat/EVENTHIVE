$(document).ready(function() {
    // Get booking ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const bookingId = urlParams.get('bookingId');
    
    if (!bookingId) {
        window.location.href = '../index.html';
        return;
    }
    
    // Get current user and booking details
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = '../index.html';
        return;
    }
    
    const booking = currentUser.bookings.find(b => b.id === bookingId);
    if (!booking) {
        window.location.href = '../index.html';
        return;
    }
    
    // Display booking details
    $('#bookingRef').text(booking.id);
    $('#bookingDate').text(new Date(booking.date).toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }));
    
    const details = $('#bookingDetails');
    const event = booking.event.data;
    
    let eventDetails = '';
    if (booking.event.type === 'movies') {
        eventDetails = `
            <div class="mb-3">
                <h5>${event.title}</h5>
                <div class="d-flex justify-content-between">
                    <span class="text-muted">Theater:</span>
                    <span>${event.theaters[0]}</span>
                </div>
                <div class="d-flex justify-content-between">
                    <span class="text-muted">Showtime:</span>
                    <span>${event.showtimes[0].time}</span>
                </div>
                <div class="d-flex justify-content-between">
                    <span class="text-muted">Seats:</span>
                    <span>General Admission</span>
                </div>
            </div>
        `;
    } else if (booking.event.type === 'concerts') {
        eventDetails = `
            <div class="mb-3">
                <h5>${event.title}</h5>
                <div class="d-flex justify-content-between">
                    <span class="text-muted">Venue:</span>
                    <span>${event.venue}</span>
                </div>
                <div class="d-flex justify-content-between">
                    <span class="text-muted">Date:</span>
                    <span>${new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div class="d-flex justify-content-between">
                    <span class="text-muted">Artists:</span>
                    <span>${event.artists.join(', ')}</span>
                </div>
            </div>
        `;
    } else if (booking.event.type === 'sports') {
        eventDetails = `
            <div class="mb-3">
                <h5>${event.title}</h5>
                <div class="d-flex justify-content-between">
                    <span class="text-muted">Teams:</span>
                    <span>${event.teams.join(' vs ')}</span>
                </div>
                <div class="d-flex justify-content-between">
                    <span class="text-muted">Venue:</span>
                    <span>${event.venue}</span>
                </div>
                <div class="d-flex justify-content-between">
                    <span class="text-muted">Date:</span>
                    <span>${new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
            </div>
        `;
    } else if (booking.event.type === 'comedy') {
        eventDetails = `
            <div class="mb-3">
                <h5>${event.title}</h5>
                <div class="d-flex justify-content-between">
                    <span class="text-muted">Comedians:</span>
                    <span>${event.comedians.join(', ')}</span>
                </div>
                <div class="d-flex justify-content-between">
                    <span class="text-muted">Venue:</span>
                    <span>${event.venue}</span>
                </div>
                <div class="d-flex justify-content-between">
                    <span class="text-muted">Date:</span>
                    <span>${new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
            </div>
        `;
    }
    
    details.append(eventDetails);
    
    // Add payment details
    details.append(`
        <div class="border-top pt-3">
            <h5>Payment Details</h5>
            <div class="d-flex justify-content-between">
                <span class="text-muted">Payment Method:</span>
                <span>${booking.paymentMethod} ending in ${booking.lastFour}</span>
            </div>
            <div class="d-flex justify-content-between">
                <span class="text-muted">Total Paid:</span>
                <span class="fw-bold">$${booking.total.toFixed(2)}</span>
            </div>
        </div>
    `);
    
    // Download ticket handler
    $('#downloadTicket').click(function() {
        // In a real app, this would generate a PDF ticket
        // For demo, we'll show a success message
        const alert = $(`<div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
            Your ticket has been downloaded successfully!
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>`);
        
        $('#downloadAlert').empty().append(alert);
    });
    
    // Email ticket handler
    $('#emailTicket').click(function() {
        // In a real app, this would send an email
        // For demo, we'll show a success message
        const alert = $(`<div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
            Your ticket has been sent to your email address!
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>`);
        
        $('#emailAlert').empty().append(alert);
    });
});