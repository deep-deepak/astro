
import { Container, Row, Col, Card } from "react-bootstrap";
import { Phone, MessageCircle } from "lucide-react"; // ✅ Lucide icons
import "bootstrap/dist/css/bootstrap.min.css";

export default function AstrologerHeader() {
    return (
        <div
            style={{
                background: "linear-gradient(to right, #FEF08A, #FDE68A)",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
        >
            <Container className="py-4">
                <Row className="align-items-center gy-4 justify-content-between">
                    {/* Left Section */}
                    <Col xs={12} md={8} className="d-flex align-items-center gap-3 flex-wrap">
                        {/* Logo with Badge */}
                        <div className="position-relative mx-auto mx-md-0">
                            <div
                                className="rounded-circle d-flex align-items-center justify-content-center border border-white"
                                style={{
                                    width: "5rem",
                                    height: "5rem",
                                    background: "#f97316",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                                    borderWidth: "4px",
                                }}
                            >
                                <img
                                    src="shyam.png"
                                    alt="Khatu Shyam Ji"
                                    style={{ width: '60px', height: '60px', verticalAlign: 'middle' }}
                                />

                            </div>

                            <div
                                className="position-absolute text-white fw-bold rounded-pill px-2 py-1 text-nowrap"
                                style={{
                                    top: "-10px",
                                    right: "-20px",
                                    backgroundColor: "#ef4444",
                                    fontSize: "0.55rem",
                                    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                                }}
                            >
                                CERTIFIED FAMOUS ASTROLOGER
                            </div>
                        </div>

                        {/* Brand Info */}
                        <div className="text-center text-md-start">
                            <h1
                                className="fw-bold text-success mb-2"
                                style={{ fontSize: "1.6rem" }}
                            >
                                Kinner Astrologer Gayatri Devi
                            </h1>

                            {/* Ratings & Reviews */}
                            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
                                {/* Happy Customer */}
                                <Card className="d-flex flex-row align-items-center px-2 py-1 border-0 shadow-sm rounded-pill">
                                    <div
                                        className="d-flex align-items-center justify-content-center rounded-circle me-2"
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                            backgroundColor: "#78350f",
                                        }}
                                    >
                                        <span className="text-white small">😊</span>
                                    </div>
                                    <span style={{ fontSize: "0.7rem" }}>
                                        <strong>Happy</strong> Customer
                                    </span>
                                </Card>

                                {/* Effective Solution */}
                                <Card className="d-flex flex-row align-items-center px-2 py-1 border-0 shadow-sm rounded-pill">
                                    <div
                                        className="d-flex align-items-center justify-content-center rounded-circle me-2"
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                            backgroundColor: "#f97316",
                                        }}
                                    >
                                        <span className="text-white small">✨</span>
                                    </div>
                                    <span style={{ fontSize: "0.7rem" }}>
                                        <strong>Effective</strong> Solution
                                    </span>
                                </Card>

                                {/* 5 Star Review */}
                                <Card
                                    className="d-flex flex-row align-items-center text-white px-2 py-1 border-0 shadow-sm rounded-pill"
                                    style={{ backgroundColor: "#f97316" }}
                                >
                                    <span className="text-warning me-2" style={{ fontSize: "0.8rem" }}>
                                        ⭐⭐⭐⭐⭐
                                    </span>
                                    <span className="fw-bold" style={{ fontSize: "0.7rem" }}>
                                        5 Star Review
                                    </span>
                                </Card>
                            </div>
                        </div>
                    </Col>

                    {/* Right Section - Contact */}
                    <Col xs={12} md="auto">
                        <Card className="d-flex flex-column flex-sm-row align-items-center p-3 shadow-lg border-0 rounded-3 text-center text-md-start">
                            <div className="position-relative mb-3 mb-sm-0 me-sm-3">
                                <div
                                    className="d-flex align-items-center justify-content-center rounded"
                                    style={{
                                        width: "3.5rem",
                                        height: "3.5rem",
                                        background: "linear-gradient(to bottom right, #14532d, #166534)",
                                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                                    }}
                                >
                                    <Phone color="white" size={22} />
                                </div>

                                <div
                                    className="position-absolute text-white fw-bold px-2 py-0 rounded-pill"
                                    style={{
                                        bottom: "-4px",
                                        right: "-4px",
                                        fontSize: "0.55rem",
                                        backgroundColor: "#ef4444",
                                    }}
                                >
                                    24/7
                                </div>
                            </div>

                            <div>
                                <div
                                    className="text-white fw-bold rounded-pill px-2 py-1 mb-1 d-inline-block"
                                    style={{
                                        backgroundColor: "#f97316",
                                        fontSize: "0.6rem",
                                    }}
                                >
                                    Ask Any Question — Contact Us Anytime, Anywhere
                                </div>
                                <div
                                    className="fw-semibold text-secondary mb-1"
                                    style={{ fontSize: "0.8rem" }}
                                >
                                    24×7 Service Available For Your Help
                                </div>
                                <div
                                    className="fw-bold text-success"
                                    style={{ fontSize: "1.4rem", lineHeight: "1.2" }}
                                >
                                    +91-6378024495
                                </div>

                                {/* Contact Icons (Phone & WhatsApp) */}
                                <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
                                    <a href="tel:+916378024495" className="text-success">
                                        <Phone size={20} />
                                    </a>
                                    <a
                                        href="https://wa.me/919076333306"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-success"
                                    >
                                        <MessageCircle size={20} />
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
