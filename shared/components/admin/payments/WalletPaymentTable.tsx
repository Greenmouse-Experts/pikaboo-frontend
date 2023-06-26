import React, { useMemo } from 'react'
import Table, { SelectColumnFilter } from '../../Ui/table';
import { FormatStatus, formatAsNgnMoney } from '@/shared/utils/format';
import { payments } from '../../Ui/dummyRes';

const WalletPaymentTable = () => {
    const columns = useMemo(
        () => [
          {
            Header: "S/N",
            accessor: (row: any, index: number) => index + 1, //RDT provides index by default
          },
          {
            Header: "Payment Reference",
            accessor: "reference",
          },
          {
            Header: "Resident",
            accessor: "name",
          },
          {
            Header: "Amount",
            accessor: "amount",
            Cell: (Props:(any)) => formatAsNgnMoney(Props.value)
          },
          {
            Header: "Date",
            accessor: "date",
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
    
      const list = useMemo(() => payments, [payments]);
      return (
        <>
          <div className="lg:p-4 w-full">
            <Table columns={columns} data={list} />
          </div>
        </>
      );
}

export default WalletPaymentTable