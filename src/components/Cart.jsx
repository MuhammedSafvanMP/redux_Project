import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { remove } from "../store/cartSlice";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Cart() {
  const showProducts = useSelector((state) => state.cart);
  const dispach = useDispatch();
  const handleRemove = (id) => {
    dispach(remove(id))
  }
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography
                          tag="h1"
                          className="fw-bold mb-0 text-black"
                        >
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          {showProducts.length} items
                        </MDBTypography>
                      </div>

                      {showProducts &&
                        showProducts.map((products) => {
                          return (
                            <>
                              <hr className="my-4" />

                              <MDBRow className="mb-4 d-flex justify-content-between align-items-center" key={products.id}>
                                <MDBCol md="2" lg="2" xl="2">
                                  <MDBCardImage
                                    src={products.images}
                                    fluid
                                    className="rounded-3"
                                    alt="Cotton T-shirt"
                                  />
                                </MDBCol>
                                <MDBCol md="3" lg="3" xl="3">
                                  <MDBTypography
                                    tag="h6"
                                    className="text-muted"
                                  >
                                    {products.title}
                                  </MDBTypography>
                                </MDBCol>
                                <MDBCol
                                  md="3"
                                  lg="3"
                                  xl="3"
                                  className="d-flex align-items-center"
                                >
                                  <MDBBtn color="link" className="px-2">
                                    <MDBIcon fas icon="minus" />
                                  </MDBBtn>

                                  <MDBInput
                                    type="number"
                                    min="0"
                                    defaultValue={1}
                                    size="sm"
                                  />

                                  <MDBBtn color="link" className="px-2">
                                    <MDBIcon fas icon="plus" />
                                  </MDBBtn>
                                </MDBCol>
                                <MDBCol
                                  md="3"
                                  lg="2"
                                  xl="2"
                                  className="text-end"
                                >
                                  <MDBTypography tag="h6" className="mb-0">
                                    € {products.price}.00
                                  </MDBTypography>
                                </MDBCol>
                                <MDBCol
                                  md="1"
                                  lg="1"
                                  xl="1"
                                  className="text-end"
                                >
                                  <a href="#!" className="text-muted">
                                    <MDBIcon fas icon="times" />
                                  </a>
                                <Button onClick={() => handleRemove(products.id)}  variant="danger"style={{cursor: "pointer"}} >Remove</Button>
                                </MDBCol>
                              </MDBRow>

                              <hr className="my-4" />
                            </>
                          );
                        })}

                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBCardText tag="a" href="#!" className="text-body">
                            <MDBIcon fas icon="long-arrow-alt-left me-2" />
                            <NavLink to={"/"}>Back to shop</NavLink>
                          </MDBCardText>
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography
                        tag="h3"
                        className="fw-bold mb-5 mt-2 pt-1"
                      >
                        Summary
                      </MDBTypography>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          items 3
                        </MDBTypography>
                        <MDBTypography tag="h5">€ 132.00</MDBTypography>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Shipping
                      </MDBTypography>

                      <div className="mb-4 pb-2">
                        <select
                          className="select p-2 rounded bg-grey"
                          style={{ width: "100%" }}
                        >
                          <option value="1">Standard-Delivery- €5.00</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                          <option value="4">Four</option>
                        </select>
                      </div>

                      <MDBTypography tag="h5" className="text-uppercase mb-3">
                        Give code
                      </MDBTypography>

                      <div className="mb-5">
                        <MDBInput size="lg" label="Enter your code" />
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Total price
                        </MDBTypography>
                        <MDBTypography tag="h5">€ 137.00</MDBTypography>
                      </div>

                      <MDBBtn color="dark" block size="lg">
                        Register
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
