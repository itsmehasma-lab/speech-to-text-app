"use client";

import { useRef, useState } from "react";

export default function Home() {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState("");

  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const startRecording = async () => {
    try {
      const stream =
        await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

      const mediaRecorder =
        new MediaRecorder(stream);

      mediaRecorderRef.current =
        mediaRecorder;

      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        chunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(
          chunksRef.current,
          {
            type: "audio/webm",
          }
        );

        const url =
          URL.createObjectURL(audioBlob);

        setAudioURL(url);
      };

      mediaRecorder.start();

      setRecording(true);

    } catch (error) {
      alert("Microphone access denied");
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <div className="bg-blue-600 text-white p-4 rounded-xl shadow-md">

        <h1 className="text-3xl font-bold">
          Speech-to-Text App
        </h1>

        <p className="mt-2">
          Convert your speech into text
        </p>

      </div>

      <div className="bg-white mt-6 p-6 rounded-xl shadow-md">

        <h2 className="text-2xl font-semibold mb-4">
          Recorder Panel
        </h2>

        <div className="flex gap-4">

          <button
            onClick={startRecording}
            disabled={recording}
            className="bg-green-500 text-white px-5 py-2 rounded-lg"
          >
            Start Recording
          </button>

          <button
            onClick={stopRecording}
            disabled={!recording}
            className="bg-red-500 text-white px-5 py-2 rounded-lg"
          >
            Stop Recording
          </button>

        </div>

      </div>

      <div className="bg-white mt-6 p-6 rounded-xl shadow-md">

        <h2 className="text-2xl font-semibold mb-4">
          Recorded Audio
        </h2>

        {audioURL && (
          <div>

            <audio controls src={audioURL} />

            <br />

            <a
              href={audioURL}
              download="recording.webm"
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Download Recording
            </a>

          </div>
        )}

      </div>

    </main>
  );
}