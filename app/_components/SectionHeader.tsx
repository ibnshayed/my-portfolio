interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="mb-5">
      <p className="text-center text-5xl font-bold uppercase">{title}</p>
      <div className="mt-2 flex items-center justify-center space-x-5">
        <div className="h-px w-60 rounded-2xl bg-gray-200"></div>
        <div className="size-1 rounded-full bg-gray-200 ring-2 ring-gray-200 ring-offset-2"></div>
        <div className="h-px w-60 rounded-2xl bg-gray-200"></div>
      </div>
    </div>
  );
};

export default SectionHeader;
