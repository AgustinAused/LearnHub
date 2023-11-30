import React, { useState } from 'react';
// Adjust the import path accordingly

import Rating from '@/components/rating/Rating';
import NewComment from '@/actions/NewCommet';

export default function FormsComments({ idService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    opinion: '',
    rating: 0,
    serviceId: idService,
  });

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRatingChange = (value) => {
    setFormData({
      ...formData,
      rating: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await NewComment(formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mx-auto p-4 bg-white rounded-2xl m-12">
      <h2 className="text-2xl font-bold mb-4">Leave a comment</h2>
      <form className="flex flex-col space-y-4">
        <label className="block">
          <span className="text-gray-700 font-semibold">Name:</span>
          <input
            onChange={handleChangeForm}
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border border-gray-300 p-2"
            name="name"
          />
        </label>
        <label className="block">
          <span className="text-gray-700 font-semibold">Email:</span>
          <input
            onChange={handleChangeForm}
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg border border-gray-300 p-2"
            name="email"
          />
        </label>
        <label className="block">
          <span className="text-gray-700 font-semibold">Comment:</span>
          <textarea
            onChange={handleChangeForm}
            placeholder="Your comment"
            className="w-full rounded-lg border border-gray-300 p-2"
            name="opinion"
          ></textarea>
        </label>
        <Rating onChange={handleRatingChange} rated={formData.rating} />
        <button
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}