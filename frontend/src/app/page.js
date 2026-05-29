export default function Home() {
  return (

    <main className="min-h-screen bg-gray-100 p-6">

      {/* Header */}

      <div className="bg-blue-600 text-white p-4 rounded-xl shadow-md">

        <h1 className="text-3xl font-bold">
          Speech-to-Text App
        </h1>

        <p className="mt-2">
          Convert your speech into text
        </p>

      </div>

      {/* Recorder Panel */}

      <div className="bg-white mt-6 p-6 rounded-xl shadow-md">

        <h2 className="text-2xl font-semibold mb-4">
          Recorder Panel
        </h2>

        <div className="flex gap-4">

          <button className="bg-green-500 text-white px-5 py-2 rounded-lg">
            Start Recording
          </button>

          <button className="bg-red-500 text-white px-5 py-2 rounded-lg">
            Stop Recording
          </button>

        </div>

      </div>

      {/* Transcript Panel */}

      <div className="bg-white mt-6 p-6 rounded-xl shadow-md">

        <h2 className="text-2xl font-semibold mb-4">
          Transcript Panel
        </h2>

        <div className="border p-4 rounded-lg min-h-[150px] bg-gray-50">

          Your transcript will appear here...

        </div>

      </div>

    </main>
  );
}