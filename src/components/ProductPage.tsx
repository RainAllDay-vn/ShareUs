//import { useParams } from "react-router-dom";
import ProductCarousel from "./ProductCarousel.tsx";

export default function ProductPage() {
  //const { id } = useParams<{ id: string }>(); // get the :id param

  return (
    <>
      {/* Product Details Section Begin */}
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <ProductCarousel />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text">
                <h3>Vetgetable’s Package</h3>
                <div className="product__details__rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-alt"></i>
                  <span>(18 reviews)</span>
                </div>
                <h6>Đăng bởi: Nguyễn Thu Hà</h6>
                <div className="product__details__price">$50.00</div>
                <p>
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
                  vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet
                  quam vehicula elementum sed sit amet dui. Proin eget tortor risus.
                </p>
                <div className="product__details__quantity">
                  <div className="quantity">
                    <div className="pro-qty">
                      <input type="text" defaultValue="1" />
                    </div>
                  </div>
                </div>
                <a href="#" className="primary-btn">ADD TO CARD</a>
                <a href="#" className="heart-icon"><span className="icon_heart_alt"></span></a>
                <ul>
                  <li><b>Availability</b> <span>In Stock</span></li>
                  <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                  <li><b>Weight</b> <span>0.5 kg</span></li>
                  <li>
                    <b>Share on</b>
                    <div className="share">
                      <a href="#"><i className="fab fa-facebook"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"><i className="fab fa-pinterest"></i></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab" aria-selected="false">
                      Information
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab" aria-selected="false">
                      Reviews <span>(1)</span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p> ... </p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p> ... </p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p> ... </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Details Section End */}
    </>
  );
}