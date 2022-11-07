import "./index.css";
import { FetchApi } from "../../App";

export function BookmarkedPages({ apiKey }) {
  const getDates = () => {
    const dates = localStorage.getItem("savedDates").split(",");
    return dates.map((date) => {
      return <FetchApi apiKey={apiKey} dateValue={date} />;
    });
  };
  return (
    <>
      <h1>Bookmarked Entries</h1>
      {getDates()}
    </>
  );
}
