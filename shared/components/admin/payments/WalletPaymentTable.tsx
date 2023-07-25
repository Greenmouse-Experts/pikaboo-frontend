import React, { FC, useMemo } from 'react'
import Table, { SelectColumnFilter } from '../../Ui/table';
import { FormatStatus, formatAsNgnMoney } from '@/shared/utils/format';
import dayjs from 'dayjs';

interface Props {
  data: PaymentItem[]
}
const WalletPaymentTable:FC<Props> = ({data}) => {
    const columns = useMemo(
        () => [
          {
            Header: "S/N",
            accessor: (row: any, index: number) => index + 1, //RDT provides index by default
          },
          {
            Header: "Payment Reference",
            accessor: "ref_id",
          },
          {
            Header: "Resident",
            accessor: "user.first_name",
            Cell: (row:any) => <p>{`${row.value} ${row.row.original.user.last_name}`}</p>
          },
          {
            Header: "Amount",
            accessor: "amount",
            Cell: (Props:(any)) => formatAsNgnMoney(Props.value)
          },
          {
            Header: "Date",
            accessor: "created_at",
            Cell: (Props:(any)) => dayjs(Props.value).format('DD-MMM-YYYY')
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
    
      const list = useMemo(() => data, [data]);
      return (
        <>
          <div className="lg:p-4 w-full">
            <Table columns={columns} data={list} />
          </div>
        </>
      );
}

export default WalletPaymentTable