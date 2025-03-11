import React from "react";

const Maps = () => {
  return (
    <section className="mapcontainer" id="Maps" data-aos="fade-up">
      <h2 className="title ">Where are we at?</h2>
      <span className="service-name text-center">FIND US</span>
      <div className="map-container">
        <iframe
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60272.3457730475!2d72.92463859004964!3d19.23788991214984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b912081a8deb%3A0xe3da9824136cfa89!2sThane%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1741708572570!5m2!1sen!2sin"
          title="location-map"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Maps;
