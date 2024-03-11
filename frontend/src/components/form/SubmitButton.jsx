const themes = {
  default: "default",
  secondary: "secondary",
};
const themeClasses = {
  [themes.default]:
    "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:!bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ",
  [themes.secondary]:
    "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-700 disabled:!bg-sky-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 h-full",
};
const SubmitButton = ({ theme, children, className, ...restProps }) => {
  return (
    <input
      type="submit"
      className={[
        theme ? themeClasses[theme] : themeClasses.default,
        className,
      ].join(" ")}
      {...restProps}
    ></input>
  );
};

export { themes };
export default SubmitButton;
