import React from 'react'
import "./Campaigns.scss"; 
import AddCampaign from "./AddCampaign"; 
import DeleteCampaign from "./DeleteCampaign";
import UpdateCampaign from "./UpdateCampaigns";
import Table from 'react-bootstrap/Table'

const CampaignList = [
  {
    id: '1',
    name: 'Empik',
    keywords: ['books', 'read'],
    minAmount: 12,
    campaignFund: 1000,
    status: 'on',
    town: 'Krakow',
    radius: 50
  },
  {
    id: '2',
    name: 'Zara',
    keywords: ['fashion', 'closes'],
    minAmount: 100,
    campaignFund: 2500,
    status: 'off',
    town: 'Paris',
    radius: 200
  }
];

const Campaigns = () => {
  return (
    <div>
      <h1 className = "Header">Campaigns</h1>
      <AddCampaign />
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
              CampaignList.map(campaign =>
                <tr key={campaign.id}>
                  <td>{campaign.name}</td>
                  <td>{campaign.keywords.join(", ")}</td>
                  <td>{campaign.minAmount}</td>
                  <td>{campaign.campaignFund}</td>
                  <td>{campaign.status}</td>
                  <td>{campaign.town}</td>
                  <td>{campaign.radius}</td>
                  <td>
                    <UpdateCampaign campaign={campaign} />
                  </td>
                  <td>
                    <DeleteCampaign />
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