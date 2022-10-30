import React from 'react';
import AddProduct from "./AddProduct"; 
import DeleteProduct from "./DeleteProduct";
import UpdateProduct from "./UpdateProduct";
import Table from 'react-bootstrap/Table';

const Products = props => {
  return (
    <div>
      <h1 className = "Header">Products</h1>
      <AddProduct setProductList={props.setProductList} productList={props.productList} campaignList={props.campaignList} />
      <Table className="campaignTable"> 
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Campaign</th>
            <th></th>
            <th></th>
          </tr> 
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
        </thead>
      </Table>
    </div>
    
  )
}

export default Products;