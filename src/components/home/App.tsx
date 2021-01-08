import React, { ReactElement } from "react";
import "../../assets/css/home/App.css";
import {
  PrimaryButton,
  DangerButton,
  LightButton,
  DarkButton,
} from "../../utils/Button";
import Input from "../../utils/Input";
import Checkbox from "../../utils/Checkbox";
import RadioButton from "../../utils/RadioButton";

const App: React.FC = (): ReactElement => {
  return (
    <div className="App">
      <div
        style={{
          maxWidth: "650px",
          padding: "3px",
          margin: "10px auto",
          background: "linear-gradient(to right, red, purple)",
        }}>
        <div style={{ background: "#FFF", margin: "1px", padding: "10px" }}>
          <h1>Button Components</h1>
          <div>
            <PrimaryButton>Primary</PrimaryButton>
            <DangerButton>Danger</DangerButton>
            <LightButton>Light</LightButton>
            <DarkButton>Dark</DarkButton>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: "650px",
          padding: "3px",
          margin: "10px auto",
          background: "linear-gradient(to right, red, purple)",
        }}>
        <div style={{ background: "#FFF", margin: "1px", padding: "10px" }}>
          <h1>Input Components</h1>
          <div className="input-div">
            <Input placeholder="input element" />
            <Input
              style={{ width: "100%" }}
              placeholder="input with full legth"
            />
            <Input placeholder="disabled input element" disabled />
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: "650px",
          padding: "3px",
          margin: "10px auto",
          background: "linear-gradient(to right, red, purple)",
        }}>
        <div style={{ background: "#FFF", margin: "1px", padding: "10px" }}>
          <h1>Checkbox Components</h1>
          <div>
            <h4>Inline</h4>
            <Checkbox
              checkBoxListType="inline"
              checkboxList={[
                { placeholder: "one", id: 1 },
                { placeholder: "two", id: 2 },
              ]}
              style={{ justifyContent: "center" }}
              name="checkbox-text"
            />
          </div>
          <div>
            <h4>Default</h4>
            <Checkbox
              checkBoxListType="default"
              checkboxList={[
                { placeholder: "one", id: 1 },
                { placeholder: "two", id: 2 },
              ]}
              name="checkbox-text"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: "650px",
          padding: "3px",
          margin: "10px auto",
          background: "linear-gradient(to right, red, purple)",
        }}>
        <div style={{ background: "#FFF", margin: "1px", padding: "10px" }}>
          <h1>RadioButton Components</h1>
          <div>
            <h4>Inline</h4>
            <RadioButton
              radiobuttonType="inline"
              radiobuttonList={[
                { placeholder: "one", id: "inline-1" },
                { placeholder: "inline-2" },
              ]}
              style={{ justifyContent: "center" }}
              name="testing"
            />
          </div>
          <div>
            <h4>Default</h4>
            <RadioButton
              radiobuttonType="default"
              radiobuttonList={[
                { placeholder: "one", id: 1 },
                { placeholder: "two", id: 2 },
              ]}
              name="testing"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
