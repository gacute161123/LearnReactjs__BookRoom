import { Carousel, Col, Collapse, Row, Image  } from "antd";
import "./LearnGrid.css"
import CardItem from "../CardItem";
const {Panel} = Collapse;

function LearnGrid() {

  const list = [
    {
      key: "1",
      label: "Logo 1 là gì ?",
      children: <p>Logo 1 là...</p>,
    },
    {
      key: "2",
      label: "Logo 2 là gì ?",
      children: <p>Logo 2 là...</p>,
    },
    {
      key: "3",
      label: "Logo 3 là gì ?",
      children: <p>Logo 3 là...</p>,
    },
  ];
  return (
    <>
      {/* 5 khoảng cách giữa các cột 10 khoảng cách giữa các hàng
      <Row gutter={[5,10]}>
        cột chia thành 24 : 2/24 4/24 8/24 10/24
        <Col xxl={2} xl={2} lg={3} md={6} sm={12} xs={24}>
          <div className="box">Cột 1</div>
        </Col>
        <Col xxl={4} xl={4} lg={3} md={6} sm={12} xs={24}>
          <div className="box">Cột 2</div>
        </Col>
        <Col xxl={8} xl={8} lg={9} md={6} sm={12} xs={24}>
          <div className="box">Cột 3</div>
        </Col>
        <Col xxl={10} xl={10} lg={9} md={6} sm={12} xs={24}>
          <div className="box">Cột 4</div>
        </Col>
      </Row> */}
      <Row gutter={[20, 20]}>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title="Box1" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title="Box2" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title="Box3" />
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CardItem title="Box4" />
        </Col>
      </Row>
      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <CardItem title="Box5" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box6" style={{ height: "400px" }} />
        </Col>
      </Row>
      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box7" style={{ height: "400px" }} />
        </Col>
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <CardItem title="Box8" style={{ height: "400px" }} />
        </Col>
      </Row>
      <Row gutter={[20, 20]} className="mt-20">
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box9" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box10" style={{ height: "400px" }} />
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CardItem title="Box11" style={{ height: "400px" }} />
        </Col>
      </Row>
      <Carousel autoplay arrows infinite={false}>
        <div className="slider-item">1</div>
        <div className="slider-item">2</div>
        <div className="slider-item">3</div>
        <div className="slider-item">4</div>
      </Carousel>

      {/* Collapse */}
      <Collapse items={list} accordion={true} defaultActiveKey={["1"]} />

      <Image
        width={200}
        src="https://i.pinimg.com/564x/56/1b/64/561b6478c1352784e0cd4c7030e416b4.jpg"
      />
    </>
  );
}
export default LearnGrid;
