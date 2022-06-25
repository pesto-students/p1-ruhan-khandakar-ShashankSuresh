import { useState } from "react";

const ShortUrlDetails = ({ urlData: { actualUrl, shortUrl } }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (shortUrl) => {
    navigator.clipboard.writeText(shortUrl);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="card-body items-center text-center flex-col justify-between xs:flex-row">
      <div className="full-url">{actualUrl}</div>
      <div className="short-url flex items-center">
        <a
          className="mr-2 text-green-500"
          href={shortUrl}
          target="_blank"
          rel="noreferrer"
        >
          {shortUrl}
        </a>
        <button
          className="btn btn-accent disabled:text-gray-400 disabled:bg-gray-700 disabled:cursor-not-allowed h-[1.5rem] min-h-[1.5rem] xs:h-[3rem] xs:min-h-[3rem]"
          onClick={() => handleCopy(shortUrl)}
          disabled={isCopied}
        >
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default ShortUrlDetails;
