import SparklesText from "@/components/ui/sparkles-text";

const Benefits = () => {
  return (
    <div className="benefit-cover min-h-[60vh] relative flex items-center justify-center">

      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-900 bg-opacity-50">
        EVERYTHING YOU NEED  TO <span className="text-neutral-500"><SparklesText text="SUCCESS" /></span>{" "} 
        AVAILABLE IN A SINGLE PLATFORM
          
        </h1>
        <p className="mt-4 font-normal text-base text-black max-w-lg text-center mx-auto font-bold">
        Add in your own website. No complex integrations.
        </p>
      </div>

    </div>
  );
};

export default Benefits;
