import { cn } from "@/common/utils/cn";
import { PropsWithChildren } from "react";
import SectionHeader from "./SectionHeader";

interface SectionWrapperProps extends PropsWithChildren {
  id: string;
  title: string;
  isBgPrimary?: boolean;
}

const SectionWrapper = ({
  id,
  title,
  isBgPrimary,
  children,
}: SectionWrapperProps) => {
  return (
    <div
      id={id}
      className={cn(
        "bg-gradient-to-r from-gray-900 to-black py-20 text-white",
        {
          "bg-blue-50": isBgPrimary,
        },
      )}
    >
      <div className="mx-auto w-3/4">
        <SectionHeader title={title} />
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;
