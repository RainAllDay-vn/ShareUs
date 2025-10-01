export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-3">
            <div className="header__logo">
              <a href="/home"><img src="/img/logo.png" alt=""/></a>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="header__cart">
              <ul>
                <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
              </ul>
              <div className="header__cart__price">Item: <span>$150.00</span></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}