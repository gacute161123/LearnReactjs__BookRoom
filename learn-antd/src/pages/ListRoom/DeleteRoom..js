import { Button, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { deleteRoom } from "../../services/roomService";
function DeleteRoom(props){
    const { record, onReload } = props;
    const handleDelete=async()=>{
        const response = await deleteRoom(record.id);
         if (response) {
            onReload();
           toast.success("Xóa bản ghi thành công");
         } else {
           toast.error("Lỗi xóa bản ghi");
         }
    }
    return (
      <>
          <Popconfirm title="Sure to delete?" onConfirm={handleDelete}>
            <Button danger size="small" icon={<DeleteOutlined />}></Button>
          </Popconfirm>
      </>
    );
}
export default DeleteRoom