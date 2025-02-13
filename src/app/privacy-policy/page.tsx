'use client';
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p className="text-gray-700">
          We only collect Instagram comments data to provide automated responses. 
          This includes comment text and basic user information necessary for replying to comments.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="text-gray-700">
          The data is used solely for providing automated responses to comments on Instagram posts.
          We do not store or share this information with third parties.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this Privacy Policy, please contact us at:
          <br />
          Email: wonseokjung@hotmail.com
        </p>
      </section>
    </div>
  );
} 