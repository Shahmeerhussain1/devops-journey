import Plx from "react-plx";
const FirstSection = () => {
  const parallaxData = [
    {
      start: 0,
      end: 250,
      properties: [
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        },
      ],
    },
  ];

  return (
    <>
      {/* <div style={{ width: "100%", position: "fixed" }}>
        <nav id="NavBar">
          <ul className="dul">
            <a href="#about">
              <li>ABOUT </li>
            </a>{" "}
            <a href="#Art">
              <li>ART</li>
            </a>{" "}
            <a href="#bookMe">
              {" "}
              <li>BOOK ME</li>
            </a>{" "}
          </ul>
        </nav>
      </div> */}

      <main>
        <div className="raghalai">پخېر راغلې</div>

        <Plx className="frist" parallaxData={parallaxData}>
          <div className="Muqabla">
            <div className="greet">Hi I’m</div>
            <div>
              <h1 className="mianInt">Samir<span className="hassan"> Hassan</span> </h1>
            </div>
            <div className="passIo">
              <span className="artist">Artist</span>{" "}
              <span className="musician">Musician</span>{" "}
              <span className="singer">Singer</span>{" "}
            </div>
          </div>
        </Plx>
        {/* <marquee className="mrqeDiv">
          ♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩♫𝄞♪♬♩
        </marquee> */}
      </main>
    </>
  );
};
export default FirstSection;
