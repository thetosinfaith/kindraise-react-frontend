import React, { useState } from 'react'
import './css/campaign.css'
import { BiFilter, BiSearch } from 'react-icons/bi'
import { CgMenu } from 'react-icons/cg'

const Campaign = () => {

  const [data, setData] = useState([
    {
      name: 'campaign',
      id: 1,
    },
    {
      name: 'donr',
      id: 1,
    },
    {
      name: 'tree of hope',
      id: 1,
    },
    {
      name: 'gracious land',
      id: 1,
    },
    {
      name: 'hope little',
      id: 1,
    },
  ])
  return (
    <div className='campaignBody'>
      <h2 className="pageName">Campaign</h2>
      <div className='campaignContent'>
        <div className='campaignSearchSide'>
          <div className='SearchSide'>
            <div className='searchBox'>
              <BiSearch color='gray' />
              <input type="text" placeholder='Search'/>
            </div>
            <div className='filterIcon'>
              <BiFilter size={17}/>
            </div>
          </div>
          <div>
            <button className='campaignBtn'>New Campaign</button>
          </div>
        </div>
        <div className='campaignTable'>
          <div className='tableHeader'>
            <div className="tableHeadName tb">Campaign</div>
            <div className="tableHeadDetails tb">
              <div>Created</div>
              <div>Raised</div>
              <div>Supporters</div>
            </div>
            <div className="tableHeadStatus tb">
              <div>Status</div>
              <div className='emp'></div>
            </div>
          </div>

          <div className='createdCampaigns'>
            <div className='CampaignName tb'>hello</div>
            <div className='tableHeadDetails tb'>
              <div>hello</div>
              <div>hello</div>
              <div>hello</div>
            </div>
            <div className='tableHeadStatus tb'>
              <div>hello</div>
              <div className='campaignMenuSec'><span><CgMenu/></span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Campaign