import Link from 'next/link';
import React, { useMemo } from 'react'
import Table, { SelectColumnFilter } from '../../Ui/table';
import { FormatStatus, formatAsNgnMoney } from '@/shared/utils/format';
import { specialData } from '../../Ui/dummyRes';

const SpecialRequestTable = () => {
    const columns = useMemo(
        () => [
          {
            Header: "S/N",
            accessor: (row: any, index: number) => index + 1, //RDT provides index by default
          },
          {
            Header: "Residence ID",
            accessor: "residence_id",
            Cell: (props: any) => (
              <Link href='/admin/residents/details' className="fw-500 text-primary">{props.value}</Link>
            ),
          },
          {
            Header: "Zone",
            accessor: "zone",
            Filter: SelectColumnFilter,
            filter: "includes",
          },
          {
            Header: "Address",
            accessor: "address",
          },
          {
            Header: "Price",
            accessor: "amount",
            Cell: (props: any) => `${formatAsNgnMoney(props.value)}`,
          },
          {
            Header: "Phone Number",
            accessor: "phone[0]",
          },
          {
            Header: "No of Bin",
            accessor: "no_of_bin",
          },
          {
            Header: "Date Requested",
            accessor: "date_required",
          },
          {
            Header: "Status",
            accessor: "request_status",
            Cell: (props: any) =>
              FormatStatus[props.value as keyof typeof FormatStatus],
          },
        ], // eslint-disable-next-line
        []
      );
    
      const list = useMemo(() => specialData, [specialData]);
      return (
        <>
          <div className="lg:p-4 w-full">
            <Table columns={columns} data={list} />
          </div>
        </>
      );
}

export default SpecialRequestTable