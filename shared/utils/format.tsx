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
  "flagged": <p className="w-28 text-center py-1 text-red-800 bg-red-100 border border-red-800 rounded">Flagged</p>,
  "pending": <p className="w-28 text-center py-1 text-orange-800 bg-orange-100 border border-orange-800 rounded">Pending</p>,
  "accepted": <p className="w-28 text-center py-1 text-green-800 bg-green-100 border border-green-800 rounded">Accepted</p>,
  "cleared": <p className="w-28 text-center py-1 text-blue-800 bg-blue-100 border border-blue-800 rounded">Cleared</p>,
  "paid": <p className="fw-600 text-primary">Paid</p>,
}
export const formatStatus=  {
  "1": <p className="w-28 text-center py-1 text-green-800 bg-green-100 border border-green-800 rounded">Active</p>,
  "0": <p className="w-28 text-center py-1 text-orange-800 bg-orange-100 border border-orange-800 rounded">Inactive</p>,
}
