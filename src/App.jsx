import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from "./components/Name";
import Price from "./components/price";
import Description from "./components/Description";
import Image from "./components/Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample() {
    const firstName = "Grace";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
        backgroundColor: "wheat"
      }}
    >
      <Card
        style={{
          width: "18rem",
          backgroundColor: "pink",
         }}
      >
        <Card.Body>
        <Card.Img
          variant="top"
          src="/serum.jpg"
          alt="serum image"
        />
          <Card.Title>
            <strong>GlowSkin Vitamin C Serum</strong>
          </Card.Title>
          <Card.Text>
            Brightens skin tone, reduces dark spots, and gives your face a
            fresh, radiant glow.
          </Card.Text>
          <Card.Text>
            <strong>Price:</strong> $24.99
          </Card.Text>
          <Button variant="primary">Buy now</Button>
        </Card.Body>
      </Card>
          <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
            <h4>Hello, {firstName ? firstName : "there"}!</h4>
            {firstName && (
              <img
                src="/My image.jpg"
                alt="Greeting Visual"
                style={{ width: "30%", marginTop: "10px", borderRadius: "60px 30px"}}
              />
            )}
          </div>
    </div>
  );
}

export default BasicExample;


