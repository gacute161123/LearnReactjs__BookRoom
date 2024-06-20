import { Badge, Table } from "antd";
import DeleteRoom from "./DeleteRoom.";

function ListRoomTable(props) {
  const { dataRooms, onReload } = props;
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên phòng",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Số giường",
      dataIndex: "quantityBed",
      key: "quantityBed",
    },
    {
      title: "Số người",
      dataIndex: "quantityPeople",
      key: "quantityPeople",
    },
    {
      title: "Loại phòng",
      dataIndex: "typeRoom",
      key: "typeRoom",
      render: (_, record) => {
        // record trả về từng bản ghi
        return (
          <>
            {record.typeRoom ? (
              <>
                <Badge color="red" text="Vip" />
              </>
            ) : (
              <Badge color="purple" text="Thường" />
            )}
          </>
        );
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (_, record) => {
        // record trả về từng bản ghi
        return (
          <>
            {record.status ? (
              <>
                <Badge color="blue" text="Còn phòng" />
              </>
            ) : (
              <Badge color="red" text="Hết phòng" />
            )}
          </>
        );
      },
    },
    {
      title: "Hành động",
      key: "actions",
      render: (_, record) => {
        // record trả về từng bản ghi
        return (
          <>
            <DeleteRoom record={record} onReload={onReload} />
          </>
        );
      },
    },
  ];
  return (
    <>
        {/* rowKey mỗi bản ghi có 1 key duy nhất thì truyền tên bản ghi */}
      <Table rowKey="id" dataSource={dataRooms} columns={columns} />;
    </>
  );
}
export default ListRoomTable