import { Suspense } from "react";

const SuspenseComponent = ({ children }) => (
  <Suspense fallback={<div className="h-72 loading mb-8"></div>}>
    {children}
  </Suspense>
);

export default SuspenseComponent;
