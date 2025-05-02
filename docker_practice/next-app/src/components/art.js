import Plx from "react-plx";


const Art = () => {
    const parallaxDataTwo = [
        {
          start: 'self',
          duration: 400,
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
          start: 1800,
          end: 2200,
          properties: [
            {
              startValue: 1,
              endValue: 0.3,
              property: "opacity",
            },
          ],
        },
      ];
  return (
    <>


      <div className="Art" id="Art">
      <Plx className="ppllo" parallaxData={parallaxDataTwo}>

        <div className="ArtSubOne">My Art</div>
        </Plx>
      <Plx className="jfty" parallaxData={parallaxData}>
        <div className="ArtSubTwo">
          <div className="ArtOne">
            
        
         <a target="blank" href="https://youtu.be/vEOJ7_CKv6c"> <div class="card1"></div></a>
         <a  target="blank" href="https://www.youtube.com/watch?v=4zLONh4pPXs"><div class="card2"></div></a>
          <a  target="blank" href="https://www.youtube.com/watch?v=1ODECIAgrJk"><div class="card3"></div></a>

           
          </div>
         
        </div>
</Plx>
      </div>






      {/* <div id="card" class="card">
        <div class="content">
          <div class="front">
            <h3 class="title">Hey</h3>
            <p class="subtitle">Hover me :)</p>
          </div>

          <div class="back">
            <p class="description">
              Cool description so you can read it too my friend
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Art;
