export default function JobCardSkeleton() {
  return (
    <div className="flex flex-col gap-4 py-8 px-4 mb-4 rounded-lg shadow-lg bg-white w-[350px] h-[350px]">
      <div className="h-5 bg-gray-300 rounded w-1/4 "></div>
      <div className="h-7 bg-gray-300 rounded w-3/4 animate-pulse"></div>
      <div className="flex flex-col gap-1">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
      </div>
      <div className="h-5 bg-gray-300 rounded w-1/4"></div>
      <div className="flex flex-row justify-between items-center">
        <div className="h-5 bg-gray-300 rounded w-1/4"></div>
        <div className="h-10 bg-gray-300 rounded w-1/4 animate-pulse"></div>
      </div>
    </div>
  );
}
