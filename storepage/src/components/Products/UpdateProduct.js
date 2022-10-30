import React, {useState} from "react";

const Popup = props => {
    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>x</span>
          {props.content}
        </div>
      </div>
    );
  };

const UpdateProduct = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const handleSubmit = event =>{
    event.preventDefault();
    let productToUpdate = {
        id: '3',
        name: event.target.elements.productName.value,
        price: event.target.elements.productPrice.value,
        campaign: event.target.elements.productCampaign.value
    }
    props.setProductList(prev =>  prev.map((i)=>{return props.product === i ? productToUpdate : i}));
    togglePopup();

  };

   return (
      <div class="right">
        <input
        type="button"
        value="Update"
        class="button"
        onClick={togglePopup}
      />
      {isOpen && <Popup
      content={<>
      <form name="UpdateProduct" onSubmit={handleSubmit} required>
        Name:<input class="form-control form-control-sm" type="text" id="productName" name="name" defaultValue={props.product.name} disabled required></input><br></br>
        Price:<input class="form-control form-control-sm" type="number" min="0" defaultValue={props.product.price} id="productPrice" name="price" required></input><br></br>
        Campaign:<select class="form-control form-control-sm" name="campaign" id="productCampaign" defaultValue={props.product.campaign} required>
            <option value="">Select from list...</option>
            {
                props.campaignList.map(campaign =>
                    <option>{campaign.name}</option>
                )
            }
        </select><br></br>
        <input class="button" type="submit" value="Submit"></input>
        </form>
      </>}
      handleClose={togglePopup}
    />}
    </div>
   );
}

export default UpdateProduct;