import { useState } from "react";
import { isAsync } from "../../utils/utils";
import ErrorMessage from "../common/ErrorMessage";

const Form = ({ title, children, onSubmit, onError, ...formProps }) => {
  const [error, setError] = useState(null);

  const handleSubmit = isAsync(onSubmit)
    ? async (e) => {
        if (onSubmit) {
          try {
            await onSubmit(e);
          } catch (err) {
            setError(
              err.response?.data?.message || err.message || "Unknown error"
            );
            onError && onError(err);
          }
        }
      }
    : onSubmit;
  return (
    <>
      {title ? (
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
          {title}
        </h1>
      ) : (
        <></>
      )}
      <form {...formProps} onSubmit={handleSubmit}>
        {children}
      </form>
      <ErrorMessage error={error} />
    </>
  );
};

export default Form;
