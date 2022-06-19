import { useState } from "react";

import WaveSvg from "assets/wave.svg";

import { isUrlValid } from "utils";
import { getShortenResponse } from "./helpers";

const Input = ({ handleSetUrlDetails }) => {
  const [inputUrl, setInputUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setErrorMessage("");
    setInputUrl(value);
  };
  const handleSubmit = async () => {
    const isValid = isUrlValid(inputUrl);
    if (!isValid) {
      setErrorMessage("Invalid URL");
      return;
    }
    setLoading(true);
    const response = await getShortenResponse(inputUrl);
    if (response.error) {
      setErrorMessage(response.error);
    } else {
      handleSetUrlDetails({
        actualUrl: inputUrl,
        shortUrl: response.url,
      });
      setInputUrl("");
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        background: `linear-gradient(to right, rgba(0,0,0,0.3) , rgba(0,0,0,0.3)),url(${WaveSvg})`,
      }}
      className="card w-full bg-neutral text-neutral-content shadow-lg shadow-cyan-800/20 mt-8"
    >
      <div className="card-body items-center text-center flex-row justify-between">
        <input
          type="text"
          placeholder="Shorten a link here"
          className="input input-bordered w-full"
          onChange={handleChange}
          value={inputUrl}
        />
        <button
          className={`btn ${
            loading ? "loading" : "btn-accent"
          } disabled:text-gray-400 disabled:bg-gray-700 disabled:cursor-not-allowed`}
          disabled={!inputUrl || loading}
          onClick={handleSubmit}
        >
          Shorten It!
        </button>
      </div>
      {errorMessage && (
        <div className="alert alert-error shadow-lg py-0">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{errorMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;
