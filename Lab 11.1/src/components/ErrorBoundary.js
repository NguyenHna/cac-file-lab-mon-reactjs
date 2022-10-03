//Comp hien thi loi
import error from "./ErrorBoundary.module.css";
function ErrorBoundary() {
  return <div className={error.error}>Something went wrong!</div>;
}

export default ErrorBoundary;
