const Input = ({ label, ...restInputProps }) => {
  return (
    <>
      {label ? (
        <label
          htmlFor={restInputProps.id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          {label}
        </label>
      ) : (
        <></>
      )}
      <input
        {...restInputProps}
        className={[
          "shadow-sm h-full text-black rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500",
          restInputProps.className,
        ].join(" ")}
      />
    </>
  );
};

export default Input;
