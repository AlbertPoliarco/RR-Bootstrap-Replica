import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export default function Header() {
  return (
    <Card
      style={{
        width: "100%",
        backgroundImage: "url(../../headerBackground.png)",
        height: "500px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundColor: "#DFEED6",
        backgroundSize: "450px 500px",
      }}
    >
      <Card.Body
        style={{
          textAlign: "left",
          width: "700px",
          marginLeft: "150px",
          marginTop: "100px",
        }}
      >
        <Card.Title style={{ fontSize: "41px" }}>
          Groceries ready for pickup or delivery in 1 hour or less
        </Card.Title>
        <Card.Subtitle style={{ fontSize: "15px" }} className="mb-2 text-muted">
          Whatever you want from local stores, brought right to your door.
        </Card.Subtitle>
        <Form.Control
          style={{ fontSize: "18px" }}
          type="email"
          placeholder="Enter email"
        />
      </Card.Body>
    </Card>
  );
}
