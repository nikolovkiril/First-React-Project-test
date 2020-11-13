import React from 'react'
import model from './png/model2.png';
import model1 from './png/model.jpg';
import model2 from './png/aaaa.jpg';
import model3 from './png/b.jpg';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src={model}
                alt=""
            />

            {/* Product with id, title, price , image */}
            <div className="home__row">
                <Product
                    id="a14"
                    title="asf asfda fas fa " //limit charackters as input 
                    price={10.00}
                    rating={5}
                    image={model1}
                />
                <Product
                    id="a1133"
                    title="Aasdzz AasdzzA asdzz"
                    price={112.00}
                    rating={5}
                    image={model2}
                />
                <Product
                    id="a12"
                    title="Azz"
                    price={10.00}
                    rating={5}
                    image={model1}
                />
            </div>
            
            <div className="home__row">
                <Product
                    id="a164"
                    title="Azz"
                    price={100.00}
                    rating={5}
                    image={model3}
                />


            </div>
        </div>
    )
}

export default Home
