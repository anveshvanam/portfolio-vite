const Contact: React.FC = () => {
  return (
    <section id="contact" className="mt-20">
      <h1 className="text-2xl font-bold text-center mb-5">CONTACT</h1>
      <div className="flex flex-wrap w-full justify-center gap-5 items-center">
        <a className="" target="_blank" href="https://github.com/anveshvanam">
          <svg
            className="w-14 h-14 hover:text-gray-600 rounded-lg p-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 .75a11.25 11.25 0 0 0-3.57 21.94c.56.1.77-.24.77-.54l-.01-1.9c-3.14.68-3.8-1.54-3.8-1.54-.51-1.3-1.24-1.65-1.24-1.65-.99-.68.07-.67.07-.67 1.1.08 1.68 1.1 1.68 1.1.98 1.68 2.58 1.2 3.21.91.1-.7.39-1.2.71-1.47-2.49-.28-5.11-1.25-5.11-5.57 0-1.23.43-2.24 1.1-3.03-.11-.28-.48-1.52.1-3.17 0 0 1-.32 3.3 1.23a11.16 11.16 0 0 1 3.04 0c2.3-1.56 3.3-1.23 3.3-1.23.58 1.65.21 2.89.1 3.17.68.79 1.1 1.8 1.1 3.03 0 4.33-2.62 5.28-5.12 5.55.4.35.76 1.04.76 2.1l-.01 3.13c0 .3.2.64.77.53A11.25 11.25 0 0 0 12 .75z"
            />
          </svg>
        </a>
        <a className="" target="_blank" href="mailto:anveshvanam5@gmail.com">
          <svg
            className="w-14 h-14 hover:text-red-700 rounded-lg p-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M20.5 5.25H3.5C2.67 5.25 2 5.92 2 6.75v10.5c0 .83.67 1.5 1.5 1.5h17c.83 0 1.5-.67 1.5-1.5v-10.5c0-.83-.67-1.5-1.5-1.5zm0 3l-8.5 5.25-8.5-5.25v-1.5l8.5 5.25 8.5-5.25v1.5z"
            />
          </svg>
        </a>
        <a
          className=""
          target="_blank"
          href="https://www.linkedin.com/in/anveshvanam/"
        >
          <svg
            className="w-14 h-14  hover:text-blue-600 rounded-lg p-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M20.47 3H3.53A2.53 2.53 0 0 0 1 5.53v12.94A2.53 2.53 0 0 0 3.53 21h16.94a2.53 2.53 0 0 0 2.53-2.53V5.53A2.53 2.53 0 0 0 20.47 3zM8.47 18.4H5.68V9.44h2.79v8.96zm-1.4-9.97h-.02c-.93 0-1.51-.65-1.51-1.46 0-.84.58-1.46 1.48-1.46s1.51.62 1.53 1.46c0 .81-.61 1.46-1.48 1.46zM19.6 18.4h-2.79v-4.22c0-.99-.35-1.66-1.23-1.66-.67 0-1.07.45-1.25.87-.06.14-.07.34-.07.54v4.47h-2.79s.04-8.45 0-9.34h2.79v1.32c.37-.57 1.03-1.38 2.5-1.38 1.83 0 3.2 1.2 3.2 3.78v5.62z"
            />
          </svg>
        </a>
        <a
          className=""
          target="_blank"
          href="https://www.twitter.com/___anvesh___"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-14 h-14 hover:text-blue-700  rounded-lg p-2"
          >
            <path d="M23.954 4.687a9.47 9.47 0 0 1-2.739.751 4.758 4.758 0 0 0 2.085-2.622 9.513 9.513 0 0 1-3.015 1.148A4.752 4.752 0 0 0 15.578 2c-2.633 0-4.766 2.145-4.766 4.778 0 .374.042.737.124 1.089C7.452 7.593 3.928 5.038 1.6 1.888a4.721 4.721 0 0 0-.643 2.386c0 1.646.832 3.099 2.096 3.948a4.72 4.72 0 0 1-2.156-.59v.058c0 2.301 1.616 4.221 3.757 4.661a4.79 4.79 0 0 1-1.256.167c-.308 0-.607-.03-.9-.085a4.733 4.733 0 0 0 4.422 3.28 9.557 9.557 0 0 1-6.622 2.008c-.432 0-.857-.025-1.278-.077a13.44 13.44 0 0 0 7.282 2.128c8.79 0 13.591-7.23 13.591-13.5 0-.207-.005-.415-.016-.621a9.689 9.689 0 0 0 2.373-2.473l-.002-.004z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Contact;
