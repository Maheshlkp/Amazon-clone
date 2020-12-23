import React from 'react';
import "./Footer.css";
import { textAlign } from '@material-ui/system';

function Footer () {
    return (
        <div className="footer">
            <div class="d-flex flex-column">
                <div>
                    <img className="header__logo" src="https://bloximages.chicago2.vip.townnews.com/kenoshanews.com/content/tncms/assets/v3/editorial/0/56/05663cea-77e2-5e21-8a79-53e9a96e9acc/5f1f3d4695a1a.image.jpg" />
                </div>
                <div className="footer__pages">
                    <h5 className="title">Amazon Rewards Visa Signature Cards</h5>
                    <h5 className="title">Amazon Business Line of Credit</h5>
                    <h5 className="title">Shop with Points</h5>
                    <h5 className="title">Credit Card Marketplace</h5>
                    <h5 className="title">Reload Your Balance</h5>
                </div>
            </div>


            <div className="footer__links" md="6">
                <h5 className="title">
                    Let Us Help You</h5>
                <ul>
                    <h4 className="list-unstyled">
                        <a href="#!">Amazon and COVID-19</a>
                    </h4>
                    <h4 className="list-unstyled">
                        <a href="#!">Shipping Rates & Policies</a>
                    </h4>
                    <h4 className="list-unstyled">
                        <a href="#!">Manage Your Content and Devices</a>
                    </h4>
                    <h4 className="list-unstyled">
                        <a href="#!">Returns & Replacements</a>
                    </h4>
                </ul>
                <a href="https://amazon.com">Amazon.com</a>
                <span>&copy; 2020 Best Shopping website developed by Mahesh</span>
            </div>
        </div>
    )
}

export default Footer
