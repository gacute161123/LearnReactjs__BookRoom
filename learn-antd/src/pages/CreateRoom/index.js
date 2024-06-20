import { Button, Checkbox, Form, Input, InputNumber, Select, Switch } from "antd";
import { createRoom } from "../../services/roomService";
import { toast } from "react-toastify";
const { Option } = Select;

function CreateRoom() {
  //Làm reset form
  const [form] =Form.useForm();

    const handleSubmit = async(e)=>{
       const response = await createRoom(e);
        if (response) {
          form.resetFields();
          toast.success("Bạn đã đặt phòng thành công");
        } else {
          toast.error("Xin lỗi, vui lòng đặt lại sau");
        }
    }
    const rules = [
      {
        required: true, // yêu cầu người dùng phải nhập vào
        message: "Không được bỏ trống", // ko nhập show ra message
      },
    ];

  return (
    <>
      <h2>Thêm phòng mới</h2>
      {/* // khi hoàn thành form sẽ chạy vào hàm onFinish */}
      <Form
        form={form}
        layout="vertical"
        name="create-room"
        onFinish={handleSubmit}
      >
        <Form.Item label="Tên phòng" name="username" rules={rules}>
          <Input />
        </Form.Item>
        {/* Số lượng giường */}
        <Form.Item label="Số lượng giường" name="quantityBed" rules={rules}>
          <InputNumber min={1} max={4} />
        </Form.Item>
        {/* Số người tối đa */}
        <Form.Item label="Số người tối đa" name="quantityPeople" rules={rules}>
          <InputNumber min={1} max={8} />
        </Form.Item>
        {/* mô tả cho phòng */}
        <Form.Item label="Mô tả cho phòng" name="description">
          {/* showCount show ra số lượng từ đã nhập maxLength số lượng từ tối đa cho phép nhập  */}
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>

        <Form.Item name="utils" label="Tiện ích">
          <Select
            // cho phép chọn nhiều
            mode="multiple"
            allowClear // cho phép xóa tất cả
            style={{
              width: "100%",
            }}
          >
            <Option value="wifi">wifi</Option>
            <Option value="Nóng lạnh">Nóng lạnh</Option>
            <Option value="Điều hòa">Điều hòa</Option>
          </Select>
        </Form.Item>
        {/* trạng thái */}
        <Form.Item name="status" label="Trạng thái" valuePropName="checked">
          <Switch checkedChildren="Còn phòng" unCheckedChildren="Hết phòng" />
        </Form.Item>
        <Form.Item name="typeRoom" label="Loại phòng" valuePropName="checked">
          <Switch checkedChildren="Vip" unCheckedChildren="Thường" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
export default CreateRoom;
