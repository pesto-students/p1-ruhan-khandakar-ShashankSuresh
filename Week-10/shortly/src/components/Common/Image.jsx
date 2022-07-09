const Image = (props) => {
  const { src = "", alt = "image", className = "h-[100px] w-[100px]" } = props;
  return <img src={src} alt={alt} className={className} />;
};

export default Image;
