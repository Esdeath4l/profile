import React from 'react';

const ProfileCard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-300 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 text-center transform transition duration-300 hover:scale-105">
        <img
          src="https://via.placeholder.com/150" // Replace with your actual image path
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full border-4 border-pink-500 shadow-md"
        />
        <h1 className="text-2xl font-bold text-pink-700 mt-4">
          <a
            href="https://github.com/Esdeath4l" // Ensure this is your correct GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-900"
          >
            Ritika S
          </a>
        </h1>
        <p className="text-pink-800 mt-2">
          Hi, I'm Ritika! I'm a 2nd-year CSE student, and I'm passionate about building innovative web applications. When I'm not coding, I enjoy exploring new technologies and creating engaging content.
        </p>
        <h2 className="text-lg font-medium text-pink-700 mt-4">Hobbies</h2>
        <ul className="list-disc pl-5 text-left text-pink-800 mt-2">
  <i><li>Building personal projects, websites, and web apps</li>
  <li>Creating engaging visual content using Canva for social media profiles</li>
  <li>Exploring new web development technologies, frameworks, and libraries</li></i>
</ul>

        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/ritika-s-a004b527b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFxF7jTpKTMaPiHZvn%2Ff4LA%3D%3D" // Replace with your LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-700 hover:text-pink-900"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
