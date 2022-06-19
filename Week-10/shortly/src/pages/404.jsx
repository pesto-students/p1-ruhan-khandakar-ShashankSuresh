import NotFoundSvg from "assets/not_found.svg";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-white-500">
        <div className="card-body">
          <img src={NotFoundSvg} alt="Not Found" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
