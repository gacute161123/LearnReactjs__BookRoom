import { useEffect, useState } from "react";
import { getListRoom } from "../../services/roomService";
import { Badge, Button, Card, Col, Row } from "antd";
import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";
function ListRoomGrid(props) {
    const{dataRooms}=props;
    
  return (
    <>
      <Row gutter={[20, 20]}>
        {dataRooms.map((item) => (
          <Col span={12} key={item.id}>
            {/* tạo badge thường và vip ở góc phải giao diện */}
            <Badge.Ribbon
              text={item.typeRoom ? "Vip" : "Thường"}
              color={item.typeRoom ? "red" : "purple"}
            >
              <Card title={item.username}>
                <p>
                  Số giường: <strong>{item.quantityBed}</strong>
                </p>
                <p>
                  Số người: <strong>{item.quantityPeople}</strong>
                </p>
                <p>
                  {item.status === true ? (
                    <Badge color="blue" text="Còn phòng" />
                  ) : (
                    <Badge color="red" text="Hết phòng" />
                  )}
                </p>
              </Card>
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>
    </>
  );
}
export default ListRoomGrid;
