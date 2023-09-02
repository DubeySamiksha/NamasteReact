import "./Header.css";

const Header = () => (
  <div className="header-container">
    <img
      src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2535&q=80"
      alt="logo"
      className="image"
    />
    <input
      type="search"
      className="search-input"
      placeholder="Type to search..."
    />
    <img
      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
      alt="user image"
      className="image"
    />
  </div>
);

export default Header;
