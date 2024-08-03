export default function JobDetailsSkeleton() {
  return (
    <section className="p-4 my-20">
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <div className="flex flex-col lg:w-3/4 gap-6">
          <div className="bg-white rounded-lg flex flex-col gap-4 pl-4 py-4 shadow-lg animate-pulse">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-8 bg-gray-300 rounded w-1/2"></div>
            <div className="flex text-left text-lg gap-2 items-baseline text-red-600 border-b-slate-200">
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-lg gap-3 pl-4 py-4 shadow-lg animate-pulse">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          </div>
        </div>
        <div className="flex flex-col lg:w-1/4 gap-6">
          <div className="bg-white p-8 flex flex-col gap-4 shadow-lg animate-pulse">
            <div className="h-6 bg-gray-300 rounded w-1/4"></div>
            <div className="h-6 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="flex flex-col">
              <div className="h-6 bg-gray-300 rounded w-1/4"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
            </div>
            <div className="flex flex-col">
              <div className="h-6 bg-gray-300 rounded w-1/4"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
            </div>
          </div>
          <div className="bg-white p-8 flex flex-col gap-4 shadow-lg animate-pulse">
            <div className="h-6 bg-gray-300 rounded w-1/4"></div>
            <div className="h-8 bg-gray-300 rounded w-1/2"></div>
            <div className="h-8 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
