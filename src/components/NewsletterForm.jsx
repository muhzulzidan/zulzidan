import * as React from "react";
import { useRef, useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

const NewsletterForm = ({ title = "Subscribe to the newsletter" }) => {
  const inputEl = useRef(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    const email = inputEl.current.value;

    try {
      const result = await addToMailchimp(email);
      if (result.result === "success") {
        setError(false);
        setSubscribed(true);
        setMessage("Successfully subscribed! 🎉");
      } else {
        throw new Error(result.msg);
      }
    } catch (error) {
      setError(true);
      setSubscribed(false);
      setMessage("Error: " + error.message);
    }

    inputEl.current.value = "";
  };

  return (
    <div className="flex flex-col p-10 py-20 rounded-2xl border-primary-600 border border-solid">
      <h2 className="pb-1 text-gray-100 backdrop-blur">{title}</h2>
      <form className="flex mt-10 flex-col sm:flex-row" onSubmit={subscribe}>
        <div>
          <label className="sr-only" htmlFor="email-input">
            Email address
          </label>
          <input
            autoComplete="email"
            className="rounded-md px-4 py-2 w-full md:w-72 focus:border-transparent focus:outline-none ring-2 ring-white dark:bg-black"
            id="email-input"
            name="email"
            placeholder={
              subscribed ? "You're subscribed! 🎉" : "Enter your email"
            }
            ref={inputEl}
            required
            type="email"
            disabled={subscribed}
          />
        </div>
        <div className="mt-5 flex w-full h-auto rounded-md shadow-sm sm:mt-0 sm:ml-3">
          <button
            className={`w-full h-full rounded-md bg-white py-5 px-4 text-2xl font-medium text-black sm:py-0 ${subscribed
                ? "cursor-default"
                : "hover:bg-primary-700 dark:hover:bg-primary-400"
              } focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black`}
            type="submit"
            disabled={subscribed}
          >
            {subscribed ? "Thank you!" : "Sign up"}
          </button>
        </div>
      </form>
      {error && (
        <div className="w-72 pt-2 text-red-500 dark:text-red-400 sm:w-96">
          {message}
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;

export const BlogNewsletterForm = ({ title }) => (
  <div className="flex items-center justify-center">
    <div className="bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8">
      <NewsletterForm title={title} />
    </div>
  </div>
);
