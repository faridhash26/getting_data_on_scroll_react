import React, { useState, useRef, useCallback } from "react";
import { useBookSearch } from "../useBookSearch";

const CardComponentOne = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setpageNumber] = useState(1);
  const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      console.log(node);
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        console.log("aarr ent", entries[0]);
        console.log("all", entries);
        if (entries[0].isIntersecting && hasMore) {
          setpageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
    setpageNumber(1);
  };
  //   console.log(query);

  return (
    <>
      <input type="text" value={query} onChange={handleChange} />
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return (
            <div ref={lastBookElementRef} key={book}>
              {book}
            </div>
          );
        } else {
          return (
            <div ref={lastBookElementRef} key={book}>
              {book}
            </div>
          );
        }
      })}

      {loading && <div>loading....</div>}
      {error && <div>error ....</div>}
    </>
  );
};

export default CardComponentOne;
