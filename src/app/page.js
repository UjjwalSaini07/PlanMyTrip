import React from 'react';
import Header from "../components/common/Header";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-black">
        <h1 className="text-3xl font-bold text-center text-white">
          Welcome to My Plan My Trip App
        </h1>
      </div>
    </div>
  );
}
