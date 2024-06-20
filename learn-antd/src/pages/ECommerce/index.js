import { Col, Row } from "antd";
import CardItem from "../../components/CardItem";

function Ecommerce() {
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <Row gutter={[20, 20]}>
            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
              <CardItem title="Box 1" style={{ height: "190px" }} />
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
              <CardItem title="Box 2" style={{ height: "190px" }} />
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
              <CardItem title="Box 3" style={{ height: "190px" }} />
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
              <CardItem title="Box 4" style={{ height: "190px" }} />
            </Col>
          </Row>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <CardItem title="Box2" style={{ height: "400px" }} />
        </Col>
      </Row>

      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={16} xl={16} lg={16} md={12} sm={12} xs={12}>
          <CardItem title="Box2" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={12}>
          <CardItem title="Box2" style={{ height: "400px" }} />
        </Col>
      </Row>
      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={12}>
          <CardItem title="Box2" style={{ height: "400px" }} />
        </Col>
        <Col xxl={16} xl={16} lg={16} md={12} sm={12} xs={12}>
          <CardItem title="Box2" style={{ height: "400px" }} />
        </Col>
      </Row>
    </>
  );
}
export default Ecommerce;
