import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <nav>
        <Link to="saved">Bookmarked</Link>
        <br />
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
