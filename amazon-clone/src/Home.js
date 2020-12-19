import React from 'react';
import './Home.css';
import Product from './Product';

function Home () {
    return (
        <div className="Home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-D-acc13ae3-83f8-4057-9c70-21bf7857e7e1._CB429868646_.jpg" />
                <div className="home__row">
                    <Product  id="1" title="The best book Intelligent Investor" price={29.99}
                        image="https://www.investopedia.com/thmb/k-KuJXy6HUSb1No95Ot_ydx6CDA=/2560x2560/filters:no_upscale():max_bytes(150000):strip_icc()/the-intelligent-investor-25099a7263cb499f80de8b20d6b4ab86.jpg"
                        rating={4}
                    />
                    <Product id="2" title="Popular deal Ipad Pro 11" price={20.90}
                        image="https://inlandcellular.com/wp-content/uploads/2019/04/ipad-pro-2018-11-inch-600x600.png"
                        rating={5} />

                </div>
                <div className="home__row">
                    <Product
                       id="3" title="Wired Fitbit Announces Three New Wearables" price={30.99}
                        image="https://media.wired.com/photos/59323ae958b0d64bb35d05b7/master/w_2560%2Cc_limit/fitbit-3-inline.jpg"
                        rating={2}
                    />
                    <Product id="4" title="Mac Book Pro, best laptop with low price" price={49.99}
                        image="https://img.etimg.com/thumb/width-640,height-480,imgsize-273503,resizemode-1,msid-70450624/magazines/panache/dell-latitude-7400-2-in-1-review-a-great-business-laptop-with-24-hour-battery-life/dell-expresssign-is-one-of-the-most-impressing-features-on-the-laptop-.jpg"
                        rating={4} />
                    <Product title="Amazon Echo,the best Smart speaker with Alexa" price={29.99}
                        image="https://images.idgesg.net/images/article/2019/11/amazon-echo-family-100819672-large.3x2.jpg"
                        rating={4} />

                </div>
                <div className="home__row">
                    <Product id="5" title="Digital TV Europe Samsung TV Plus expands and takes Rakuten TV free – Digi" price={529.50}
                        image="https://images-na.ssl-images-amazon.com/images/I/91BZ7U%2Bn1%2BL._AC_SL1500_.jpg"
                        rating={5} />

                </div>
            </div>
        </div>

    )
}

export default Home
