export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatName = (string: string, number: number) => {
  if (string.length > number - 2) {
    return string.substring(0, number).concat("...");
  } else return string;
};

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const formatAsNgnMoney = (value: number | string) => {
  if (!value) return "";
  return `₦${value
    .toLocaleString("en-US")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};

export const FormatType =  {
  "1": "Fleet Manager",
  "2": "Field Operator",
  "3": "Waste Manager"
}

export const FormatStatus=  {
  "active": <p className="w-28 text-center py-1 text-green-800 bg-green-100 border border-green-800 rounded">Active</p>,
  "inactive": <p className="w-28 text-center py-1 text-orange-800 bg-orange-100 border border-orange-800 rounded">Inactive</p>,
  "suspend": <p className="w-28 text-center py-1 text-red-800 bg-red-100 border border-red-800 rounded">Suspended</p>,
  "banned": <p className="w-28 text-center py-1 text-gray-800 bg-gray-100 border border-gray-800 rounded">Banned</p>,
}
