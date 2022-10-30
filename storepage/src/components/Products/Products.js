import React from 'react';
import AddProduct from "./AddProduct"; 
import DeleteProduct from "./DeleteProduct";
import UpdateProduct from "./UpdateProduct";

const Products = props => {
  return (
    <div>
      <h1 className = "Header">Products</h1>
      <AddProduct setProductList={props.setProductList} productList={props.productList} campaignList={props.campaignList} id={props.productId} setId={props.setProductId} />
      <table className="table table-striped"> 
        <thead className='table-dark'>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Campaign</th>
            <th></th>
            <th></th>
          </tr> 
          </thead>
          <tbody>
            {
              props.productList.map(product =>
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.campaign}</td>
                  <td>
                    <UpdateProduct product={product} setProductList={props.setProductList} campaignList={props.campaignList}/>
                  </td>
                  <td>
                    <DeleteProduct product={product} setProductList={props.setProductList} />
                  </td>
                </tr>
              )
            }
        </tbody>
      </table>
    </div>
    
  )
}

export default Products;