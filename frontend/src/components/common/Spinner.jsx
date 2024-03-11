const Spinner = ({ className, isFullPage }) => {
  return (
    <div
      className={[
        isFullPage
          ? "w-16 h-16 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          : "",
        className || "",
      ].join(" ")}
    >
      <div
        className="inline-block text-neutral-400 h-full w-full animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] dark:text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Spinner;
