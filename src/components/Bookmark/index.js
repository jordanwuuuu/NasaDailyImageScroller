import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";
import { useState } from "react";

const LOCAL_STORAGE_KEY = "savedDates";

export function Bookmarker({ dateValue }) {
  const [isBookmarked, setBookmarkStatus] = useState(false);
  const saveBookmarkDate = () => {
    if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
      localStorage.setItem(LOCAL_STORAGE_KEY, [
        localStorage.getItem(LOCAL_STORAGE_KEY),
        dateValue,
      ]);
    } else {
      console.log("> New LS set");
      localStorage.setItem(LOCAL_STORAGE_KEY, [dateValue]);
    }
    setBookmarkStatus(true);
  };

  const removeBookmarkDate = () => {
    const dateArray = localStorage.getItem(LOCAL_STORAGE_KEY).split(',');
    const dateIndex = dateArray.indexOf(dateValue);
    const updatedDateArray = dateArray.splice(dateIndex, 1);
    localStorage.setItem(LOCAL_STORAGE_KEY, updatedDateArray);

    setBookmarkStatus(false);
  };

  return (
    <>
      {isBookmarked ? (
        <BsFillBookmarkCheckFill
          className="icon"
          dateValue
          onClick={removeBookmarkDate}
        />
      ) : (
        <BsBookmark className="icon" dateValue onClick={saveBookmarkDate} />
      )}
    </>
  );
}
