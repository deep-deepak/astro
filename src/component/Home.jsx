
import AstrologerHeader from "./Header";
import AstrologyServices from "./AstrologyServices";
import AstrologyFooter from "./AstrologyFooter";
import { PhoneCall, MessageCircle } from "lucide-react";

export default function Home() {
    const phoneNumber = "+916378024495"; // WhatsApp expects digits only
    const encodedMessage = encodeURIComponent("Hello! I would like to talk with Astrologer Gayatri Devi.");

    return (
        <div>
            <AstrologerHeader />
            <AstrologyServices />
            <AstrologyFooter />

            {/* Floating Contact Buttons */}
            <div
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    zIndex: 9999,
                }}
            >
                {/* WhatsApp Button */}
                <a
                    href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        backgroundColor: "#25D366",
                        color: "white",
                        borderRadius: "50%",
                        width: "55px",
                        height: "55px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                    }}
                    title="Chat on WhatsApp"
                >
                    <MessageCircle size={28} />
                </a>

                {/* Phone Button */}
                <a
                    href={`tel:${phoneNumber}`}
                    style={{
                        backgroundColor: "#34b7f1",
                        color: "white",
                        borderRadius: "50%",
                        width: "55px",
                        height: "55px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                    }}
                    title="Call Now"
                >
                    <PhoneCall size={28} />
                </a>
            </div>
        </div>
    );
}
