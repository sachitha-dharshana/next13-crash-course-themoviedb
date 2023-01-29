"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>This aint loading up 😰: {error.message}</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
