import Image from "next/image";
import Link from "next/link";
import React from "react";

const Movie = ({ title, release_date, id, poster_path }) => {
  const imgPath = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          src={imgPath + poster_path}
          width={800}
          height={800}
          alt={title}
        />
      </Link>
    </div>
  );
};

export default Movie;
