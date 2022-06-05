import DarkNoteBookIcon from "assets/icons/notebook-dark.png";

const Header = () => {
  return (
    <div className="flex items-center">
      <img src={DarkNoteBookIcon} alt="dark_notebook" className="w-14" />
      <pn className="pl-2 text-xl uppercase font-Playfair font-bold italic">
        Notebook
      </pn>
    </div>
  );
};

export default Header;
