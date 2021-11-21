import { Button, Col, Row } from "antd";
import { FunctionComponent } from "react";
import { useReactive } from "ahooks";
import { IState } from "../App";
import { buttons, IButtons } from "../data";

interface IProps {
  state: IState;
}

const Buttons: FunctionComponent<IProps> = ({ state }) => {
  const buttonsState = useReactive({
    operationType: "",
  });

  const evaluationHandler = (operation: string) => {
    switch (operation) {
      case "power":
        state.evaluation = String(
          Math.pow(Number(state.firstDigit), Number(state.secondDigit))
        );
        break;
      case "plus":
        state.evaluation = String(
          Number(state.firstDigit) + Number(state.secondDigit)
        );
        break;
      case "minus":
        state.evaluation = String(
          Number(state.firstDigit) - Number(state.secondDigit)
        );
        break;
      case "multiplicate":
        state.evaluation = String(
          Number(state.firstDigit) * Number(state.secondDigit)
        );
        break;
      case "divide":
        state.evaluation = String(
          Number(state.firstDigit) / Number(state.secondDigit)
        );
        break;

      default:
        break;
    }
  };

  const operationValueHandler: Record<string, string> = {
    multiplicate: "*",
    divide: "/",
    plus: "+",
    minus: "-",
    power: "power",
  };

  const buttonHandler: (item: IButtons) => void = ({ type, title, value }) => {
    switch (type) {
      case "operation":
        if (value && state.firstDigit && !state.evaluation) {
          state.operation = operationValueHandler[value];
          buttonsState.operationType = value;
        }
        break;
      case "equal":
        if (state.secondDigit) {
          evaluationHandler(buttonsState.operationType);
        }
        break;
      case "delete":
        if (!state.evaluation) {
          if (state.secondDigit)
            return (state.secondDigit = state.secondDigit.substring(
              0,
              state.secondDigit.length - 1
            ));
          if (state.operation) {
            state.operation = "";
            return;
          }
          if (state.firstDigit)
            return (state.firstDigit = state.firstDigit.substring(
              0,
              state.firstDigit.length - 1
            ));
        }
        break;
      case "deleteAll":
        state.firstDigit = "";
        state.operation = "";
        state.secondDigit = "";
        state.evaluation = "";
        break;
      case "number":
        if (!state.evaluation) {
          if (
            !state.operation &&
            (!state.firstDigit || state.firstDigit === "0")
          ) {
            state.firstDigit = title as string;
            return;
          } else if (!state.operation) {
            state.firstDigit.length < 6 &&
              (state.firstDigit += title as string);
          } else if (!state.secondDigit || state.secondDigit === "0") {
            state.secondDigit = title as string;
          } else if (state.secondDigit) {
            state.secondDigit.length < 6 &&
              (state.secondDigit = (state.secondDigit + title) as string);
          }
        }
        break;

      default:
        break;
    }
  };

  return (
    <Row justify="space-around">
      {buttons.map((item) => (
        <Col span={7} key={item.key}>
          <Button
            size="large"
            style={{ background: item.color, color: "white" }}
            block
            onClick={() => buttonHandler(item)}
          >
            {item.title}
          </Button>
        </Col>
      ))}
    </Row>
  );
};

export default Buttons;
