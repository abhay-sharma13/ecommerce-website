import { propRequiredError } from "../../../error/CustomError";
function Button({ children, tClass, ...props }) {
  const { log, error: errorLog } = console;
  try {
    if (!children) throw new propRequiredError("children");
    if (!tClass) throw new propRequiredError("tClass");
    return <button className={`${tClass} `}>{children}</button>;
  } catch (err) {
    errorLog("Error in Button:", err);
    return null;
  }
}

export default Button;
