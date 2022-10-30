import React, {useState} from "react";

const divStyle = {
    marginTop: "calc(35vh)",
    width: "20%"
}

const iconStyle = {
    top: "calc(35vh)",
    right: "40%"
}

const Popup = props => {
    return (
      <div className="popup-box">
        <div className="box" style={divStyle}>
          <span className="close-icon" style={iconStyle} onClick={props.handleClose}>x</span>
          {props.content}
        </div>
      </div>
    );
  };

const DeleteProduct = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  function deleteSelectedProduct(campaign){
    props.setProductList(prev =>  prev.filter(el => el.id !== props.product.id));
  }

   return (
      <div>
        <input
        type="button"
        value="Delete"
        class="button"
        onClick={togglePopup}
      />
      {isOpen && <Popup
      content={<>
      <form name="deleteProduct" required>
        Are you sure? <br></br>
      <input class="button" type="submit" value="Yes" onClick={() => {deleteSelectedProduct(props.product)}}></input>
      <input class="button" type="submit" value="No"></input>
        </form>
      </>}
      handleClose={togglePopup}
    />}
    </div>
   );
}

export default DeleteProduct;