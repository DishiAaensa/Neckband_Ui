import React from "react";

function LandingPage() {
  // const handleLogout = () => {
  //   localStorage.removeItem("authenticated");
  //   window.location.reload();
  // };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to Animal Neckband</h1>
      <p className="text-lg mb-8">
        Explore the functionalities of animal tracking and monitoring.
      </p>
      <button
        // onClick={handleLogout}
        className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}

export default LandingPage;
