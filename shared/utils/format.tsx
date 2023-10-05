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

export const formatPhoneNum = (value: number | string) => {
  if (!value) return "";
  const val = String(value)
  const fmVal = val.replace(/^./, "+234");
  return fmVal
}

export const parseData = (value:string) => {
  if (!value) return "";
  return JSON.parse(value)
}

export const FormatType =  {
  "1": "Fleet Manager",
  "2": "Field Operator",
  "3": "Waste Manager"
}

export const FormatStatus=  {
  "Active": <p className="w-28 text-center py-1 text-green-800 bg-green-100 border border-green-800 rounded">Active</p>,
  "active": <p className="w-28 text-center py-1 text-green-800 bg-green-100 border border-green-800 rounded">Active</p>,
  "Deactivate": <p className="w-28 text-center py-1 text-orange-800 bg-orange-100 border border-orange-800 rounded">Inactive</p>,
  "Inactive": <p className="w-28 text-center py-1 fw-500 text-orange-800 bg-orange-100 border border-orange-800 rounded">Inactive</p>,
  "Flag": <p className="w-28 text-center py-1 text-red-800 bg-red-100 border border-red-800 rounded">Flagged</p>,
  "pending": <p className="w-28 text-center py-1 text-orange-800 bg-orange-100 border border-orange-800 rounded">Pending</p>,
  "Awaiting": <p className="w-28 text-center py-1 text-pink-800 bg-pink-100 border border-pink-800 rounded">Awaiting</p>,
  "accepted": <p className="w-28 text-center py-1 text-green-800 bg-green-100 border border-green-800 rounded">Accepted</p>,
  "cleared": <p className="w-28 text-center py-1 text-blue-800 bg-blue-100 border border-blue-800 rounded">Cleared</p>,
  "paid": <p className="fw-600 text-primary">Paid</p>,
  "success": <p className="fw-600 text-primary">Paid</p>,
}
export const formatStatus=  {
  "1": <p className="w-28 text-center py-1 text-green-800 bg-green-100 border border-green-800 rounded">Active</p>,
  "0": <p className="w-28 text-center py-1 text-orange-800 bg-orange-100 border border-orange-800 rounded">Inactive</p>,
    "COMPLETED": <p className="w-28 text-center py-1 text-green-800 bg-green-100 border border-green-800 rounded">Completed</p>,
    "ONGOING": <p className="w-28 text-center py-1 text-purple-800 bg-purple-100 border border-purple-800 rounded">Ongoing</p>,
    "PENDING": <p className="w-28 text-center py-1 text-orange-800 bg-orange-100 border border-orange-800 rounded">Pending</p>,
}
export const statusBall = {
  "COMPLETED": <p className="w-7 h-7 circle mx-auto bg-green-600 hover:scale-110 duration-100"></p>,
  "ONGOING": <p className="w-7 h-7 circle mx-auto  bg-purple-600 hover:scale-110 duration-100"></p>,
  "PENDING": <p className="w-7 h-7 circle mx-auto  bg-orange-600 hover:scale-110 duration-100"></p>,
}
