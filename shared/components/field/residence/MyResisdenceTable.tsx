import React, { FC, useMemo, useState } from "react";
import Table, { SelectColumnFilter } from "../../Ui/table";
import { FormatStatus } from "@/shared/utils/format";
import Link from "next/link";
import { FiDownloadCloud } from "react-icons/fi";
import jsPDF from "jspdf";
import QRCode from "qrcode.react";
import { UserData } from "@/shared/utils/types/auth";
import useModal from "@/hooks/useModal";

interface Props {
  data: any;
  type?: string;
}
const MyResidentTable: FC<Props> = ({ data, type }) => {
  const [value, setValue] = useState("");
  const [valueId, setValueId] = useState("");
  const { Modal, setShowModal } = useModal();
  const generatePDF = () => {
    const pid = valueId;
    const doc = new jsPDF();
    const canvas: HTMLCanvasElement | null = document.querySelector("canvas");

    if (canvas) {
      const qrCodeDataURL = canvas.toDataURL("image/png");
      doc.addImage(qrCodeDataURL, "PNG", 30, 30, 80, 80); // Add QR code image
      doc.setFontSize(25);
      doc.text(pid, 28, 122);
      doc.save("qrcode.pdf");
      setShowModal(false);
    }
  };
  const showDownload = (item: UserData) => {
    setValueId(item.pikaboo_id);
    setValue(
      `https://admin.mypikaboo.com/field/residents/details?sort=${item.id}`
    );
    setShowModal(true);
  };
  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: (row: any, index: number) => index + 1, //RDT provides index by default
      },
      {
        Header: "Resident's ID",
        accessor: "pikaboo_id",
        Cell: (row: any) => (
          <Link
            href={{
              pathname:
                type === "waste"
                  ? `/waste/residents/details`
                  : `/field/residents/details`,
              query: {
                sort: row.row.original.id,
              },
            }}
            className="fw-500 text-primary"
          >
            {row.value}
          </Link>
        ),
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Name",
        accessor: "first_name",
        Cell: (row: any) =>
          row.value &&
          `${row.row.original.title} ${row.value} ${row.row.original.last_name}`,
      },
      {
        Header: "Phone Number",
        accessor: "phone",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "FO Incharge",
        accessor: "created_by_who.pikaboo_id",
        Cell: (row: any) =>
          row.row.original.created_by_who.first_name
            ? `${row.row.original.created_by_who.first_name} ${row.row.original.created_by_who.last_name}`
            : `${row.row.original.created_by_who.pikaboo_id}`,
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: (props: any) =>
          FormatStatus[props.value as keyof typeof FormatStatus],
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "QR Code",
        accessor: "id",
        Cell: (row: any) => (
          <>
            <p
              onClick={() => showDownload(row.row.original)}
              className="flex gap-x-1 text-primary fw-600 items-center cursor-pointer"
            >
              <FiDownloadCloud />
              Download
            </p>
          </>
        ),
      },
    ], // eslint-disable-next-line
    []
  );

  const list = useMemo(() => data?.data, [data]);
  return (
    <>
      {data && !!data.data && (
        <div className="lg:p-4 w-full">
          <Table columns={columns} data={list} />
        </div>
      )}

      <Modal title="" noHead>
        <div id="canvas" className="flex justify-center">
          <div>
            <p className="text-primary fw-600">{valueId}</p>
            <QRCode
              size={86}
              style={{
                height: "auto",
                maxWidth: "100%",
                width: "100%",
              }}
              value={value}
            />
            <button
              className="mt-2 underline text-primary fw-500"
              onClick={generatePDF}
            >
              Download
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MyResidentTable;
