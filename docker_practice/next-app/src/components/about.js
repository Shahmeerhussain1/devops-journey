import Image from "next/image";
import anime from "animejs";
import Plx from "react-plx";
// import Image from '/'

const About = () => {
  const parallaxDataTwo = [
    {
      start: 'self',
      duration: 500,
      properties: [
        {
          startValue:800 ,
          endValue: 0,
          property: "translateY",
        },
      ],
    },
  ];
  const parallaxData = [
    {
      start: 950,
      end: 1400,
      properties: [
        {
          startValue:0 ,
          endValue: 400,
          property: "translateY",
        },
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
      <div className="about" id="about">
        <Plx className="ppllo" parallaxData={parallaxDataTwo}>
        <div className="aboutSubOne">About</div></Plx>
        <Plx className="hsf" parallaxData={parallaxData}>
        <div className="aboutSubTwo">
          <div className="aboutOne">
            <span className="special">
              MULTI-FACETED PERFORMER CURRENTLY BASED IN UNITED STATES<br/>
            </span>
            I'm Sameer Hassan, a passionate singer who has performed in multiple
            countries, bringing smiles and changing atmospheres with my voice. I
            take pride in my compelling stage presence and connection with
            audiences. As I continue my musical journey, I aspire to be a
            versatile singer forever. Join me as I share my passion and create
            unforgettable moments through my performances. Thank you for your
            support!
          </div>
          
        </div>
        </Plx>
        <div className="Ani">♬♩</div>
      </div>
      
    </>
  );
};

export default About;
