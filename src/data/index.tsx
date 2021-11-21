import {
  PlusOutlined,
  MinusOutlined,
  UpOutlined,
  LeftOutlined,
} from "@ant-design/icons";

export interface IButtons {
  key: number;
  title: string | React.ReactNode;
  color: string;
  type: "operation" | "number" | "delete" | "equal" | "deleteAll";
  operation?: boolean;
  value?: "power" | "plus" | "minus" | "divide" | "multiplicate";
}

export const buttons: IButtons[] = [
  {
    key: 1,
    title: "AC",
    color: "orange",
    type: "deleteAll",
  },
  {
    key: 2,
    title: <UpOutlined />,
    color: "orange",
    type: "operation",
    operation: true,
    value: "power",
  },
  {
    key: 3,
    title: <LeftOutlined />,
    color: "orange",
    type: "delete",
  },
  {
    key: 4,
    title: "1",
    color: "#3D3D3D",
    type: "number",
  },
  {
    key: 5,
    title: "2",
    color: "#3D3D3D",
    type: "number",
  },
  {
    key: 6,
    title: "3",
    color: "#3D3D3D",
    type: "number",
  },
  {
    key: 7,
    title: "4",
    color: "#3D3D3D",
    type: "number",
  },
  {
    key: 8,
    title: "5",
    color: "#3D3D3D",
    type: "number",
  },
  {
    key: 9,
    title: "6",
    color: "#3D3D3D",
    type: "number",
  },
  {
    key: 10,
    title: "7",
    color: "#3D3D3D",
    type: "number",
  },
  {
    key: 11,
    title: "8",
    color: "#3D3D3D",
    type: "number",
  },
  {
    key: 12,
    title: "9",
    color: "#3D3D3D",
    type: "number",
  },
  {
    key: 13,
    title: <PlusOutlined />,
    color: "orange",
    type: "operation",
    operation: true,
    value: "plus",
  },
  {
    key: 14,
    title: "0",
    color: "#3D3D3D",
    type: "number",
  },
  {
    key: 15,
    title: <MinusOutlined />,
    color: "orange",
    type: "operation",
    operation: true,
    value: "minus",
  },
  {
    key: 16,
    title: "*",
    color: "orange",
    type: "operation",
    operation: true,
    value: "multiplicate",
  },
  {
    key: 17,
    title: "=",
    color: "orange",
    type: "equal",
  },
  {
    key: 18,
    title: "/",
    color: "orange",
    type: "operation",
    operation: true,
    value: "divide",
  },
];
