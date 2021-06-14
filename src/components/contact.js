import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_t8z3if7",
        e.target,
        "user_VX7HQuwTWkbG33nWFe50s"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div>
      <div id="kontakt" className="relative bgContact">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-gray-50 contact-hero sm:py-8 md:py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="contact-text max-w-lg mx-auto">
              <h2 className="text-4xl white font-extrabold  sm:text-3xl">
                Skontaktuj się z nami
              </h2>
              <p className="mt-3 text-4xl white leading-8 text-gray-500">
                Umów się na wycenę już dziś!
              </p>
              <dl className="mt-8 contact-phones text-base text-gray-500">
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex ">
                    {/* Heroicon name: outline/phone */}
                    <svg
                      className="flex-shrink-0 mt-2 h-6 w-6 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div className="flex text-xl  flex-col relative -top-2 pl-2 pb-4">
                      <a className="conLink" href="tel:+48512651541 ">
                        +48 512 651 541
                      </a>
                      <a className="conLink" href="tel:+48790285655">
                        +48 790 285 655
                      </a>
                    </div>{" "}
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex items-center ">
                    {/* Heroicon name: outline/mail */}
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      className=" conLink text-xl ml-2"
                      href="mailto:domszkieletowywaw@gmail.com"
                    >
                      domszkieletowywaw@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white py-4  px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form onSubmit={sendEmail} className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="full_name" className="sr-only">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    id="full_name"
                    autoComplete="name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Imię i nazwisko"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Numer telfonu
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Numer telefonu"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    placeholder="Wiadomość"
                    defaultValue={""}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className=" conLink inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Wyślij
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
