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

const AddProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
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
      <form name="AddProduct" required>
        Name:<input class="form-control form-control-sm" type="text" id="fname" name="name" required></input><br></br>
        Price:<input class="form-control form-control-sm" type="number" min="0" id="lname" name="price" required></input><br></br>
        Campaign:<select class="form-control form-control-sm" name="campaign" required>
            <option value="">Select from list...</option>
            <option>Campaign1</option>
            <option>Campaign2</option>
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