import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <section className="bg-white dark:bg-white-900">
        <div className="mx-auto max-w-screen-md">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Signup
            </h2>
            <p className='text__para text-center'>Please fill in the form to create your account.</p>
          </div>
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
              <input 
                type="text" 
                id="name" 
                className="shadow-sm bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                placeholder="Enter your name" 
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input 
                type="email" 
                id="email" 
                className="shadow-sm bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                placeholder="name@example.com" 
                required 
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
              <input 
                type="password" 
                id="password" 
                className="block p-3 w-full text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                placeholder="Enter your password" 
                required
              />
            </div>
            <button 
              type="submit" 
              className="text-sm font-medium text-center rounded-lg bg-primary-700 w-full sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Signup
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-900 dark:text-gray-300">Already have an account? <Link to="/login" className="text-primary-700 hover:underline">Login here</Link>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
