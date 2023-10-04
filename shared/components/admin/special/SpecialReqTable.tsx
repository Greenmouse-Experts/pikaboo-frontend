import React, { FC, useMemo } from 'react'
import Link from 'next/link';
import Table, { SelectColumnFilter } from '../../Ui/table';
import { FormatStatus, formatAsNgnMoney, formatStatus } from '@/shared/utils/format';
import { specialData } from '../../Ui/dummyRes';

interface Props {
  data: any;
  refetch: () => void
}
const SpecialRequestTable:FC<Props> = ({data, refetch}) => {
    const columns = useMemo(
        () => [
          {
            Header: "S/N",
            accessor: (row: any, index: number) => index + 1, //RDT provides index by default
          },
          {
            Header: "Residence ID",
            accessor: "home_residence.pikaboo_id",
            Cell: (row: any) => (
              <Link href={{
                pathname: `/admin/residents/details`,
                query: {
                  sort: row.row.original.home_residence.id,
                }}} className="fw-500 text-primary">{row.value}</Link>
            ),
          },
          {
            Header: "Zone",
            accessor: "home_residence.zone.name",
            Filter: SelectColumnFilter,
            filter: "includes",
          },
          {
            Header: "Address",
            accessor: "alt_address",
            Cell: (row) => row?.value? row.value : row.row.original.home_residence.address
          },
          {
            Header: "Phone Number",
            accessor: "home_residence.phone",
          },
          {
            Header: "Date Requested",
            accessor: "schedule_date",
          },
          {
            Header: "Status",
            accessor: "status",
            Cell: (props: any) =>
              formatStatus[props.value as keyof typeof formatStatus],
          },
        ], // eslint-disable-next-line
        []
      );
    
      const list = useMemo(() => data, [data]);
      return (
        <>
          <div className="lg:p-4 w-full">
            <Table columns={columns} data={list} />
          </div>
        </>
      );
}

export default SpecialRequestTable