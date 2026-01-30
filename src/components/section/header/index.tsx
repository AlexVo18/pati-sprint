const logoImg =
  "https://trysculptique.com/cdn/shop/files/gempages_567005027885909033-610eea12-3864-40f1-b0bb-802237c7296c.png?v=1756727579";

const Header = () => {
  return (
    <div className="p-3 flex items-center justify-center">
      <img src={logoImg} alt="Logo" className="max-w-40" />
    </div>
  );
};

export default Header;
