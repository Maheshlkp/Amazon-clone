import React from 'react';
import './Home.css';
import Product from './Product';

function Home () {
    return (
        <div className="Home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/NWIxMGIwNWIt/NWIxMGIwNWIt-ZDZhM2EyNTkt-w3000._CB417435430_.jpg" />
                <div className="home__row">
                    <Product id="1" title="The best book Intelligent Investor" price={29.99}
                        image="https://www.investopedia.com/thmb/k-KuJXy6HUSb1No95Ot_ydx6CDA=/2560x2560/filters:no_upscale():max_bytes(150000):strip_icc()/the-intelligent-investor-25099a7263cb499f80de8b20d6b4ab86.jpg"
                        rating={4}
                    />
                    <Product id="2" title="Popular deal Ipad Pro 11" price={220.90}
                        image="https://inlandcellular.com/wp-content/uploads/2019/04/ipad-pro-2018-11-inch-600x600.png"
                        rating={5} />
                    <Product id="2" title="All-new Echo (4th Gen) | With premium sound, smart home hub, and Alexa" price={70.90}
                        image="https://images-na.ssl-images-amazon.com/images/I/613xRVXsMzL._AC_SX425_.jpg"
                        rating={4} />
                </div>
                <div className="home__row">
                    <Product
                        id="3" title="Wired Fitbit Announces Three New Wearables" price={130.99}
                        image="https://media.wired.com/photos/59323ae958b0d64bb35d05b7/master/w_2560%2Cc_limit/fitbit-3-inline.jpg"
                        rating={2}
                    />
                    <Product id="4" title="Mac Book Pro, best laptop with low price" price={1149.99}
                        image="https://img.etimg.com/thumb/width-640,height-480,imgsize-273503,resizemode-1,msid-70450624/magazines/panache/dell-latitude-7400-2-in-1-review-a-great-business-laptop-with-24-hour-battery-life/dell-expresssign-is-one-of-the-most-impressing-features-on-the-laptop-.jpg"
                        rating={4} />
                    <Product title="Amazon Echo,the best Smart speaker with Alexa" price={129.99}
                        image="https://images.idgesg.net/images/article/2019/11/amazon-echo-family-100819672-large.3x2.jpg"
                        rating={4} />

                    <Product title="Digital Camera Vlogging Camera 30MP Full HD 2.7K Vlog Camera with Flip Screen 3 Inch Screen Vlog Camera for YouTube with 2 Batteries" price={429.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71d2aKeALNL._AC_SL1000_.jpg"
                        rating={5} />


                </div>
                <div className="home__row">
                    <Product
                        id="3" title="Minecraft Boys' T-Shirt Pack" price={30.99}
                        image="https://cdn.shopify.com/s/files/1/1755/5355/products/mock-10-2122-14213D-nh-ns-111802514472174936291489614087-3_1800x1800.png?v=1568921901"
                        rating={3}
                    />
                    <Product id="4" title="Spreadshirt Beastie Boys T Shirt | Vintage Beastie Boys Shirts | Men's Pre" price={49}
                        image="https://image.spreadshirtmedia.com/image-server/v1/products/T812A2PA3140PT17X0Y16D1021384975FS3653/views/1,width=650,height=650,appearanceId=2,backgroundColor=f6f6f6,crop=detail,modelId=115,version=1583425928/beastie-boys-beastie-boys-intergalactic-beastie-boys-shirt-beastie-boys-t-shirt-beastie-boys-toddler-shirt-beastie-boys-merch-vintage-beastie-bo.jpg"
                        rating={4} />
                    <Product title="Sated ba girls t shirts full sleeves" price={19.99}
                        image="https://www.dhresource.com/0x0/f2/albu/g1/M01/BF/A7/rBVaGFSrtoWAJ5TrAALnHgFcv6w061.jpg"
                        rating={4} />

                    <Product title="Amazon.com New Cotton T-Shirt Tops Girls Plain Long Full Sleeve Stretch" price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81tfhusRN5L._AC_UL1500_.jpg"
                        rating={5} />
                </div>
                <div className="home__row">
                    <Product id="5" title="Digital TV Europe Samsung TV Plus expands and takes Rakuten TV free – Digi" price={529.50}
                        image="https://images-na.ssl-images-amazon.com/images/I/91BZ7U%2Bn1%2BL._AC_SL1500_.jpg"
                        rating={5} />

                    <Product id="5" title="Harvey Norman Ireland Samsung 32 HD HDR Smart LED TV " price={479}
                        image="https://hniesfp.imgix.net/8/images/detailed/239/All_tvs_Samsung_UE32T4300AKXXU.jpg?fit=fill&bg=0FFF&w=833&h=555&auto=format,compress"
                        rating={5} />

                </div>
            </div>
        </div>

    )
}

export default Home
