import { Link } from 'react-router-dom'; // Import Link from React Router

const Login = () => {
  return (
    <div>
      <section className="bg-white dark:bg-white-900">
        <div className="mx-auto max-w-screen-md">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>
              Login
            </h2>
            <p className='text__para text-center'>Please enter your email and password to login.</p>
          </div>
          <form action="#" className="space-y-8">
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
              Login
            </button>
            {/* Link to Signup page */}
            <div className="text-center mt-4">
              <span className="text-sm text-gray-700 dark:text-gray-400">Don't have an account?</span>
              <Link to="/signup" className="ml-1 text-sm font-medium text-primary-700 dark:text-primary-300 hover:underline">Sign up here</Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
