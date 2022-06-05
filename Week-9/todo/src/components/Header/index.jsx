import DarkNoteBookIcon from "assets/icons/notebook-dark.png";

const Header = () => {
  return (
    <div className="flex items-center md:justify-start justify-center">
      <img src={DarkNoteBookIcon} alt="dark_notebook" className="w-14" />
      <p className="pl-2 text-xl uppercase font-Playfair font-bold italic">
        Notebook
      </p>
    </div>
  );
};

export default Header;
