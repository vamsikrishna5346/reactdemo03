import React from "react";
import "./Home.css"; 
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const products = [
    { id: 1, name: "Product 1", price: "$25", image: "/images/product1.jpg" },
    { id: 2, name: "Product 2", price: "$40", image: "/images/product2.jpg" },
    { id: 3, name: "Product 3", price: "$30", image: "/images/product3.png" },
    { id: 4, name: "Product 4", price: "$50", image: "/images/product4.jpg" },
    { id: 5, name: "Product 5", price: "$25", image: "/images/product5.jpg" },
    { id: 6, name: "Product 6", price: "$25", image: "/images/product6.jpg" },
    { id: 7, name: "Product 7", price: "$25", image: "/images/product7.jpg" },
    { id: 8, name: "Product 8", price: "$25", image: "/images/product8.jpg" },
    { id: 2, name: "Product 2", price: "$40", image: "/images/product2.jpg" },
    { id: 3, name: "Product 3", price: "$30", image: "/images/product3.png" },
  ];
  const extraProducts = [
    { id: 5, name: "Product 5", price: "$35", image: "/images/product5.jpg" },
    { id: 6, name: "Product 6", price: "$45", image: "/images/product6.jpg" },
    { id: 7, name: "Product 7", price: "$20", image: "/images/product7.jpg" },
    { id: 8, name: "Product 8", price: "$60", image: "/images/product8.jpg" },
    { id: 1, name: "Product 1", price: "$25", image: "/images/product1.jpg" },
    { id: 2, name: "Product 2", price: "$40", image: "/images/product2.jpg" },
    { id: 3, name: "Product 3", price: "$30", image: "/images/product3.png" },
    { id: 4, name: "Product 4", price: "$50", image: "/images/product4.jpg" },
  ];
  return (
    <div className="home">
      {/* Slideshow Section */}
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
      >
        <div>
          <img src="/images/slide1.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="/images/slide2.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="/images/slide3.jpg" alt="Slide 3" />
        </div>
      </Carousel>

      {/* Shopping Cards Section */}
      <h1 className="special-offer">
  Products
  <hr style={{ backgroundColor: '#f44336' }} />
</h1>
      <div className="product-cards">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <a href="/Order"> <button className="buy-now">Buy Now</button></a>
          </div>
        ))}
      </div>
      <h1 className="special-offer">
  <hr style={{ backgroundColor: '#4caf50' }} />
  Special Offer
  <hr style={{ backgroundColor: '#f44336' }} />
</h1>
      <div className="big-card">
        <img src="/images/featured.png" alt="Featured Product" />
        <div className="big-card-content">
          <h2>Special Offer!</h2>
          <p>Get 50% off on our best-selling product. Limited time offer!</p>
          <a href="/Offers"> <button className="shop-now">Shop Now</button></a>
        </div>
      </div>
     
   {/* Extra Cards Section */}
   <h1 className="special-offer">
  <hr style={{ backgroundColor: '#4caf50' }} />
  Extra Products
  <hr style={{ backgroundColor: '#f44336' }} />
</h1>

      <div className="product-cards">
        {extraProducts.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <a href="/Order"><button className="buy-now">Buy Now</button></a>
          </div>
        ))}
      </div>
      {/* Footer Section */}
      <footer className="footer-details">
        <div className="footer-content">
          <h1>© Podili Vamsi Krishna</h1>
          <h3>Email: vamsikrishna2666@gmail.com</h3>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/your-github-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/your-github-link
            </a>
          </p>
          <p>Follow me on LinkedIn: 
            <a 
              href="https://www.linkedin.com/in/your-linkedin-profile" 
              target="_blank"
              rel="noopener noreferrer"
            > LinkedIn Profile</a>
          </p>
        </div>
      </footer>
</div>
    
  );
};

export default Home;
