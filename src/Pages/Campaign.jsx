import React, { useState } from "react";
import "./css/campaign.css";
import { BiFilter, BiSearch } from "react-icons/bi";
import { CgMenu } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { VscKebabVertical } from "react-icons/vsc";
import Table from "../components/Table/Table";

const Campaign = () => {
  const Nav = useNavigate()
  const campaigns = [
    {
      name: "Root of Hope",
      created: "02/19/2024",
      raised: "NO",
      supporters: 0,
      status: "Active",
    },
    {
      name: "Root of Hope",
      created: "02/19/2024",
      raised: "NO",
      supporters: 0,
      status: "Active",
    },
    {
      name: "Root of Hope",
      created: "02/19/2024",
      raised: "NO",
      supporters: 0,
      status: "Active",
    },
    {
      name: "Root of Hope",
      created: "02/19/2024",
      raised: "NO",
      supporters: 0,
      status: "Active",
    },
  ];

  const [data, setData] = useState([
    {
      name: "campaign",
      id: 1,
    },
    {
      name: "donr",
      id: 1,
    },
    {
      name: "tree of hope",
      id: 1,
    },
    {
      name: "gracious land",
      id: 1,
    },
    {
      name: "hope little",
      id: 1,
    },
  ]);
  return (
    <div className="campaignBody">
      <h2 className="pageName">Campaign</h2>
      <div className="campaignContent">
        <div className="campaignSearchSide">
          <div className="SearchSide">
            <div className="searchBox">
              <BiSearch color="gray" />
              <input type="text" placeholder="Search" />
            </div>
            <div className="filterIcon">
              <BiFilter size={17} />
            </div>
          </div>
          <div>
            <button className="campaignBtn" onClick={()=>Nav('/campaign/create.campaign') }>New Campaign</button>
          </div>
        </div>

        <div className='campaignTable'>
          <div className='tableHeader'>
            <div className="tableHeadName tb">Campaign</div>
            <div className="tableHeadDetails1 tb">
              <div>Created</div>
              <div>Raised</div>
              <div>Supporters</div>
            </div>
            <div className="tableHeadStatus1 tb">
              <div>Status</div>
              <div className='emp'></div>
            </div>
          </div>

          <div className='createdCampaigns'>
            <div className='CampaignName tb'>hi</div>
            <div className='tableHeadDetails tb'>
              <div>hey</div>
              <div>hello</div>
              <div>hello</div>
            </div>
            <div className='tableHeadStatus tb'>
              <div>hello</div>
              <div className='campaignMenuSec'><span><VscKebabVertical /></span></div>
            </div>
          </div>
        </div>

        <Table/>

        {/* <div className="container">
          <table className="full-width-border">
            <thead className="the">
              <tr className="bg-gray-100">
                <th className="border-style">Campaign</th>
                <th className="border-style">Created</th>
                <th className="border-style">Raised</th>
                <th className="border-style">Supporters</th>
                <th className="border-style">Status</th>
              </tr>
            </thead>

            <tbody>
              {campaigns.map((campaign, index) => (
                <tr key={index} className="border-bottom">
                  <td className="border-style">
                    {campaign.name}
                  </td>
                  <td className="border-style">
                    {campaign.created}
                  </td>
                  <td className="border-style">
                    {campaign.raised}
                  </td>
                  <td className="border-style">
                    {campaign.supporters}
                  </td>
                  <td className="border-style">
                    <span className="text-green">{campaign.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex-justify-between">
            <button className="bg-gray">Previous</button>
            <span>1</span>
            <button className="bg-gray">Next</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Campaign;
