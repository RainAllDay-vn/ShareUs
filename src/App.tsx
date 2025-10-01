import { useEffect, useRef } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import mixitup from "mixitup";
import {ProductDB} from "./utils/ProductDB.ts";


function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      mixitup(containerRef.current, {
        selectors: { target: ".mix" },
        animation: { duration: 300 },
      });
    }

    // Handle active class toggle
    const controls = document.querySelectorAll<HTMLLIElement>(
      ".featured__controls li"
    );
    controls.forEach((control) => {
      control.addEventListener("click", () => {
        controls.forEach((c) => c.classList.remove("active"));
        control.classList.add("active");
      });
    });
  }, []);

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

          <div className="row featured__filter" ref={containerRef}>
            {ProductDB.getAll().map((p) => (
              <div
                key={p.id}
                className={`col-lg-3 col-md-4 col-sm-6 mix ${p.categories}`}
              >
                <div className="featured__item">
                  <div
                    className="featured__item__pic"
                    style={{
                      backgroundImage: `url(${p.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "250px",
                    }}
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
                    <h6><a href={`${import.meta.env.BASE_URL}product/${p.id}`}>{p.name}</a></h6>
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
  );
}

export default App;