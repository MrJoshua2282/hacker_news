import React from "react";

export default function NewsCard({ newsResults }) {
  return (
    <>
      {newsResults.length
        ? newsResults.map(({ created_at, author, title, url }) => {
            return (
              <li key={created_at + author}>
                <div>{title}</div>
                <div>Author: {author}</div>
                <a href={url} target='_blank' rel='noopener noreferrer'>
                  {url}
                </a>
                <br />
                <span>Created: {created_at}</span>
              </li>
            );
          })
        : null}
    </>
  );
}
