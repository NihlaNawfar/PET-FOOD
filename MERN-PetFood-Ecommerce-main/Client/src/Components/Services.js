import React from 'react';
import { services } from '../Pages/dummyData';

const Services = () => {
  return (
    <section className="services d-flex flex-column align-items-center">
      <img
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fcat-logo&psig=AOvVaw0e0OKYhqVlL7LiALz8GeVA&ust=1732975993552000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKjo_eXcgYoDFQAAAAAdAAAAABAE.png"
        alt=""
      />
      <h1 className="mt-2 mb-5 text-black text-center fw-bolder">
        <span>What your pet needs,</span> when they need it.
      </h1>
      <div className="d-flex justify-content-center align-items-center flex-wrap mt-3 text-black gap-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="services-list d-flex flex-column justify-content-center align-items-center text-center"
          >
            <img src={service.imageUrl} alt="" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
