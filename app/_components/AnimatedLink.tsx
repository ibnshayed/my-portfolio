type AnimatedLinkProps = {
  title: string;
  uri: string;
};

const AnimatedLink = ({ title, uri }: AnimatedLinkProps) => {
  return (
    <div className="group">
      <a href={uri}>{title}</a>
      <div className="h-1 w-0 bg-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full"></div>
    </div>
  );
};

export default AnimatedLink;
