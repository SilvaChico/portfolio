export default function Contacts() {
  return (
    <div className="flex space-x-4 mt-3">
      <a
        href="https://github.com/SilvaChico"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-150 ease-in-out transform hover:-translate-y-0.5 hover:brightness-150"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 stroke-slate-400"
          fill="none"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>
      <a
        href="https://linkedin.com/in/silvachicodev"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-150 ease-in-out transform hover:-translate-y-0.5 hover:brightness-150"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          className="stroke-slate-400 w-6 h-6"
          fill="none"
        >
          <title>LinkedIn</title>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>
      <a
        href="mailto:franciscocrosilva@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-150 ease-in-out transform hover:-translate-y-0.5 hover:brightness-150"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 stroke-slate-400"
        >
          <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      </a>
    </div>
  );
}
