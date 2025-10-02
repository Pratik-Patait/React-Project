// src/DashboardPage.jsx

import React, { useState } from 'react';
import './DashboardPage.css'; // Import the stylesheet

// Dummy data for demonstration
const sampleRecentBookings = [
  { id: 1, model: 'Toyota Camry', period: '15 Sep 2025 - 17 Sep 2025', total: '₹12,000', status: 'Completed' },
  { id: 2, model: 'Mahindra Thar', period: '01 Aug 2025 - 03 Aug 2025', total: '₹18,000', status: 'Completed' },
  { id: 3, model: 'Maruti Swift', period: '10 Jul 2025 - 11 Jul 2025', total: '₹6,500', status: 'Cancelled' },
];

const sampleUpcomingBooking = {
  model: 'Hyundai Creta',
  licensePlate: 'MH12 AB1234',
  from: 'October 5, 2025, 10:00 AM',
  to: 'October 8, 2025, 10:00 AM',
  image: 'https://images.unsplash.com/photo-1616422285855-ab45235552a9?q=80&w=400'
};


function DashboardPage({ user }) {
  // State to hold bookings data. In a real app, this would come from an API call.
  const [recentBookings, setRecentBookings] = useState(sampleRecentBookings);
  const [upcomingBooking, setUpcomingBooking] = useState(sampleUpcomingBooking);

  return (
    <>
      <header className="main-header">
        <div className="container">
          <a href="/" className="logo">GoCar</a>
          <nav className="main-nav">
            <a href="#" className="active">Dashboard</a>
            <a href="#">My Bookings</a>
            <a href="#">Profile</a>
            <a href="#" className="btn-logout">Logout</a>
          </nav>
        </div>
      </header>

      <main>
        <div className="container dashboard-content">
          <div className="welcome-message">
            {/* Data is now dynamic from props */}
            <h1>Welcome Back, {user.name}!</h1>
          </div>

          <div className="dashboard-card">
            <h2>Your Next Trip</h2>
            
            {/* Conditional rendering: show booking if it exists, otherwise show a message */}
            {upcomingBooking ? (
              <div className="upcoming-booking">
                <img src={upcomingBooking.image} alt={upcomingBooking.model} />
                <div className="booking-details">
                  {/* Note the style attribute uses an object for JSX */}
                  <h3>{upcomingBooking.model} <span style={{ fontWeight: 'normal', color: '#777' }}>({upcomingBooking.licensePlate})</span></h3>
                  <p><strong>From:</strong> {upcomingBooking.from}</p>
                  <p><strong>To:</strong> {upcomingBooking.to}</p>
                </div>
              </div>
            ) : (
              <div className="no-booking">
                <p>You have no upcoming trips planned.</p>
                <a href="/" className="btn">Book a Car Now</a>
              </div>
            )}
          </div>

          <div className="dashboard-card">
            <h2>Recent Activity</h2>
            <table className="bookings-table">
              <thead>
                <tr>
                  <th>Car Model</th>
                  <th>Rental Period</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Rendering the list of bookings dynamically with .map() */}
                {recentBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.model}</td>
                    <td>{booking.period}</td>
                    <td>{booking.total}</td>
                    <td>
                      <span className={`status status-${booking.status.toLowerCase()}`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      
      <footer className="main-footer">
        <div className="container">
          <p>&copy; 2025 GoCar. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default DashboardPage;