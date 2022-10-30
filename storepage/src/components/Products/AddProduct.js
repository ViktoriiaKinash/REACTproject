import React, {useState} from "react";
import "./AddProduct.scss"; 

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

const AddProduct = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const handleSubmit = event =>{
    event.preventDefault();
    let productToAdd = {
        id: '3',
        name: event.target.elements.productName.value,
        price: event.target.elements.productPrice.value,
        campaign: event.target.elements.productCampaign.value,
    }
    const newlist = props.productList.concat([productToAdd]);
    props.setProductList(newlist);
    togglePopup()
  };

   return (
      <div class="right">
        <input
      type="button"
      value="Add"
      class="button"
      onClick={togglePopup}
      />
      {isOpen && <Popup
      content={<>
      <form name="AddProduct" onSubmit={handleSubmit} required>
        Name:<input class="form-control form-control-sm" type="text" id="productName" name="name" required></input><br></br>
        Price:<input class="form-control form-control-sm" type="number" min="0" id="productPrice" name="price" required></input><br></br>
        Campaign:<select class="form-control form-control-sm" name="campaign" id="productCampaign" required>
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

export default AddProduct;