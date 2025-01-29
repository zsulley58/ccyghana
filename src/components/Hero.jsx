import React from 'react';

const Hero = () => {
  return (
    <div className="w-full mx-auto px-6 py-12">
      {/* Huge Header */}
      <h1 className="text-6xl font-bold text-left mb-16" style={{ fontFamily: 'Big Shoulders Display', fontWeight: 800 }}>
        EVENT CALENDAR
      </h1>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Image 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Event 1"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Event Title 1</h3>
            <p className="text-gray-700">Date: October 15, 2023</p>
            <p className="text-gray-700">Time: 10:00 AM</p>
            <p className="text-gray-700">Venue: Main Hall</p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Event 2"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Event Title 2</h3>
            <p className="text-gray-700">Date: October 16, 2023</p>
            <p className="text-gray-700">Time: 2:00 PM</p>
            <p className="text-gray-700">Venue: Conference Room</p>
          </div>
        </div>

        {/* Image 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Event 3"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Event Title 3</h3>
            <p className="text-gray-700">Date: October 17, 2023</p>
            <p className="text-gray-700">Time: 6:00 PM</p>
            <p className="text-gray-700">Venue: Outdoor Garden</p>
          </div>
        </div>

        {/* Image 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Event 4"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Event Title 4</h3>
            <p className="text-gray-700">Date: October 18, 2023</p>
            <p className="text-gray-700">Time: 11:00 AM</p>
            <p className="text-gray-700">Venue: Auditorium</p>
          </div>
        </div>

        {/* Image 5 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Event 5"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Event Title 5</h3>
            <p className="text-gray-700">Date: October 19, 2023</p>
            <p className="text-gray-700">Time: 3:00 PM</p>
            <p className="text-gray-700">Venue: Rooftop Terrace</p>
          </div>
        </div>

        {/* Image 6 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Event 6"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Event Title 6</h3>
            <p className="text-gray-700">Date: October 20, 2023</p>
            <p className="text-gray-700">Time: 7:00 PM</p>
            <p className="text-gray-700">Venue: Grand Ballroom</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;