import React from 'react';
import AddProduct from "./AddProduct"; 
import DeleteProduct from "./DeleteProduct";
import UpdateProduct from "./UpdateProduct";
import Table from 'react-bootstrap/Table';

const ProductsList = [
  {
    id: '1',
    name: 'Telefon',
    price: 1000,
    campaign: "Campaign1"
  },
  {
    id: '2',
    name: 'Laptop',
    price: 3000,
    campaign: "Campaign2"
  }
];

const Products = () => {
  return (
    <div>
      <h1 className = "Header">Products</h1>
      <AddProduct />
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
              ProductsList.map(product =>
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.campaign}</td>
                  <td>
                    <UpdateProduct product={product} />
                  </td>
                  <td>
                    <DeleteProduct />
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