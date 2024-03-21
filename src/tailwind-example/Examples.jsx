const exampleOne = (
  <div className="h-full">
    <div className="h-full flex justify-center items-center bg-red-400">
      <div>
        <div className="w-96 rounded-lg bg-white p-5 drop-shadow-2xl">
          <h2 className="text-4xl py-2 text-center">Card(s)</h2>
          <div className="bg-red-600 h-1 mb-2"></div>
          <p>
            Tailwind ist ein Utility-first Framework. Es legt seinen Schwerpunkt
            auf die sogenannten Utility-Klassen und stellt, anders als andere
            Frameworks, keine vorgefertigten Komponenten zur Verfügung.{" "}
          </p>
          <button className="cta-button">Next</button>
        </div>
      </div>
    </div>
  </div>
);

const exampleTwo = (
  <div class="bg-blue-500 text-white p-4 rounded-lg">
    This is an example of a custom Tailwind CSS class.
  </div>
);

const exampleTree = (
  <div class="bg-gray-50 p-6 rounded-lg shadow-md">
    <div class="flex justify-between items-center mb-4">
      <div class="font-bold text-xl">Tailwind CSS</div>
      <div class="text-gray-500">v2.2.19</div>
    </div>

    <p class="text-gray-700">
      Tailwind CSS is a utility-first CSS framework that provides a set of
      pre-built styles for building custom designs. It's designed to be
      developer-friendly, flexible, and easy to use.
    </p>

    <div class="flex items-center justify-between mt-6">
      <a
        href="https://tailwindcss.com/docs"
        class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        Documentation
      </a>
      <a
        href="https://github.com/tailwindcss/tailwindcss"
        class="bg-gray-500 text-blue-500 px-4 py-2 rounded-md hover:bg-gray-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  </div>
);

const Examples = () => {
  return <>{exampleTree}</>;
};

export default Examples;
