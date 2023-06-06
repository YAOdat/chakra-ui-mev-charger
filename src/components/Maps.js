import React from 'react';

const MapComponent = () => {
  return (
    <div>
      <h1>EV chargers map location in UAE</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17444.421480509365!2d55.43510956770232!3d25.28577163505018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f4f3098cf47%3A0xe624ab22b09f95e8!2sAlmohandes%20Car%20Scanner%20diagnostic%20tool!5e0!3m2!1sen!2sae!4v1686095549337!5m2!1sen!2sae"
        title="EV chargers map location in UAE"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
