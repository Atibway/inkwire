import Link from "next/link";

const SuccessPage = () => {
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">🎉 Success!</h1>
        <p className="text-gray-300 mb-6">
          Your subscription was processed successfully! We&apos;re excited to have you onboard.
        </p>
        <Link
        href={"/dashboard"}
        >
        <button
          className="w-full bg-teal-600 hover:bg-teal-500 text-white py-3 px-6 rounded-lg text-lg font-medium transition duration-300"
        >
          Go to Dashboard
        </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
