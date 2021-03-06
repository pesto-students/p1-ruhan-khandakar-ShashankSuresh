import { useState, lazy } from "react";

import ShortnerDetails from "components/Shortner/Shortner";
import Input from "components/Shortner/Input";
import SuspenseComponent from "components/Common/SuspenseComponent";
const ShortenedUrl = lazy(() => import("components/Shortner/ShortenedUrl"));

const Home = () => {
  const [urlDetails, setUrlDetails] = useState([]);

  const handleSetUrlDetails = (urlData) => {
    setUrlDetails([urlData, ...urlDetails]);
  };

  return (
    <div className="flex-1 p-5">
      <ShortnerDetails />
      <Input handleSetUrlDetails={handleSetUrlDetails} />
      {!!urlDetails.length && (
        <SuspenseComponent>
          <ShortenedUrl urlDetails={urlDetails} />
        </SuspenseComponent>
      )}
    </div>
  );
};

export default Home;
