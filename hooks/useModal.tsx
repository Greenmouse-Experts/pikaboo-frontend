import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";
import Loading from "@/shared/components/Ui/Loading";

interface Props {
  title: string;
  children: any;
  fullScreen?: boolean;
  sideBar?: boolean;
  date?: boolean;
  noclose?: boolean;
  wide?: boolean;
}

const useModal = () => {
  const [showModal, setModal] = useState(false);
  const [modalBusy, setModalBusy] = useState(false);
  

  const setShowModal: boolean | any = (state: boolean) => setModal(state);

  const Modal: React.FC<Props> = ({
    title,
    children,
    fullScreen,
    sideBar,
    date,
    noclose,
    wide,
  }) => {
    return (
      <div>
          <Transition.Root show={showModal} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10 w-full h-screen"
              onClose={() => !noclose && setShowModal(false)}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>
              <div className="fixed inset-0 index-30 overflow-y-auto">
                <div
                  className={
                    sideBar
                      ? "flex justify-end h-screen"
                      : "flex h-screen items-center justify-center p-4 text-center sm:items-center sm:p-0"
                  }
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel
                      className={
                        date
                          ? ""
                          : fullScreen
                          ? "relative transform overflow-hidden overflow-y-hidden lg:max-h-full rounded-lg bg-[#F1F1F1]  px-4 lg:pt-3 pb-4 text-left shadow-xl transition-all sm:my-8 sm:p-6 max-w-full sm:w-full md:max-w-full lg:max-w-full xl:max-w-full sm:max-w-full "
                          : sideBar
                          ? "relative transform overflow-hidden overflow-y-auto lg:max-h-full rounded-lg bg-white lg:px-3 px-4 lg:pt-3 pb-4 text-left shadow-xl transition-all sm:p-6 h-screen w-4/12 side-ani"
                          : wide
                          ? "w-7/12 relative transform overflow-hidden overflow-y-auto  rounded-lg bg-white lg:max-h-02 px-4 lg:pt-3 pb-4 text-left shadow-xl transition-all"
                          : "relative transform overflow-hidden max-h-001 overflow-y-auto lg:max-h-02 rounded-lg bg-white  lg:pt-3 pb-4 text-left shadow-xl transition-all  sm:my-8  sm:p-6 sm:w-full md:max-w-md lg:max-w-lg xl:max-w-xl sm:max-w-sm "
                      }
                    >
                      <div className="w-full">
                        <div
                          className={`relative rounded-lg  ${
                            fullScreen ? "bg-[#F1F1F1]" : " bg-white "
                          }`}
                        >
                          {date ? (
                            ""
                          ) : (
                            <div className="flex items-start justify-between p-4 border-b rounded-t">
                              <h3 className="text-xl font-semibold text-gray-900 ">
                                {title}
                              </h3>
                              {!noclose && (
                                <button
                                  onClick={() => setShowModal(false)}
                                  type="button"
                                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                  data-modal-hide="defaultModal"
                                >
                                  <FaTimes />
                                </button>
                              )}
                            </div>
                          )}
                          {modalBusy && (
                            <div className="absolute w-full h-full justify-center align-top">
                              <Loading />
                            </div>
                          )}
                          <div className={date ? "" : "p-4 space-y-6"}>
                            {children}
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
      </div>
    );
  };

  return { Modal, showModal, setShowModal, setModalBusy };
};

export default useModal;
