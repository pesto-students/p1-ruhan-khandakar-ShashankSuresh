/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import useAPI from "hooks/useAPI";
import { isUrlValid } from "utils/utils";

const Input = ({ handleSetUrlDetails }) => {
  const [inputUrl, setInputUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const {
    callApi,
    loading,
    data: response,
    error,
  } = useAPI(`https://api.shrtco.de/v2/shorten?url=${inputUrl}`);

  const handleChange = ({ target: { value } }) => {
    setErrorMessage("");
    setInputUrl(value);
  };
  const handleSubmit = async () => {
    const isValid = isUrlValid(inputUrl);
    setErrorMessage("");
    if (!isValid) {
      setErrorMessage("Invalid URL");
      return;
    }
    await callApi();
  };

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
      return;
    }

    if (response) {
      handleSetUrlDetails({
        actualUrl: inputUrl,
        shortUrl: response.result.full_short_link,
      });
      setInputUrl("");
    }
  }, [response, error]);

  return (
    <div className="input-box-bg card w-full bg-neutral text-neutral-content shadow-lg shadow-cyan-800/20 mt-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="card-body items-center text-center flex-col justify-between xs:flex-row">
          <input
            type="text"
            placeholder="Shorten a link here"
            className="input input-bordered w-full"
            onChange={handleChange}
            value={inputUrl}
            disabled={loading}
          />
          <button
            className={`btn ${
              loading ? "loading" : "btn-accent"
            } disabled:text-gray-400 disabled:bg-gray-700 disabled:cursor-not-allowed w-full xs:w-[150px]`}
            disabled={!inputUrl || loading}
            onClick={handleSubmit}
            type="submit"
          >
            Shorten It!
          </button>
        </div>
      </form>
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
