import { Link } from "react-router-dom";
import './css/index.scss'
import Carousel from "./Carousel";

export default function Index(props) {
    return (
        <div>
            {/* <div className="carousel">
                <Carousel />
            </div> */}
            <div className='index'>
                <div className="img_sneakers">
                    &nbsp;
                </div>


                <div className='cardImgs'>
                    <div className="shop_mens">
                        <Link to='/sneakers'>
                            <h2>Men's Sneakers</h2>
                        
                            <img className='displayImg' src='https://image.goat.com/crop/3000/attachments/micropost_pictures/images/008/102/013/original/919534CD-FDE9-48BE-A858-4FDFE575BD1B.jpeg' alt='mens_sneakers' width='400px' height='450px' />
                        </Link>
                    </div>

                    <div className="shop_wmns">
                        <Link to='/sneakers'>
                            <h2>Women's Sneakers</h2>
                            <img className='displayImg' src='https://i.pinimg.com/564x/62/a5/d0/62a5d0c77df80b1262287768f20ed731.jpg' alt='womens_sneakers' width='400px' height='450px' />
                        </Link>
                    </div>

                    <div className="shop_kids">
                        <Link to='/sneakers'>
                            <h2>Kid's Sneakers</h2>
                            <img className='displayImg' src='https://justfreshkicks.com/wp-content/uploads/2016/08/14063912_10154379115782978_2847083746988070319_n.jpg'
                            alt='kids_sneakers' width='400px' height='450px'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}