export default function Loading() {
    return (
        <div className="min-h-screen pt-32 pb-12 px-4 bg-neutral-50">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header Skeleton */}
                <div className="h-16 w-3/4 max-w-2xl bg-white rounded-2xl animate-pulse mx-auto shadow-sm" />
                <div className="h-6 w-1/2 max-w-lg bg-neutral-200 rounded-full animate-pulse mx-auto" />

                {/* Content Grid Skeleton */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="bg-white rounded-[2rem] p-8 h-80 shadow-sm border border-neutral-100 flex flex-col">
                            <div className="h-40 bg-neutral-100 rounded-2xl mb-6 animate-pulse" />
                            <div className="h-6 w-3/4 bg-neutral-100 rounded-lg mb-4 animate-pulse" />
                            <div className="h-4 w-1/2 bg-neutral-100 rounded-lg animate-pulse" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
