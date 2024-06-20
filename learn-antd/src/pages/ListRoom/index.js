import { useEffect, useState } from "react"
import { getListRoom } from "../../services/roomService";
import { Badge, Button, Card, Col, Row } from "antd";
import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";
import ListRoomGrid from "./ListRoomGrid";
import ListRoomTable from "./ListRoomTable";

function ListRoom(){
    const [dataRooms,setDataRooms] = useState([]);
    // Hiển thị dưới dạng grid hay ko
    const [isGrid,setIsGrid]=useState(false)
    const fetchApi = async () => {
      const response = await getListRoom();
      setDataRooms(response);
    };
    useEffect(()=>{
        fetchApi();
    },[])

    // load lại trang khi xóa 
    const handleReload=()=>{
      fetchApi();
    }

    return (
      <>
        <Button onClick={() => setIsGrid(false)}>
          <UnorderedListOutlined />
        </Button>
        <Button onClick={() => setIsGrid(true)}>
          <AppstoreOutlined />
        </Button>
        {isGrid ? (
          // Hiển thị dạng lưới
          <>
            <ListRoomGrid dataRooms={dataRooms} />
          </>
        ) : (
          // hiển thị dạng bảng
          <ListRoomTable dataRooms={dataRooms} onReload={handleReload}/>
        )}
      </>
    );
}
export default ListRoom