import React from 'react';
import "./product.css";
import { Link } from 'react-router-dom';
import { Publish } from '@mui/icons-material';
import Chart from "../../components/chart/Chart";
import {productData} from "../../dummyData";

export default function Product() {
  return (
    <div className="product">
        <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://cdn.dsmcdn.com/ty100/product/media/images/20210408/18/78771021/151404627/1/1_org_zoom.jpg" alt="" className="productInfoImg" />
                  <span className="productName">Apple Airpods</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">ID:</span>
                      <span className="productInfoValue">103</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Sales:</span>
                      <span className="productInfoValue">3889</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Active:</span>
                      <span className="productInfoValue">Yes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">In stock:</span>
                      <span className="productInfoValue">No</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="Apple AirPod" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://cdn.dsmcdn.com/ty100/product/media/images/20210408/18/78771021/151404627/1/1_org_zoom.jpg" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  )
}
