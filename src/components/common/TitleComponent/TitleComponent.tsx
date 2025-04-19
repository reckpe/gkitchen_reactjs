const TitleComponent = ({ title }: { title: String }) => {
  return (
    <div className="flex items-center">
      <div className="line mr-3 w-2 h-8 bg-primary"></div>
      <p className="title text-white text-2xl font-bold">{title}</p>
    </div>
  );
};

export default TitleComponent;
