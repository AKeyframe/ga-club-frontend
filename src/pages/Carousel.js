import './css/carousel.scss'

export default function Carousel() {

    
    return (
        <><section class="carousel" aria-label="Gallery">
            <ol class="carousel__viewport">
                <li id="carousel__slide1"
                    tabindex="0"
                    class="carousel__slide">
                    <div class="carousel__snapper">
                    <img className="cImg" src="https://image.goat.com/crop/3000/attachments/micropost_pictures/images/014/476/200/original/temp1536163748.jpeg" alt="alternatetext"></img>

                    </div>
                </li>
                <li id="carousel__slide2"
                    tabindex="0"
                    class="carousel__slide">
                    <div class="carousel__snapper"></div>
                    <img className="cImg" src="https://image.goat.com/crop/1500/attachments/micropost_pictures/images/008/707/034/original/87844007-8337-4A30-A8EA-8136CD30DFF9.jpeg" alt="alternatetext"></img>

                </li>
                <li id="carousel__slide3"
                    tabindex="0"
                    class="carousel__slide">
                    <div class="carousel__snapper"></div>
                    <img className="cImg" src="https://sneakers-magazine.com/wp-content/uploads/2016/09/Knucklerkane_for_Sneakers_Mag_Adidas_Purecontrol_ACE16_White-12-1024x683.jpg" alt="alternatetext"></img>


                </li>
                {/* <li id="carousel__slide4"
                    tabindex="0"
                    class="carousel__slide">
                    <div class="carousel__snapper"></div>
                    <img className="cImg" src="https://image.goat.com/crop/1500/attachments/micropost_pictures/images/016/140/165/original/JPEG_20181115_213116_158970195634538847.jpg" alt="alternatetext"></img>
                </li> */}
            </ol>
        </section></>
    );
}