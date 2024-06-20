import { Button, Typography } from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
const { Title } = Typography;
function LearnButton() {
     const [loading, setLoading] = useState(false);
     const handleClick = () => {
       setLoading(true);
       setTimeout(() => {
         const result = {
           code: 200,
           data: [],
         };
         if (result && result.code === 200) {
           setLoading(false);
         }
       }, 3000);
     };
  return (
    <>
      <Button
        type="primary"
        loading={loading}
        onClick={handleClick}
        // danger={loading}
        //disabled={loading}
        href="https://ant.design/components/button"
        // size='middle'
        // shape='round'
      >
        Nội dung
      </Button>

      <Button icon={<PlusOutlined rotate={45} spin={true} />}>Button</Button>

      <Title level={3}>h3. Ant Design</Title>
    </>
  );
}
export default LearnButton;
