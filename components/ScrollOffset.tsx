interface ScrollOffsetProps {
  id: string;
}

const ScrollOffset: React.FC<ScrollOffsetProps> = ({ id }) => {
  return (
    <span
      id={id}
      className="relative -top-24 inline-block"
      style={{ height: 0, width: 0 }}
    ></span>
  );
};

export default ScrollOffset;
