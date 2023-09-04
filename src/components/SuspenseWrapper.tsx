import { Suspense } from "react";
import LoadingFallback from "./LoadingFallback";

type SuspenseWrapperProps = {
  component: React.LazyExoticComponent<React.FC>;
};

export const SuspenseWrapper: React.FC<SuspenseWrapperProps> = ({
  component: LazyComponent,
}) => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <LazyComponent />
    </Suspense>
  );
};
