import React, { PropsWithChildren } from "react";
import { Table } from "antd";
import { ColumnType } from "antd/lib/table";

const { Column } = Table;

interface CustomTableProps<T> {
  data: T[];
  columns: ColumnType<T>[];
}

function CustomTable<T>(props: PropsWithChildren<CustomTableProps<T>>) {
  const renderColumns = React.useMemo(() => {
    return props.columns.map((columnProps) => {
      return <Column {...columnProps} />;
    });
  }, [props.columns]);

  return <Table dataSource={props.data as any}>{renderColumns}</Table>;
}

export default CustomTable;
