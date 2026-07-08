function SkillCard({ icon, name, iconClass }) {
  const Icon = icon;
  return (
    <div className="w-24 h-24 border border-gray-700 rounded-xl flex flex-col items-center justify-center hover:border-blue-500 hover:scale-105 duration-300">
      <Icon className={iconClass} />
      <p className="mt-2 text-sm">{name}</p>
    </div>
  );
}
export default SkillCard;
