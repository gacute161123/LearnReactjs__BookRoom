import { Button, Checkbox, Col, Input, Radio, Row, Select, Space } from "antd";
import { useState } from "react";
import { DatePicker } from "antd";
import { bookRoom } from "../../services/bookRoomService";
import { toast } from "react-toastify";

const { RangePicker } = DatePicker;
function BookRoom() {
    const [data,setData] =useState({
        time:"07 giờ",
    });

    // xử lý input
    const handleChangeInput =(e)=>{
        const object={
            ...data,
            [e.target.name]:e.target.value
        }
        setData(object);
    }
  
    // xử lý check box
    const handleChangeCheckbox=(e)=>{
       const object = {
         ...data,
         services:e,
       };
       setData(object)
    }
    //xử lý data Picker
    const handleChangeDate = (dates,dateStrings) => {
    const object = {
      ...data,
      date: dateStrings,
    };
     setData(object);
    };
    // xử lý radio
    const handleChangeRadio=(e)=>{
       const object = {
         ...data,
         [e.target.name]: e.target.value,
       };
       setData(object);
    }
    // xử lý select chọn giờ vào phòng
    const optionsTime=[
    ]
    for(let i=1;i<=24;i++){
      optionsTime.push({
        value: i > 9 ? `${i} giờ` : `0${i} giờ`,
        label: i > 9 ? `${i} giờ` : `0${i} giờ`,
      });
    }
    const handleChangeSelect=(e)=>{
        const object = {
          ...data,
          time: e,
        };
        setData(object);
    }

      const handleSubmit = async(e) => {
          e.preventDefault();
        const response = await bookRoom(data);
        if(response){
           toast.success("Bạn đã đặt phòng thành công")
        }
        else{
            toast.error("Xin lỗi, vui lòng đặt lại sau");
        }
        console.log(response);
      
      };
  return (
    <>
      {/* input */}
      <h2>Đặt phòng</h2>
      <Row gutter={[20, 20]}>
        <Col sm={24}>
          <p>Họ tên</p>
          <Input
            name="fullName"
            placeholder="VD: Trần Ngọc Tiến"
            onChange={handleChangeInput}
          />
        </Col>
        <Col sm={12}>
          <p>Số điện thoại</p>
          <Input
            name="phone"
            placeholder="VD: 0983962340"
            onChange={handleChangeInput}
          />
        </Col>
        <Col sm={12}>
          <p>Email</p>
          <Input
            name="email"
            placeholder="VD: tranngoctien161123@gmail.com"
            onChange={handleChangeInput}
          />
        </Col>

        {/* CheckBox */}
        <Col span={12}>
          <p>Dịch vụ thêm </p>
          <Checkbox.Group onChange={handleChangeCheckbox}>
            <Space direction="vertical">
              <Checkbox value="Thuê xe máy">Thuê xe máy</Checkbox>
              <Checkbox value="Thuê ô tô 4 chỗ">Thuê ô tô 4 chỗ</Checkbox>
              <Checkbox value="Thuê ô tô 47chỗ">Thuê ô tô 7 chỗ</Checkbox>
              <Checkbox value="Thuê ô tô 16 chỗ">Thuê ô tô 16 chỗ</Checkbox>
            </Space>
          </Checkbox.Group>
        </Col>

        {/* Radio */}
        <Col span={12}>
          <p>Quà tặng</p>
          <Radio.Group
            name="gift"
            defaultValue="Áo thun"
            onChange={handleChangeRadio}
          >
            <Space direction="vertical">
              <Radio value="Áo thun">Áo thun</Radio>
              <Radio value="Mũ phớt">Mũ phớt</Radio>
              <Radio value="Kem chống nắng">Kem chống nắng</Radio>
            </Space>
          </Radio.Group>
        </Col>

        {/* DataPicker */}
        <Col span={12}>
          <p>Chọn ngày</p>
          <RangePicker
            format="DD/MM/YYYY"
            onChange={handleChangeDate}
            placeholder={["Ngày nhận phòng", "Ngày trả phòng"]}
          />
        </Col>

        {/* select */}
        <Col span={12}>
          <p>Giờ nhận phòng</p>
          <Select
            defaultValue={data.time}
            style={{
              width: "50%",
            }}
            options={optionsTime}
            onChange={handleChangeSelect}
          />
        </Col>

        <Col sm={24}>
          <Button format="DD/MM/YYYY" type="primary" onClick={handleSubmit}>
            Đặt phòng
          </Button>
        </Col>
      </Row>
    </>
  );
}
export default BookRoom;
