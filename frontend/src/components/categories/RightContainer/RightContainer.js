import React from 'react'
import Product from '../../Product'
import './RightContainer.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Paginate from '../../Paginate'; 
import { listProducts } from '../../../actions/productActions'; 



const RightContainer = () => {
  // const keyword = match.params.keyword;

  // const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className='rightContainer'>
 <>
          {/* <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row> */}

          <Row style={{
            display:"flex", flexFlow:"row wrap !importent",width:"100% !importent", justifyContent:"left !importent",alignItems:"left !importent",
            margin:"auto"
            }}>
            {products.map((product) => (
              // <col key={product._id} style={{display:"inline-block",padding:"0px,1rem,0px 1rem"}}>
                <Product product={product} />
              // </col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            // keyword={keyword ? keyword : ""}
          />
        </>      </div>
  )
}

export default RightContainer