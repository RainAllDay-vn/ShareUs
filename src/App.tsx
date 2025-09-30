const products = [
  { id: 1, img: "/img/featured/feature-1.jpg", categories: "oranges fresh-meat" },
  { id: 2, img: "/img/featured/feature-2.jpg", categories: "vegetables fastfood" },
  { id: 3, img: "/img/featured/feature-3.jpg", categories: "vegetables fresh-meat" },
  { id: 4, img: "/img/featured/feature-4.jpg", categories: "fastfood oranges" },
  { id: 5, img: "/img/featured/feature-5.jpg", categories: "fresh-meat vegetables" },
  { id: 6, img: "/img/featured/feature-6.jpg", categories: "oranges fastfood" },
  { id: 7, img: "/img/featured/feature-7.jpg", categories: "fresh-meat vegetables" },
  { id: 8, img: "/img/featured/feature-8.jpg", categories: "fastfood vegetables" },
];

function App() {

  return (
    <>
      {/* Featured Section Begin */}
      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Featured Product</h2>
              </div>
              <div className="featured__controls">
                <ul>
                  <li className="active" data-filter="*">All</li>
                  <li data-filter=".oranges">Oranges</li>
                  <li data-filter=".fresh-meat">Fresh Meat</li>
                  <li data-filter=".vegetables">Vegetables</li>
                  <li data-filter=".fastfood">Fastfood</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row featured__filter">
            {products.map((p) => (
              <div
                key={p.id}
                className={`col-lg-3 col-md-4 col-sm-6 mix ${p.categories}`}
              >
                <div className="featured__item">
                  <div
                    className="featured__item__pic"
                    style={{ backgroundImage: `url(${p.img})` }}
                  >
                    <ul className="featured__item__pic__hover">
                      <li>
                        <a href="#"><i className="fa fa-heart"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa fa-retweet"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa fa-shopping-cart"></i></a>
                      </li>
                    </ul>
                  </div>
                  <div className="featured__item__text">
                    <h6><a href="#">Crab Pool Security</a></h6>
                    <h5>$30.00</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Featured Section End */}
    </>
  )
}

export default App
