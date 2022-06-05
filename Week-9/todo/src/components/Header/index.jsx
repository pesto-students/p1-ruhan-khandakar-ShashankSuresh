import DarkNoteBookIcon from "assets/icons/notebook-dark.png";
import Search from "components/Notes/Search";

const Header = () => {
  return (
    <div className="flex items-center justify-between mb-10 flex-col md:flex-row">
      <div className="flex items-center md:justify-start justify-center">
        <img src={DarkNoteBookIcon} alt="dark_notebook" className="w-14" />
        <p className="pl-2 text-xl uppercase font-Playfair font-bold italic">
          Notebook
        </p>
      </div>
      <div className="w-full md:w-1/4">
        <Search />
      </div>
    </div>
  );
};

export default Header;
