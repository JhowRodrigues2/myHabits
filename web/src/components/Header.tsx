type Button = {
  onClick: () => void;
};
const Header = ({ onClick }: Button) => {
  return (
    <header className="flex items-center justify-between p-12 fixed w-full">
      <img src="./src/assets/logo.svg" alt="project logo" />
      <button
        className="gap-3 py-4 leading-4 text-base px-6 bg-transparent font-semibold	 font-sans text-white border border-[#8B5CF6] rounded-lg flex items-center"
        onClick={onClick}
      >
        <img src="./src/assets/icon.svg" alt="" />
        <div>Registrar meu dia</div>
      </button>
    </header>
  );
};

export default Header;
