import { Children } from "react";

import ShortUrlDetails from "./ShortUrlDetails";

const ShortenedUrl = ({ urlDetails }) => {
  return (
    <div className="card w-full bg-neutral text-neutral-content shadow-lg mt-10">
      {Children.toArray(
        urlDetails.map((urlData, index) => (
          <>
            <ShortUrlDetails urlData={urlData} />
            {urlDetails.length !== index + 1 && (
              <div className="divider m-0"></div>
            )}
          </>
        ))
      )}
    </div>
  );
};

export default ShortenedUrl;
