import { Card, Col, Row } from "antd";
import { useReactive } from "ahooks";
import "antd/dist/antd.css";
import { Screen, Buttons } from "./components";

export interface IState {
  operation: string;
  firstDigit: string;
  secondDigit: string;
  evaluation: string;
}

const App = () => {
  const state = useReactive<IState>({
    operation: "",
    firstDigit: "",
    secondDigit: "",
    evaluation: "",
  });

  return (
    <Row style={{ background: "linear-gradient(to right, #fdc830, #f37335)" }}>
      <Col span={12} offset={6}>
        <Row justify="center" style={{ height: "100vh" }} align="middle">
          <Card title={<Screen state={state} />} style={{ width: 350 }}>
            <Buttons state={state} />
          </Card>
        </Row>
      </Col>
    </Row>
  );
};

export default App;
