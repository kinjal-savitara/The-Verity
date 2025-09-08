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
