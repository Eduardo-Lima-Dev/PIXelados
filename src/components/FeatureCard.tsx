interface FeatureCardProps {
  title: string;
  description: string;
  iconPath: string; // Heroicons 24x24 path
}

export default function FeatureCard({ title, description, iconPath }: FeatureCardProps) {
  return (
    <div className="rounded-xl bg-[#1a2332] p-6 shadow-lg">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
        <svg
          className="h-6 w-6 text-cyan-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
        </svg>
      </div>
      <h4 className="mb-2 text-xl font-semibold text-white">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}