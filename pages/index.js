import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import  { useState, useEffect }  from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [showImage, setShowImage] = useState(true);

   

   useEffect(() => {
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
    document.body.style.margin = "0";

     const timer = setTimeout(() => {
      setShowImage(false); 
    }, 2000);
    return () => clearTimeout(timer);
     
  }, []);

  
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

const handleSubmit = (e) => {
  e.preventDefault();
  const subject = encodeURIComponent("New Lead from Virtual Tour");
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`
  );

  window.location.href = `mailto:kinjal@yopmail.com?subject=${subject}&body=${body}`;
};

  //  const handleWhatsAppClick = () => {
  //   // 1. Open WhatsApp with message
  //    window.open(
  //           "https://wa.me/919227020701?text=Hi, I’m interested in the property tour visited from Aerial View by savitar Realty.",
  //           "_blank"
  //         )

  //   // 2. Trigger PDF download
  //   const link = document.createElement("a");
  //   link.href = "https://housing-is-01.s3.amazonaws.com/6a32315a/6a513915bb8b26b940ec05e4e2ce102e/original.pdf";  
  //   link.download = "Shree-kalash-savitar-realty.pdf";
  //   link.click();
  // };

  const handleWhatsAppClick = () => {
    // 1. Open WhatsApp with message
     window.open(
            "https://wa.me/919227020701?text=Hi, I’m interested in the property tour visited from Aerial View.",
            "_blank"
          )

    // 2. Trigger PDF download
   window.open("https://housing-is-01.s3.amazonaws.com/6a32315a/6a513915bb8b26b940ec05e4e2ce102e/original.pdf", "_blank");
  };
  
  
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        zIndex: 1,
      }}
    >
      {/* Fullscreen 360 iframe */}
      <iframe
        src="https://tours.savitarrealty.in/virtualtour/d40536d4"
        frameBorder="0"
        scrolling="no"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
        allow="vr;xr-spatial-tracking;gyroscope;accelerometer;magnetometer;"
        title="Virtual Tour"
      ></iframe>

      {/* WhatsApp Button */}
      // <button
      //   onClick={handleWhatsAppClick}
      //   style={{
      //     position: "absolute",
      //     left: "20px",
      //     top: "80%", 
      //     backgroundColor: "#25D366", // WhatsApp green
      //     color: "white",
      //     padding: "10px 8px",
      //     borderRadius: "8px",
      //     boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      //     border: "none",
      //     cursor: "pointer",
      //     zIndex: 9999,
      //     fontWeight: "bold",
      //   }}
      // >
      //   📄  Download Brochure
      // </button>


          {showImage && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/320px-The_Earth_seen_from_Apollo_17.jpg')",
              backgroundSize: "cover",
              animation: "spin 6s linear infinite",
              boxShadow: "0 0 30px rgba(0,255,255,0.6)",
            }}
          ></div>
        </div>
      )}
      
      {/* CSS Animation */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        
    </div>


    


   
  )
}
