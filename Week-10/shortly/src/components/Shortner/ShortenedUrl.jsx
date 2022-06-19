const ShortenedUrl = () => {
  return (
    <div className="card w-full bg-neutral text-neutral-content shadow-lg mt-10">
      <div className="card-body items-center text-center flex-row justify-between">
        <div className="full-url">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
          praesentium!
        </div>
        <div className="short-url flex items-center">
          <p className="mr-2 text-green-500">Lorem ipsum dolor sit.</p>
          <button className="btn btn-accent">Copy</button>
        </div>
      </div>
    </div>
  );
};

export default ShortenedUrl;
