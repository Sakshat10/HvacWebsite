import React from "react";

const Map: React.FC = () => {
  return (
    <div className="flex justify-center bg-white p-4 items-center">
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188575.09772977149!2d-71.37208181328121!3d42.39609709999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37170a4226c61%3A0xa6d953b9e8ab4bf3!2sGreen%20Tech%20Plumbing%20%26%20Heating!5e0!3m2!1sen!2sin!4v1740733008673!5m2!1sen!2sin" 
     width="1500" 
     height="450" 
     style={{border:"0"}} 
     allowFullScreen
     loading="lazy" 
     referrerPolicy="no-referrer-when-downgrade"
     ></iframe>
    </div>
  );
};

export default Map;
