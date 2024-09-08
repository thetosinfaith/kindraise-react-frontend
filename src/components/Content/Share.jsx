import React, { useState } from "react";
import "./share.css";
import { BiCopy } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { GoDownload } from "react-icons/go";
import { PiPrinterThin } from "react-icons/pi";
import 'animate.css';

const Share = () => {
  const Nav = useNavigate()
  const [num, setNum] = useState();
  const [link, setLink] = useState("https://example.com");
  const id = Date.now();

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(link + "/" + id)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  console.log(num);

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
          <div className="codeHolder">code</div>
          <button className="codeDbBtn animate__animated animate__fadeIn animate__infinite animate__slow"><GoDownload />Download</button>
          <button className="codeDbBtn"><PiPrinterThin />Print</button>
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
                value={link + "/" + id}
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
