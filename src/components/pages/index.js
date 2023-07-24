import "./index.css";
import { GenerateImageTile } from "../../App";

export function BookmarkedPages({ apiKey }) {
  const getDates = () => {
    const dates = localStorage.getItem("savedDates").split(",");
    return dates.map((date) => {
      return <GenerateImageTile apiKey={apiKey} dateValue={date} />;
    });
  };
  return (
    <>
      <h1>Bookmarked Entries</h1>
      {getDates()}
    </>
  );
}

export function PageNotFound() {
  return (
    <>
      <h1>Page Not Found :(</h1>
    </>
  );
}
