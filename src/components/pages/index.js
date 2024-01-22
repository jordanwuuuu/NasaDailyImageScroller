import "./index.css";
import { GenerateImageTile } from "../../App";
import { NavBar } from "../NavBar";

export function BookmarkedPages({ apiKey }) {
  const getDates = () => {
    const dates = localStorage.getItem("savedDates")?.split(",");
    return dates?.map((date) => {
      return <GenerateImageTile apiKey={apiKey} dateValue={date} />;
    });
  };
  return (
    <>
      <NavBar />
      <h1>Bookmarked Entries</h1>
      {getDates() ? getDates() : <h2> Nothing bookmarked yet</h2>}
    </>
  );
}

export function PageNotFound() {
  return (
    <>
      <NavBar />
      <h1>Page Not Found :(</h1>
    </>
  );
}

export function FAQPage() {
  return (
    <>
      <NavBar />
      <h1> FAQs:</h1>
      <h2>Can I save and download images?</h2>
      <h2>Can I enlarge images?</h2>
      <h2>Can I bookmark images?</h2>
      <h2>Can I search for dates?</h2>
      <h2>What API does this use?</h2>
    </>
  );
}