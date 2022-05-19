import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";
import NavbarCategories from "../components/NavbarCategories";
import Banner from "../components/Banner";
import Slide from "../components/Slide";
import { Box } from "@material-ui/core";
import Equipments from "../components/Equipments";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      <NavbarCategories />
      <Banner />
      {/* {!keyword ? (
        // <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )} */}

      <Slide timer={true} title="Top Deals" style={{backgroundColor:"#F3F7FB"}} />
      <Box style={{backgroundColor:"#ffffff"}}>
      <hr></hr>
      <h5 style={{margin:"0 0 0 22px",fontweight:"600",fontFamily:"Arial",fontSize:"22px",textTransform:"none",letterSpacing:"0",color:"#ffffff !important" }}>Latest Product</h5>
      <hr></hr>
      </Box>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          {/* <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row> */}

          <Row style={{backgroundColor:"#F3F7FB",
            display:"flex", flexFlow:"row wrap !important",width:"100% !importent", justifyContent:"left !importent",alignItems:"left !importent",
            margin:"0 0 0 12px",gridGap:"25px",
            }}>
            {products.map((product) => (
              // <col key={product._id} style={{display:"inline-block",padding:"0px,1rem,0px 1rem"}}>
                <Product product={product} />
              // </col>
            ))}
          </Row>
          <hr></hr>
      <Equipments timer={true} title="Medical Equipments" style={{backgroundColor:"#F3F7FB"}} />
      <hr></hr>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
