import React from 'react';
import './../App.css';
import Image1 from './Image1.png';
import Icon1 from './Icon1.png';
import Icon2 from './Icon2.png';

const Home = () => {
    return (
        <div>
            <div className="sidebar">
                <div className="sidebar-item">
                    <i className="fas fa-user-circle"></i>
                    <div className="user-info">
                        <img src={Image1} alt="User Image" className="user-image" />
                        <div className="user-name">Nishyan</div>
                    </div>
                </div>
                <div className="visit-store">Visit store</div>
                <div className="sidebar-item"><i className="fas fa-home"></i>Home</div>
                <div class="sidebar-item"><i class="fas fa-shopping-cart"></i>Orders</div>
                <div class="sidebar-item"><i class="fas fa-box"></i>Products</div>
                <div class="sidebar-item"><i class="fas fa-truck"></i>Delivery</div>
                <div class="sidebar-item"><i class="fas fa-bullhorn"></i>Marketing</div>
                <div class="sidebar-item"><i class="fas fa-chart-line"></i>Analytics</div>
                <div class="sidebar-item"><i class="fas fa-money-check-alt"></i>Payouts</div>
                <div class="sidebar-item"><i class="fas fa-percent"></i>Discounts</div>
                <div class="sidebar-item"><i class="fas fa-users"></i>Audience</div>
                <div class="sidebar-item"><i class="fas fa-paint-brush"></i>Appearance</div>
                <div class="sidebar-item"><i class="fas fa-plug"></i>Plugins</div>
                <div className="credits">Available credits: 222.10</div>
            </div>
            <div className="main">
                <header>
                    <nav>
                        <ul>
                            <li><a href="#"><strong>Payouts</strong></a></li>
                            <li><a href="#">How it works</a></li>
                        </ul>
                    </nav>
                    <div className="search-bar">
                        <input type="text" placeholder="Search features, tutorials, etc." />
                    </div>
                    <div className="icons">
                        <img src={Icon1} alt="User Image" className="icon1" />
                        <img src={Icon2} alt="User Image" className="icon1" />
                    </div>
                </header>

                <div className="main-content">
                    <h1>Overview</h1>
                    <div className="summary-boxes hell">
                        <div className="summary-box">
                            <h2>Next Payout: ₹2,312.23</h2>
                            <p>23 orders</p>
                            <p>Next payout date Today, 04:00PM</p>
                        </div>

                        <div className="summary-box">
                            <h2>Amount Pending: ₹92,312.20</h2>
                            <p>13 orders</p>
                        </div>
                        <div className="summary-box">
                            <h2>Amount Processed: ₹23,932,312.19</h2>
                        </div>
                    </div>
                    <br /><br />
                    <h1>Transactions | This Month</h1>
                    <br />
                    <p>Payouts (22) &nbsp;&nbsp;&nbsp;&nbsp; Refunds (1)</p>
                    <br /><br />
                    <input type="text" placeholder="" className="test" />
                    <table class="transactions-table">
            <tr>
                <th>Order ID</th>
                <th>Status</th>
                <th>Transaction ID</th>
                <th>Order amount</th>
                <th>Transaction fees</th>
                <th>Total</th>
            </tr>
            <tr>
                <td>#281209</td>
                <td><div class="status processing">Processing</div></td>
                <td>316346345747</td>
                <td>₹1025.00</td>
                <td>₹125.00</td>
                <td>₹912</td>
            </tr>
            <tr>
                <td>#281208</td>
                <td><div class="status successful">Successful</div></td>
                <td>316346345747</td>
                <td>₹1025.00</td>
                <td>₹125.00</td>
                <td>₹912</td>
            </tr>
            <tr>
                <td>#281207</td>
                <td><div class="status successful">Successful</div></td>
                <td>316346345747</td>
                <td>₹1025.00</td>
                <td>₹125.00</td>
                <td>₹912</td>
            </tr>
            <tr>
                <td>#281206</td>
                <td><div class="status successful">Successful</div></td>
                <td>316346345747</td>
                <td>₹1025.00</td>
                <td>₹125.00</td>
                <td>₹912</td>
            </tr>
            <tr>
                <td>#281205</td>
                <td><div class="status successful">Successful</div></td>
                <td>316346345747</td>
                <td>₹1025.00</td>
                <td>₹125.00</td>
                <td>₹912</td>
            </tr>
            </table>
                </div>
            </div>
        </div>
    );
}

export default Home;
