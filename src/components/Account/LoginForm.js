import React, { useState } from "react";
import { Button, Dialog, InputText, Card } from "../../primeReact";
import pic from "../../assets/log-image.jpg";

function LoginForm() {
  const [sign, setSign] = useState(false);
  const imageStyle = {
    borderRadius: "5%"
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div></div>
      <div  style={{ overflow:"hidden" }}>
        <Button
          label="Sign Up"
          severity="secondary"
          text
          style={{ fontSize: "0.75rem", color: "white" }}
          onClick={() => setSign(true)}
        />
        <Dialog
          visible={sign}
          style={{ width: "50vw",paddingBottom:"0px" }}
          onHide={() => setSign(false)}
        >
          <p
            className="m-0"
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              alignItems:"center",
            }}
          >
            <div>
              <img
                src={pic}
                alt="My Image"
                width="350"
                height="450"
                style={imageStyle}
              />
            </div>
            <Card
              title="Login Please"
              style={{
                position: "absolute",
                marginLeft: "300px",
                marginTop: "20px",
              }}
            >
              <div className="flex flex-column gap-2">
                <label htmlFor="username">Username</label>
                <InputText
                  className="p-inputtext-sm"
                  id="username"
                  type="text"
                  aria-describedby="username-help"
                  style={{ marginLeft:"6px"}}
                />
              </div>
              <div className="flex flex-column gap-2 mt-3">
                <label htmlFor="Password">Password</label>
                <InputText
                  className="p-inputtext-sm"
                  id="password"
                  type="password"
                  style={{marginBottom:"20px", marginTop:"20px", marginLeft:"8px"}}
                  aria-describedby="password-help"
                />
              </div>
              <Button icon="pi pi-lock-open" label="Success" severity="success" size="small" />
            </Card>
          </p>
        </Dialog>
      </div>
    </div>
  );
}

export default LoginForm;
