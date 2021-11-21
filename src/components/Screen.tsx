import { Row, Typography } from "antd";
import { IState } from "../App";

interface IProps {
  state: IState;
}

const Screen = ({
  state: { firstDigit, secondDigit, evaluation, operation },
}: IProps) => {
  return (
    <Row style={{ display: "flex", flexDirection: "column" }} align="bottom">
      <Row justify="space-around" style={{ width: "100%" }}>
        <Typography>{firstDigit}</Typography>
        <Typography>{operation}</Typography>
        <Typography>{secondDigit}</Typography>
        <Typography>{evaluation && "="}</Typography>
        <Typography>{evaluation}</Typography>
      </Row>
    </Row>
  );
};

export default Screen;
