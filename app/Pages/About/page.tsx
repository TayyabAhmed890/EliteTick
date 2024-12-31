import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">About Elite Tick Store</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Welcome to Elite Tick Store, your trusted platform for premium watches. We specialize in offering a curated selection of luxury and affordable timepieces to suit every style and occasion. Our mission is to bring timeless elegance and functionality to your wrist.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Whether you're seeking a statement piece or a classic everyday watch, Elite Tick Store ensures you find exactly what you need. With a user-friendly platform and exceptional customer service, we aim to make your shopping experience seamless and enjoyable.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Thank you for choosing Elite Tick Store. Let us help you find the perfect watch to complement your style and create lasting impressions.
          </p>
        </div>
        <div className="flex justify-center bg-gray-50 p-4">
          <img
            src="https://images.unsplash.com/photo-1708647585543-bee62dc16136?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Elite Tick Store Banner"
            className="rounded-lg shadow-lg w-full max-w-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
