import React from 'react';
import { Award, BookOpen, Heart } from 'lucide-react';

const teamMembers = [
  {
    name: "Vikrant Datta",
    designation: "President",
    image:"https://i.postimg.cc/2yQ9Kg70/vikrant.jpg"
  },
  {
    name: "Ashwani Kumar",
    designation: "Vice President",
    image: "https://i.postimg.cc/d3rgKhwm/ashwani.png",
    
  },
  {
    name: "Poonam Kumari",
    designation: "Chairman",
    image: "https://i.postimg.cc/9f0SQ8cf/poonam.jpg",
  },
  {
    name: "Avtar Singh",
    designation: "Chief Advisor",
    image: "https://i.postimg.cc/yYh2Q3f7/avtar.jpg",
  },
  {
    name: "Inderpreet Singh",
    designation: "General Secretary",
    image: "https://i.postimg.cc/HLNNcwL9/inderpreet.jpg",
  },
  {
    name: "Tejinder Singh",
    designation: "Casheir",
    image: "https://i.postimg.cc/1tNjp8nh/tejinder.jpg",
  },
  {
    name: "Pradeep Kumar",
    designation: "Joint Secretary",
    image: "https://i.postimg.cc/L5K0vmLq/pradeep.jpg",
  },
  {
    name:"Gursharan Jit Singh",
    designation: "Joint Cashier",
    image: "https://i.postimg.cc/t4XwLRfW/Gursharan.jpg",
  }
  
];

const values = [
  {
    icon: BookOpen,
    title: "Education First",
    description: "Providing accessible education and learning tools to empower visually impaired individuals."
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Delivering support services with understanding, dignity, and respect."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Maintaining the highest standards in all our programs and services."
  }
];

function About() {
  return (
    <div className="min-h-screen">
      {/* Mission and History */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-blue-100 leading-relaxed">
            Louis Braille welfare association is working to the blind people! Our association is organising different types of camps, competitions and functions for blinds. Our Orgnization is Registered under Society Registration Act (XXI of 1860) and as ammended by Punjab ammendment act 1957 <br/>
            Registration no: STA/PUNJAL/107/2017-2018
            </p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
