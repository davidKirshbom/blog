import { useState } from "react";
import Input from "./Input";
import SubmitButton, { themes } from "./SubmitButton";
import ErrorMessage from "../common/ErrorMessage";
import { isAsync } from "../../utils/utils";

const OneInputForm = ({ onSubmit, submitText, inputProps }) => {
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
          }
        }
      }
    : onSubmit;
  return (
    <div className="relative w-full">
      <form
        className="grid grid-cols-1 grid-rows-1 h-7 relative "
        onSubmit={handleSubmit}
      >
        <div className=" row-start-1 col-start-1 ">
          <Input
            className="rounded-none"
            name="content"
            placeholder="Add a comment"
            {...inputProps}
          />
        </div>
        <div className="w-14 row-start-1 col-start-1 ml-auto h-full">
          <SubmitButton
            className="py-0 leading-none rounded-none"
            theme={themes.secondary}
            type="submit"
            value={submitText}
          ></SubmitButton>
        </div>
      </form>
      {error ? (
        <ErrorMessage error={error} className="absolute top-1" />
      ) : (
        <></>
      )}
    </div>
  );
};
export default OneInputForm;
//
