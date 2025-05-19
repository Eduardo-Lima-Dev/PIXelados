import { Skeleton } from '@heroui/skeleton';

export default function LoginLoading() {
  return (
    <div className="min-h-screen bg-[#10141e] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1a2332] rounded-xl p-8">
        {/* Logo Skeleton */}
        <div className="flex justify-center mb-8">
          <Skeleton className="h-12 w-12 rounded-full" />
        </div>

        {/* Title Skeleton */}
        <div className="text-center mb-8">
          <Skeleton className="h-8 w-48 mx-auto mb-2" />
          <Skeleton className="h-4 w-64 mx-auto" />
        </div>

        {/* Form Fields Skeleton */}
        <div className="space-y-4">
          <div>
            <Skeleton className="h-4 w-24 mb-2" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>
          <div>
            <Skeleton className="h-4 w-24 mb-2" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>
        </div>

        {/* Button Skeleton */}
        <div className="mt-8">
          <Skeleton className="h-12 w-full rounded-xl" />
        </div>

        {/* Footer Skeleton */}
        <div className="mt-6 text-center">
          <Skeleton className="h-4 w-48 mx-auto" />
        </div>
      </div>
    </div>
  );
} 