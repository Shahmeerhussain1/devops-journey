import { booking_1 } from "@/assets";
import Image from "next/image";
import Plx from "react-plx";
const BookMe = () => {
  const parallaxDataTwo = [
    {
      start: "self",
      duration: 400,
      properties: [
        {
          startValue: 800,
          endValue: 0,
          property: "translateY",
        },
      ],
    },
  ];
  return (
    <>
      <div className="bookMe" id="bookMe">
        <Plx parallaxData={parallaxDataTwo}>
          <div className="bookMeSubOne">Book Me</div>
        </Plx>
        <div className="bookMeSubTwo">
          <div className="bookMeOne">
            <div class="subscribe">
              <p>BOOK ME</p>
              <form>
                <input
                  placeholder="Your Name"
                  class="subscribe-input"
                  name="email"
                  type="text"
                />
                <input
                  placeholder="Your e-mail"
                  class="subscribe-input"
                  name="email"
                  type="email"
                />
                <input
                  placeholder="Your Phone"
                  class="subscribe-input"
                  name="email"
                  type="text"
                />
                <input
                  placeholder="Event Type (birthday ,wedding eg)"
                  class="subscribe-input"
                  name="email"
                  type="text"
                />
                <input
                  placeholder="Event date"
                  class="subscribe-input"
                  name="email"
                  type="date"
                />
                <input
                  placeholder="Event address"
                  class="subscribe-input"
                  name="email"
                  type="text"
                />
              </form>
              <br />
              <div class="submit-btn">SUBMIT</div>
            </div>
          </div>
        </div>

        <footer class="footer">
          {/* <img src="your-image.png" alt="Logo">
           */}
          {/* <Image src={booking_1} width={50} height={50} alt="" />
           */}
          <div className="fName">S H</div>
          <div class="slogan">
            Hi, I Sameer Hassan, an accomplished artist, singer, and musician,
            captivates audiences with my soulful melodies and unique creative
            expression.
          </div>
          <div class="social-icons">
            <a
              target="blank"
              href="https://www.facebook.com/samirhassan.offical/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FFFFFF"
                width="24"
                height="24"
              >
                <path d="M23.9983 12c0-6.6274-5.3726-11.9983-11.9997-11.9983C5.37259.0017.00165 5.3726.00165 12c0 5.9817 4.36043 10.9274 10.0807 11.873v-8.377H7.09148V12h2.99134V9.2797C10.0836 6.6817 11.8971 5 14.4376 5c1.3054 0 2.5098.2348 2.5098.2348v2.763h-1.3437c-1.3897 0-1.8197.8662-1.8197 1.7569V12h3.0989l-.4978 3.8737h-2.6011v8.377C19.6376 22.9274 23.9983 17.9817 23.9983 12z" />
              </svg>
            </a>

            <a
              target="blank"
              href="https://www.instagram.com/p/BgdWWz-H2gK/?hl=en"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                width="24"
                height="24"
                viewBox="0 0 2476 2476"
                id="instagram"
              >
                <path d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5" />
              </svg>
            </a>
            <a target="blank" href="https://www.youtube.com/@OmarzadProduction">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFFFFF"
                width="24"
                height="24"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="youtube"
              >
                <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z" />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};
export default BookMe;
