import { useEffect, useState } from "react";
import { fetchPicsum } from "../utils";
import { Image } from "./Image";
import { PageNumber } from "./PageNumber";

export const Pinboard = () => {
  //states && variables
  const [page, setPage] = useState();
  const [picArr, setPicArr] = useState([]);
  const pages = [1, 2, 3, 4, 5, 6, 7];
  try {
    useEffect(() => {
      fetchPicsum(page, setPicArr);
    }, [page]);

    return (
      <div>
        <div id="pinboard">
          {picArr.map((pic, index) => (
            <Image url={pic.download_url} key={"image" + index} />
          ))}
        </div>
        <div id="pageSelector">
          {pages.map((pageNum) => (
            <PageNumber
              pageNum={pageNum}
              setPage={setPage}
              key={"pagenum" + pageNum}
            />
          ))}
        </div>
      </div>
    );
  } catch (err) {
    console.log(err.message);
    return <div></div>;
  }
};
