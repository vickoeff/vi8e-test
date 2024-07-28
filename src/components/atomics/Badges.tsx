interface IBadgeProps {
  label: string;
  className?: string;
}

export const Badge = ({ label, className }: IBadgeProps) => {
  return (
    <div className={`p-2 bg-gray-900 w-fit ${className}`}>
      <p className="uppercase text-white text-xs">{label}</p>
    </div>
  )
}