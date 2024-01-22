import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <nav>
        <Link to="saved">Bookmarked</Link>
        <br />
        <Link to="/">Home</Link>
        <br/>
        <Link to="/FAQ">FAQ</Link>
      </nav>
    </>
  );
}
