interface TechItemProps {
  label: string
  detail: string
  icon: React.ReactNode
}

export default function TechItem({ label, detail, icon }: TechItemProps) {
  return (
    <li className="rounded-xl bg-[#1a2332] p-6 text-center group relative">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative">
        <div className="mb-4 flex justify-center">
          <div className="rounded-xl bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 p-3">
            {icon}
          </div>
        </div>
        <h4 className="mb-2 text-xl font-semibold text-white">{label}</h4>
        <p className="text-gray-400">{detail}</p>
      </div>
    </li>
  )
}