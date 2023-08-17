import React, { FC, useState } from "react";
import { IoSend } from "react-icons/io5";
import Button from "../../Ui/Button";
import { MdDelete } from "react-icons/md";
import { useLazyUpdateResisdenceInfoQuery } from "@/services/api/residenceSlice";
import { toast } from "react-toastify";
import { PulseSpinner } from "../../Ui/Loading";

interface Props {
  id: any;
  close: () => void;
  refetch: () => void
}
const EditFacility:FC<Props> = ({id, close, refetch}) => {
  const restype = [
    "Tenement House",
    "One Room Self-contained",
    "A Room and Parlour Self-contained",
    "1-Bedroom Bungalow",
    "2-Bedroom Bungalow",
    "3-Bedroom Bungalow",
    "Bungalow with Boys Quarter",
    "Duplex",
    "Duplex with Boys Quarter",
    "Mansion",
  ];
  const shs = [
    "Residential Areas",
    "Commercial Areas",
    "Market Areas",
    "Shops/stores within the market",
    "Sheds within the market",
  ];
  const com = ["Market", "Hospital", "School", "Hotel", "Warehouse", "Others"];
  const stat = ["Occupied", "Vacant", "Underdeveloped"];
  const includes = ["Public Water Supply", "Private Borehole", "None"];
  const owner = ["Government Building", "Private-Owned Building"];

  const [resHouse, setResHouse] = useState<any>([]);
  const [resSelect, setResSelect] = useState("");
  const [resNo, setResNo] = useState("");
  const [shopStore, setShopStore] = useState<any>([]);
  const [shopSelect, setShopSelect] = useState("");
  const [shopNo, setShopNo] = useState("");
  const [mxd, setmxd] = useState(false);
  const [swg, setSwg] = useState(false);
  const [comm, setComm] = useState('');
  const [status, setStatus] = useState('')
  const [include, setInclude] = useState('') 
  const [owned, setOwned] = useState('')

  const addHouse = () => {
    const exists = resHouse.some((item: any) => item.name === resSelect);
    if (resSelect && resNo && !exists) {
      const payload = {
        name: resSelect,
        no: resNo,
      };
      setResHouse([...resHouse, payload]);
      setResNo("");
      setResSelect("");
    }
  };
  const removeHouse = (item: any) => {
    const arr = [...resHouse];
    const filtered = arr.filter((where: any) => where.name !== item);
    setResHouse(filtered);
  };
  const addShop = () => {
    const exists = shopStore.some((item: any) => item.name === shopSelect);
    if (shopSelect && shopNo && !exists) {
      const payload = {
        name: shopSelect,
        no: shopNo,
      };
      setShopStore([...shopStore, payload]);
      setShopNo("");
      setShopSelect("");
    }
  };
  const removeShop = (item: any) => {
    const arr = [...shopStore];
    const filtered = arr.filter((where: any) => where.name !== item);
    setShopStore(filtered);
  };
  const [isBusy, setIsBusy] = useState(false)
  const [update] = useLazyUpdateResisdenceInfoQuery()
  const handleSubmit = async(e:any) => {
    e.preventDefault()
    const payload = {
        user_id:id,
        // residential: resHouse,
        // shop_stores: shopStore,
        residential_facility: mxd,
        facility_include: swg,
        commercial_facility: comm,
        water_supply: include,
        completion_status: status,
        classification: owned
    }
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value as any);
    })
    formData.append('residential', JSON.stringify(resHouse))
    formData.append('shop_stores', JSON.stringify(shopStore))
    setIsBusy(true);
      await update(formData)
        .then((res: any) => {
          if (res.data.success) {
            toast.success(res.data.message);
            setIsBusy(false);
            refetch()
            close()
          } else {
            Object.entries<any>(res?.data?.errors).forEach(([key, value]) => {
              toast.error(value[0]);
            });
            setIsBusy(false);
          }
        })
        .catch((err) => {
          toast.error(err?.error?.data.message);
          setIsBusy(false);
        });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="max-h-[400px] overflow-y-auto pr-4">
        <div>
          <label className="fw-600">RESIDENTIAL</label>
          <div className="grid">
            <div>
              <div className="lg:flex items-end mt-2 gap-x-3">
                <div className="lg:w-6/12">
                  <label className="block">Select Resident Type</label>
                  <select
                    className="p-[10px] w-full border border-gray-200 rounded"
                    value={resSelect}
                    onChange={(e) => setResSelect(e.target.value)}
                  >
                    <option></option>
                    {restype &&
                      restype.map((item, i) => <option key={i}>{item}</option>)}
                  </select>
                </div>
                <div className="lg:w-3/12 mt-3 lg:mt-0">
                  <label className="block">No of Selected</label>
                  <input
                    type="number"
                    min={0}
                    max={10}
                    value={resNo}
                    onChange={(e) => setResNo(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <p
                  onClick={addHouse}
                  className="px-4 py-2 mt-3 lg:mt-0 text-center cursor-pointer rounded-lg bg-primary text-white fw-500"
                >
                  Add Info
                </p>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 mt-5 gap-2">
            {resHouse &&
              resHouse.map((item: any, i: number) => (
                <p className="flex bg-blue-100 p-2  fs-500 rounded-lg gap-x-2 items-center">
                  <span className="fw-600 text-lg bg-white w-8 h-8 circle place-center">
                    {item.no}
                  </span>
                  {item.name}
                  <MdDelete
                    className="text-red-500 text-xl cursor-pointer"
                    onClick={() => removeHouse(item.name)}
                  />
                </p>
              ))}
          </div>
        </div>
        <div className="mt-3">
          <label className="fw-600">SHOPS & STORES</label>
          <div className="grid">
            <div>
              <div className="lg:flex items-end mt-2 gap-x-3">
                <div className="lg:w-6/12">
                  <label className="block">Select Store Type</label>
                  <select
                    className="p-[10px] w-full border border-gray-200 rounded"
                    value={shopSelect}
                    onChange={(e) => setShopSelect(e.target.value)}
                  >
                    <option></option>
                    {shs &&
                      shs.map((item, i) => <option key={i}>{item}</option>)}
                  </select>
                </div>
                <div className="lg:w-3/12 mt-3 lg:mt-0">
                  <label className="block">No of Selected</label>
                  <input
                    type="number"
                    min={0}
                    max={10}
                    value={shopNo}
                    onChange={(e) => setShopNo(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <p
                  onClick={addShop}
                  className="px-4 py-2 mt-3 lg:mt-0 text-center cursor-pointer rounded-lg bg-primary text-white fw-500"
                >
                  Add Info
                </p>
              </div>
            </div>
          </div>
          <div
            className={`grid lg:grid-cols-3 mt-5 gap-2 ${
              !!shopStore.length && "border-b pb-2"
            }`}
          >
            {shopStore &&
              shopStore.map((item: any, i: number) => (
                <p
                  className="flex bg-blue-100 p-2  fs-500 rounded-lg gap-x-2 items-center"
                  key={i}
                >
                  <span className="fw-600 text-lg bg-white w-8 h-8 circle place-center">
                    {item.no}
                  </span>
                  {item.name}
                  <MdDelete
                    className="text-red-500 text-xl cursor-pointer"
                    onClick={() => removeShop(item.name)}
                  />
                </p>
              ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 items-center gap-4 mt-3 lg:mt-5">
          <div className="flex items-center gap-x-3">
            <input type="checkbox" className="w-6 h-6" onChange={() => setmxd(!mxd)}/>
            <label className="fw-500 uppercase">
              MIXED RESIDENTIAL & PRODUCTION FACILITY
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input type="checkbox" className="w-6 h-6" onChange={() => setSwg(!swg)}/>
            <label className="fw-500 uppercase">
              FACILITY INCLUDE SEWAGE SYSTEM{" "}
            </label>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 items-center gap-4 mt-3 lg:mt-5">
          <div>
            <label className="fw-500 uppercase">
              COMMERCIAL (Purpose-built Facility)
            </label>
            <select
              className="p-[10px] w-full border border-gray-200 rounded"
              value={comm}
              onChange={(e) => setComm(e.target.value)}
            >
              <option></option>
              {com && com.map((item, i) => <option key={i}>{item}</option>)}
            </select>
          </div>
          <div>
            <label className="fw-500 uppercase">WATER SUPPLY</label>
            <select
              className="p-[10px] w-full border border-gray-200 rounded"
              value={include}
              onChange={(e) => setInclude(e.target.value)}
            >
              <option></option>
              {includes &&
                includes.map((item, i) => <option key={i}>{item}</option>)}
            </select>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 items-center gap-4 mt-3 lg:mt-5">
          <div>
            <label className="fw-500 uppercase">
              Building Completion status{" "}
            </label>
            <select
              className="p-[10px] w-full border border-gray-200 rounded"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option></option>
              {stat && stat.map((item, i) => <option key={i}>{item}</option>)}
            </select>
          </div>
          <div>
            <label className="fw-500 uppercase">Select Owner Class</label>
            <select
              className="p-[10px] w-full border border-gray-200 rounded"
              value={owned}
              onChange={(e) => setOwned(e.target.value)}
            >
              <option></option>
              {owner && owner.map((item, i) => <option key={i}>{item}</option>)}
            </select>
          </div>
        </div>
        </div>
        <div className="pt-6">
            <Button
              title={
                isBusy ? <PulseSpinner size={13} color="white" /> : "Update Resisdence Facility Information"
              }
            />
        </div>
      </form>
    </>
  );
};

export default EditFacility;
