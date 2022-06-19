import ShortnerDetails from "components/Shortner/Shortner";
import Input from "components/Shortner/Input";
import ShortenedUrl from "components/Shortner/ShortenedUrl";

const Home = () => {
  return (
    <div className="flex-1 p-5">
      <ShortnerDetails />
      <Input />
      <ShortenedUrl />
    </div>
  );
};

export default Home;
