import React, { useState } from "react";
import { Button, Dialog, InputText, Card } from "../../primeReact";
import pic from "../../assets/log-image.jpg";
function SignupForm() {
  const [sign, setSign] = useState(false);
  const imageStyle = {
    borderRadius: "5%",
  };

  return (
    <div className="font-link">
      <div className="font-link" style={{ overflow: "hidden" }}>
        <Button
          label="Sign Up"
          severity="secondary"
          text
          style={{ fontSize: "0.75rem", color: "white" }}
          onClick={() => setSign(true)}
        />
        <Dialog
          visible={sign}
          modal
          style={{ width: "60%", height: "100%", paddingBottom: "0px" }}
          onHide={() => setSign(false)}
        >
          <div
            className="m-0"
            style={{
              position: "relative",
              left: '24px'
            }}
          >
            <div>
              <img
                src={pic}
                width="350"
                height="400"
                style={imageStyle}
                alt="Logo"
              />
            </div>
            <Card
              title="Register Please"
              className="font-link"
              style={{
                position: "absolute",
                top: '22px',
                right: '85px',
                width: "50%",
                height: "100%"
              }}
            >
              <div className="font-link">
                <label htmlFor="username">Username</label>
                <br></br>
                <InputText
                  className="p-inputtext-sm"
                  id="username"
                  type="text"
                  aria-describedby="username-help"
                  style={{ width:"100%" }}
                />
              </div>
              <div className="font-link">
                <label htmlFor="email">Email</label>
                <br></br>
                <InputText
                  className="p-inputtext-sm"
                  id="email"
                  type="email"
                  aria-describedby="username-help"
                  style={{ width:"100%" }}
                />
              </div>
              <div className="font-link">
                <label htmlFor="Password">Password</label>
                <br></br>
                <InputText
                  className="p-inputtext-sm"
                  id="password"
                  type="password"
                  aria-describedby="password-help"
                  style={{ width:"100%" }}
                />
              </div>
              <div className="font-link">
                <label htmlFor="confirm password">Confrim Password</label>
                <br></br>
                <InputText
                  className="p-inputtext-sm"
                  id="password"
                  type="password"
                  aria-describedby="password-help"
                  style={{ width:"100%" }}
                />
              </div>
              <Button
                style={{ marginTop: "10px" }}
                icon="pi pi-lock-open"
                label="Success"
                severity="success"
                size="small"
              />
            </Card>
          </div>
        </Dialog>
      </div>
    </div>
  );
}

export default SignupForm;
