import Image from "next/image";
import React from "react";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();

  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

const MovieDetail = async ({ params }) => {
  const { movie } = params;
  const imgPath = "https://image.tmdb.org/t/p/original";

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );

  const res = await data.json();

  return (
    <div>
      <h2 className="text-2xl">{res.title}</h2>
      <h2 className="text-lg">{res.release_date}</h2>
      <h2>Runtime: {res.runtime} minutes</h2>
      <h2 className=" text-sm bg-green-600 inline-block py-2 px-4 my-2 rounded-md">
        {res.status}
      </h2>
      <Image
        src={imgPath + res.backdrop_path}
        alt={res.title}
        className="my-12 w-full"
        height={1000}
        width={1000}
        priority
      />
      <p>{res.overview}</p>
    </div>
  );
};

export default MovieDetail;
