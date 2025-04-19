import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface SkeletonLoadingProps {
  height: number | string;
  width: number | string;
  borderRadius: number | string;
  count: number;
  circle: boolean;
  className: string;
}

const SkeletonLoading: React.FC<Partial<SkeletonLoadingProps>> = ({
  height = 200,
  borderRadius = 0,
  count = 1,
  className,
  circle,
  width,
}) => {
  return (
    <Skeleton
      width={width}
      height={height}
      borderRadius={borderRadius}
      className={className}
      circle={circle}
      count={count}
      style={{ width: "100%" }}
      baseColor="#e0e0e0"
      highlightColor="#f5f5f5"
    ></Skeleton>
  );
};

export default SkeletonLoading;
