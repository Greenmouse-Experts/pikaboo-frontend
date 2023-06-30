import React, { useMemo } from 'react'
import Table, { SelectColumnFilter } from '../../Ui/table';
import { FormatStatus, formatAsNgnMoney } from '@/shared/utils/format';
import { zones } from '../../Ui/dummyRes';

const ZoneInfoTable = () => {
    const columns = useMemo(
        () => [
          {
            Header: "S/N",
            accessor: (row: any, index: number) => index + 1, //RDT provides index by default
          },
          {
            Header: "Zone ID",
            accessor: "zone_id",
            Cell: (Props:any) => <p className='text-primary fw-500'>{Props.value}</p>
          },
          {
            Header: "Zone Name",
            accessor: "name",
          },
          {
            Header: "Location (Coordinates)",
            accessor: "coordinates",
          },
          {
            Header: "No of Residence",
            accessor: "no_of_residence",
          },
          {
            Header: "Date Created",
            accessor: "created_at",
          },
          {
            Header: "Status",
            accessor: "status",
            Cell: (props: any) =>
              FormatStatus[props.value as keyof typeof FormatStatus],
          },
        ], // eslint-disable-next-line
        []
      );
    
      const list = useMemo(() => zones, [zones]);
      return (
        <>
          <div className="lg:p-4 w-full">
            <Table columns={columns} data={list} />
          </div>
        </>
      );
}

export default ZoneInfoTable