import React, { useRef, useState } from "react";
import "./share.css";
import { BiCopy } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { GoDownload } from "react-icons/go";
import { PiPrinterThin } from "react-icons/pi";
import 'animate.css';

import { QRCodeSVG } from "qrcode.react";

const Share = () => {
  const Nav = useNavigate()
  const [num, setNum] = useState();
  const ev = Date.now();
  const [link, setLink] = useState(`https://example.com/${ev}`);
  const qrRef = useRef();


  const handlePrint = () => {  
    const svg = qrRef.current.querySelector("svg");  
    const printWindow = window.open('', '_blank');  
    printWindow.document.write(`  
      <html>  
        <head>  
          <title>Print QR Code</title>  
          <style>  
            body {  
              display: flex;  
              justify-content: center;  
              align-items: center;  
              height: 100vh;  
              margin: 0;  
            }  
            svg {  
              width: 300px; /* Adjust size as needed */  
              height: 300px; /* Adjust size as needed */  
            }  
          </style>  
        </head>  
        <body>  
          ${svg.outerHTML}  
        </body>  
      </html>  
    `);  
    printWindow.document.close();  
    printWindow.print();  
  };


  const handleDownload = () => {  
    // Get the SVG of the QR code  
    const svg = qrRef.current.querySelector("svg");  
    const serializer = new XMLSerializer();  
    const source = serializer.serializeToString(svg);  
    const encodedData = encodeURIComponent(source);  
    
    // Create a download link  
    const link = document.createElement("a");  
    link.href = `data:image/svg+xml;charset=utf-8,${encodedData}`;  
    link.download = "qrcode.svg";  
    link.click();  
  };  

  

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  // console.log(num);

  return (
    <div className="shareBody">
      <div className="shareTitleBox">
        <div className="shareTextBox">
          <h3>Scan-to-donate</h3>
          <div>
            Print and scan this QR code to be linked directly to your campaign
            page.
          </div>
        </div>
        <div className="shareCodeBox">
          <div className="codeHolder" ref={qrRef}>
            <QRCodeSVG value={link} size={140}/>
          </div>
          <button onClick={handleDownload} className="codeDbBtn animate__animated animate__fadeIn animate__infinite animate__slow"><GoDownload />Download</button>
          <button className="codeDbBtn" onClick={handlePrint}><PiPrinterThin />Print</button>
        </div>
      </div>

      <div className="shareTitleBox2">
        <div className="shareTextBox2">
          <h3>Campaign Link</h3>
          <div>
            Copy the link to your campaign page and share your story to the
            world.
          </div>
        </div>
        <div className="shareLinkBox">
          <div className="storyInput">
            <div className="inputLinkBox">
              <input
                type="text"
                value={link}
                readOnly
                className="linkInput"
              />
              <div onClick={copyToClipboard}><BiCopy size={25} cursor="pointer"/></div>
            </div>
          </div>
        </div>
      </div>

      <div className="shareBtnBox">
        <button className="publishBtn"onClick={()=>Nav('/fundraising-page')}>Publish</button>
      </div>
    </div>
  );
};

export default Share;
