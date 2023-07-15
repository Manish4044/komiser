function DependencyGraphSkeleton() {
  return (
    <>
      <div
        data-testid="loading"
        className="min-h-[396px] w-full animate-pulse rounded-lg bg-white px-6 py-4 pb-6"
      >
        <div className="-mx-6 flex items-center justify-between border-b border-black-200/40 px-6 pb-4">
          <div>
            <div className="h-3 w-24 rounded-lg bg-komiser-200/50"></div>
            <div className="mt-2"></div>
            <div className="h-3 w-48 rounded-lg bg-komiser-200/50"></div>
          </div>
          <div className="h-[60px]"></div>
        </div>
        <div className="mt-8"></div>
        <div className="h-screen">{/* TODO - Add Skeleton Grpah */}</div>
        <div className="mt-12"></div>
      </div>
    </>
  );
}

export default DependencyGraphSkeleton;
