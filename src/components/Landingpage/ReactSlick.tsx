import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: false
  };

  return (
    <Slider {...sliderSettings}>
      <div>
        <img src="http://placekitten.com/g/400/400" alt="randomOne" />
        {/* <img height={300} width={300} alt="ricardavatar" src="/images/rikardslider.png" />
        <button className="text-white p-4 bg-[#6355d8]">Chat with Rikard's interview bot</button> */}
      </div>
      <div>
        <img src="http://placekitten.com/g/400/400" alt="randomTwo" />
        {/* <img height={300} width={300} alt="brionyavatar" src="/images/brionyslider.png" />
        <button className="text-white p-4 bg-[#6355d8]">Chat with Briony's interview bot</button> */}
      </div>
      <div>
        <img src="http://placekitten.com/g/400/400" alt="randomThree" />
        {/* <img height={300} width={300} alt="neilavatar" src="/images/neilslider.png" />
        <button className="text-white p-4 bg-[#6355d8]">Chat with Neil's interview bot</button> */}
      </div>
      <div>
        <img src="http://placekitten.com/g/400/400" alt="randomThree" />
        {/* <img height={300} width={300} alt="neilavatar" src="/images/neilslider.png" />
        <button className="text-white p-4 bg-[#6355d8]">Chat with Neil's interview bot</button> */}
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
}
