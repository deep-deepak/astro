
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AstrologyServices() {
    const services = [
        {
            title: "Marriage Blessing Prayer",
            subtitle: "Professional Astrologer",
            description: "Looking to unite with your soulmate? Our specialized marriage prayers help remove obstacles and bring you closer to marital bliss with your beloved partner.",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=400&fit=crop",
            color: "#1a4d2e"
        },
        {
            title: "Relationship Healing Spell",
            subtitle: "Certified Love Expert",
            description: "Our love solution services have reunited countless couples. Whether you feel disconnected or your feelings aren't reciprocated, we can help restore your bond.",
            image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&h=400&fit=crop",
            color: "#2d5f3f"
        },
        {
            title: "Lost Love Recovery",
            subtitle: "Professional Astrologer",
            description: "Connect with our renowned online astrology expert who specializes in powerful Islamic remedies to revive lost relationships and bring back your true love.",
            image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=500&h=400&fit=crop",
            color: "#1a4d2e"
        },
        {
            title: "Soulmate Connection Ritual",
            subtitle: "Expert Love Counselor",
            description: "Discover divine guidance to attract your perfect life partner. Our spiritual rituals create harmony and strengthen the sacred bond between destined souls.",
            image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=500&h=400&fit=crop",
            color: "#2d5f3f"
        },
        {
            title: "Breakup Solution Prayer",
            subtitle: "Renowned Astrologer",
            description: "Facing separation or heartbreak? Our proven astrological remedies work to mend broken relationships and restore love between partners who belong together.",
            image: "https://www.shivshraddhaastrologer.com/wp-content/uploads/2022/07/L2.1.jpg",
            color: "#1a4d2e"
        },
        {
            title: "True Love Attraction",
            subtitle: "Spiritual Healer",
            description: "Unlock the power of ancient mystical practices to draw genuine affection into your life. Let cosmic energy guide you toward lasting romantic happiness.",
            image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500&h=400&fit=crop",
            color: "#2d5f3f"
        }
    ];

    return (
        <div style={{ backgroundColor: '#f8f9fa', padding: '60px 0' }}>
            <Container>
                <Row className="g-4">
                    {services.map((service, index) => (
                        <Col key={index} xs={12} md={6} lg={4}>
                            <Card style={{
                                border: 'none',
                                borderRadius: '0',
                                overflow: 'hidden',
                                height: '100%',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                <div style={{
                                    height: '280px',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }}>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                                <Card.Body style={{
                                    backgroundColor: service.color,
                                    color: 'white',
                                    padding: '30px 25px'
                                }}>
                                    <p style={{
                                        fontSize: '14px',
                                        marginBottom: '10px',
                                        fontWeight: '500',
                                        letterSpacing: '0.5px'
                                    }}>
                                        {service.subtitle}
                                    </p>
                                    <Card.Title style={{
                                        fontSize: '24px',
                                        fontWeight: '700',
                                        marginBottom: '20px',
                                        color: '#ffc107'
                                    }}>
                                        {service.title}
                                    </Card.Title>
                                    <Card.Text style={{
                                        fontSize: '15px',
                                        lineHeight: '1.7',
                                        marginBottom: '25px',
                                        minHeight: '120px'
                                    }}>
                                        {service.description}
                                    </Card.Text>
                                    <Button
                                        style={{
                                            backgroundColor: '#ffc107',
                                            border: 'none',
                                            color: '#000',
                                            padding: '12px 24px',
                                            fontWeight: '600',
                                            borderRadius: '4px',
                                            fontSize: '15px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        }}
                                    >
                                        <span style={{ fontSize: '18px' }}>📱</span>
                                        +91-6378024495
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}