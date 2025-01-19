import React from 'react';
import { Calendar } from 'lucide-react';

const events = {
  2022: [
    {
      title: "Disability document and vaccination camp in Shree Randhir Singh college Kapurthala.",
      date: "April 9, 2022",
      location: "Kapurthala",
      description: "The NSS Unit in collaboration with The Louise Braille Association, organized a camp for individuals with disabilities, providing valuable assistance in effortlessly completing various government job-related tasks.",
      image: "https://i.postimg.cc/RVxjLLLP/event1.jpg"
    }
  ],
  2021: [
    {
      title: "Disability document and vaccination camp Shree Mata gujri college District shree Fateh garh sahib",
      date: "December 11, 2021",
      location:"Fateh Garh Sahib",
      description: "The Nss Unit Mata Gujri College and The Louise Braille Association Conducted a camp for the the Disabled, in which they helped the people to do get government jobs done hassle free.",
      image: "https://i.postimg.cc/fW9Gdrmt/event2.jpg"
    }
  ],
};

function Events() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Events</h1>
        <p className="text-xl text-gray-600">
          Explore our journey through the years and the impact we've made together.
        </p>
      </div>

      {Object.entries(events).reverse().map(([year, yearEvents]) => (
        <div key={year} className="mb-16">
          <div className="flex items-center mb-8">
            <Calendar className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">{year}</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {yearEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-blue-600 mb-2">{event.date} | {event.location}</div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Events;