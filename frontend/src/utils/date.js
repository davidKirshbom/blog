const formatDate = (date = new Date()) => {
  if (typeof date === "string") date = new Date(date);
  return date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
};

export { formatDate };
