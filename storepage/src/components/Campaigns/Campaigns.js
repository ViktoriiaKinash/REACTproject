import React, { useState } from 'react'
import "./Campaigns.scss"; 
import AddCampaign from "./AddCampaign"; 
import DeleteCampaign from "./DeleteCampaign";
import UpdateCampaign from "./UpdateCampaigns";
import Table from 'react-bootstrap/Table'

const Campaigns = props => {
  return (
    <div>
      <h1 className = "Header">Campaigns</h1>
      <AddCampaign setCampaignList={props.setCampaignList} campaignList={props.campaignList}/>
      <Table className="campaignTable"> 
        <thead>
          <tr>
            <th>Name</th>
            <th>Keywords</th>
            <th>Bid amount</th>
            <th>Campaign fund</th>
            <th>Status</th>
            <th>Town</th>
            <th>Radius</th>
            <th></th>
            <th></th>
          </tr> 
            {
              props.campaignList.map(campaign =>
                <tr key={campaign.id}>
                  <td>{campaign.name}</td>
                  <td>{campaign.keywords}</td>
                  <td>{campaign.bidAmount}</td>
                  <td>{campaign.campaignFund}</td>
                  <td>{campaign.status}</td>
                  <td>{campaign.town}</td>
                  <td>{campaign.radius}</td>
                  <td>
                    <UpdateCampaign campaign={campaign} setCampaignList={props.setCampaignList} />
                  </td>
                  <td>
                    <DeleteCampaign campaign = {campaign} setCampaignList={props.setCampaignList} />
                  </td>
                </tr>
              )
            }
        </thead>
      </Table>
    </div>
    
  )
}

export default Campaigns;