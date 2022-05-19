import React from 'react'
// import { Star } from "@mui/icons-material";
// import {Star} from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import './Product.css'

const Product = ({ product }) => {
  console.log(product)
  return (
    <div style={{ margin: "0rem 0.75rem", padding: "0px" }}>
      <Card className='my-3 p-3 rounded product-item-container'>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top' className='product-image-container' />
        </Link>

        <Card.Body className="card-body">
          <div style={{ maxHeight: "100px", overflow: "" }}>
            <Link to={`/product/${product._id}`}>
              <br></br>
              
              
              <card style={{ fontSize: "16px", padding: "0px", margin: "0px" }}>
                <strong style={{ fontSize: "14px", fontWeight: "700" , fontFamily:"arial"}}>{product.name}</strong>
              </card>
            </Link>


            {/* <card  style={{fontSize: "16px", padding: "0px", margin: "0px"}}>
                <Rating style={{fontSize: "0.75rem"}}
                 
                 text={`${product.numReviews}reviews`}
                                    value={product.rating}
                                    
                />
              </card>
              <div className="product-rating">
            <span className="product-rating-star">
              3.8
              <Star className="star" />
            </span>
            <span className="rating-status">447 ratings</span>
          </div> */}
            {/* <hr></hr> */} 
          
            <p>
            
          <card style={{ fontSize: "16px", padding: "0px", margin: "0px", color: "#B82D04", fontWeight: "900", }}>${product.price}</card>
          </p>
        
          </div>
        
        </Card.Body>
        <Link to={`/product/${product._id}`}>
        <button style={{backgroundColor:"#24AEB1",
    width: "100%",
    fontSize: "14px",
    fontWeight:"900",
    borderRadius: "4px",
    padding: "11px 0 7px",
    border: "0",
    color: "#fff",
    textTransform: "uppercase",
    fontFamily: "LatoBold!important",
    cursor: "pointer"}}
  type="submit" title="ADD TO CART">ADD TO CART</button>
  </Link>
      </Card>

    </div>
  )
}

export default Product
