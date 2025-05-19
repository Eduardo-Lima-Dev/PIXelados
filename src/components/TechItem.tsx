interface TechItemProps {
  label: string
  detail: string
}

export default function TechItem({ label, detail }: TechItemProps) {
  return (
    <li className="rounded-xl bg-[#1a2332] p-6 text-center">
      <h4 className="mb-2 text-xl font-semibold text-white">{label}</h4>
      <p className="text-gray-400">{detail}</p>
    </li>
  )
}