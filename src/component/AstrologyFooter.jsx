import { Facebook, Linkedin, Twitter } from 'lucide-react';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function AstrologyFooter() {
    return (
        <footer
            className="text-white py-5"
            style={{
                background: 'linear-gradient(135deg, #1a4d3f 0%, #0d2d25 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Decorative background pattern */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage:
                        'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.03) 0%, transparent 50%)',
                    pointerEvents: 'none',
                }}
            ></div>

            <Container style={{ position: 'relative', zIndex: 1 }}>
                <Row className="g-4">
                    {/* Brand Section */}
                    <Col xs={12} lg={4} className="mb-4 mb-lg-0">
                        <div className="d-flex align-items-center mb-3">
                            <div
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    background:
                                        'linear-gradient(135deg, #f4a261 0%, #e76f51 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: '15px',
                                    boxShadow: '0 4px 15px rgba(244, 162, 97, 0.3)',
                                }}
                            >
                                <span style={{ fontSize: '28px' }}>🛕</span>
                            </div>
                            <div>
                                <h5
                                    className="mb-0"
                                    style={{
                                        color: '#ffd166',
                                        fontSize: '1.5rem',
                                        fontWeight: '600',
                                    }}
                                >
                                    Astrologer Gayatri Devi
                                </h5>
                                <p
                                    className="mb-0"
                                    style={{
                                        fontSize: '0.85rem',
                                        color: '#a8dadc',
                                        fontStyle: 'italic',
                                    }}
                                >
                                    Certified Jyotish Astrologer
                                </p>
                            </div>
                        </div>

                        <p
                            style={{
                                color: '#e0e0e0',
                                lineHeight: '1.7',
                                fontSize: '0.95rem',
                                marginBottom: '1.5rem',
                            }}
                        >
                            Dedicated to offering tailored and effective remedies for your concerns,
                            focusing on actionable guidance rather than generic forecasts.
                        </p>

                        {/* Social Media Icons */}
                        <div className="d-flex gap-3">
                            {[
                                { Icon: Facebook, color: '#1877f2', label: 'Facebook' },
                                { Icon: Twitter, color: '#1da1f2', label: 'Twitter' },
                                { Icon: Linkedin, color: '#0a66c2', label: 'LinkedIn' },
                            ].map(({ Icon, color, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="d-flex align-items-center justify-content-center"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                        transition: 'all 0.3s ease',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = color;
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                        e.currentTarget.style.boxShadow = `0 6px 20px ${color}40`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <Icon size={18} color="white" />
                                </a>
                            ))}
                        </div>
                    </Col>

                    {/* Services Section */}
                    <Col xs={12} sm={6} lg={3} className="mb-4 mb-lg-0">
                        <h5
                            className="mb-4"
                            style={{
                                color: '#ffd166',
                                fontSize: '1.3rem',
                                fontWeight: '600',
                                borderBottom: '2px solid #ffd166',
                                paddingBottom: '10px',
                                display: 'inline-block',
                            }}
                        >
                            Our Services
                        </h5>
                        <ul className="list-unstyled">
                            {[
                                'Marriage Guidance',
                                'Relationship Issues',
                                'Reunite Lost Love',
                                'Ex Partner Return',
                                'Conflict Resolution',
                                'Family Counseling',
                            ].map((service, index) => (
                                <li key={index} className="mb-3">
                                    <a
                                        href="#"
                                        className="d-flex align-items-center text-decoration-none"
                                        style={{
                                            color: '#e0e0e0',
                                            transition: 'all 0.3s ease',
                                            fontSize: '0.95rem',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = '#ffd166';
                                            e.currentTarget.style.paddingLeft = '8px';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = '#e0e0e0';
                                            e.currentTarget.style.paddingLeft = '0';
                                        }}
                                    >
                                        <span style={{ marginRight: '8px', color: '#f4a261' }}>▸</span>
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Col>

                    {/* Why Choose Us Section */}
                    <Col xs={12} sm={6} lg={2} className="mb-4 mb-lg-0">
                        <h5
                            className="mb-4"
                            style={{
                                color: '#ffd166',
                                fontSize: '1.3rem',
                                fontWeight: '600',
                                borderBottom: '2px solid #ffd166',
                                paddingBottom: '10px',
                                display: 'inline-block',
                            }}
                        >
                            Why Us
                        </h5>
                        <ul className="list-unstyled">
                            {[
                                'Satisfied Clients',
                                'Award Winner',
                                'Client Trust',
                                'Quick Results',
                                'Global Reach',
                                '100% Assured',
                            ].map((feature, index) => (
                                <li key={index} className="mb-3">
                                    <div
                                        className="d-flex align-items-center"
                                        style={{ color: '#e0e0e0', fontSize: '0.95rem' }}
                                    >
                                        <span
                                            style={{
                                                marginRight: '8px',
                                                color: '#06d6a0',
                                                fontSize: '1.2rem',
                                            }}
                                        >
                                            ✓
                                        </span>
                                        {feature}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Col>

                    {/* Contact Section */}
                    <Col xs={12} lg={3}>
                        <h5
                            className="mb-4"
                            style={{
                                color: '#ffd166',
                                fontSize: '1.3rem',
                                fontWeight: '600',
                                borderBottom: '2px solid #ffd166',
                                paddingBottom: '10px',
                                display: 'inline-block',
                            }}
                        >
                            Get In Touch
                        </h5>

                        <div className="mb-3">
                            <p
                                className="mb-2"
                                style={{
                                    color: '#a8dadc',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                }}
                            >
                                Astrologer:
                            </p>
                            <p
                                style={{
                                    color: '#fff',
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                }}
                            >
                                Gayatri Devi
                            </p>
                        </div>

                        <div className="mb-3">
                            <p
                                className="mb-2"
                                style={{
                                    color: '#a8dadc',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                }}
                            >
                                Phone:
                            </p>
                            <a
                                href="tel:+916378024495"
                                className="text-decoration-none d-block"
                                style={{
                                    color: '#fff',
                                    fontSize: '1.05rem',
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd166')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                            >
                                +91-8264221603
                            </a>
                        </div>

                        <div className="mb-3">
                            <p
                                className="mb-2"
                                style={{
                                    color: '#a8dadc',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                }}
                            >
                                WhatsApp:
                            </p>
                            <a
                                href="https://wa.me/916378024495"
                                className="text-decoration-none d-block"
                                style={{
                                    color: '#fff',
                                    fontSize: '1.05rem',
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.color = '#25d366')
                                }
                                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                            >
                                +91-8264221603
                            </a>
                        </div>

                        {/* ✅ Added Address Section */}
                        <div>
                            <p
                                className="mb-2"
                                style={{
                                    color: '#a8dadc',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                }}
                            >
                                Address:
                            </p>
                            <p
                                style={{
                                    color: '#fff',
                                    fontSize: '1.05rem',
                                    lineHeight: '1.4',
                                }}
                            >
                                Ringas, Sikar, Rajasthan
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* Bottom Section */}
                <Row
                    className="mt-5 pt-4"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
                >
                    <Col xs={12} className="text-center">
                        <p
                            style={{
                                color: '#a8dadc',
                                fontSize: '0.9rem',
                                marginBottom: 0,
                            }}
                        >
                            © {new Date().getFullYear()} Astrologer Gayatri Devi. All rights reserved. |
                            <a
                                href="#"
                                className="text-decoration-none ms-2"
                                style={{ color: '#ffd166' }}
                            >
                                Privacy Policy
                            </a>{" "}
                            |
                            <a
                                href="#"
                                className="text-decoration-none ms-2"
                                style={{ color: '#ffd166' }}
                            >
                                Terms of Service
                            </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
