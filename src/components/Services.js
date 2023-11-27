import services1 from "../assets/images/services1.jpg";
import services2 from "../assets/images/services2.jpg";
import services3 from "../assets/images/services3.jpg";
import  {Navigation} from "../components/Navigation";
export const Services = () =>{
  return (
    <>
      <Navigation/>
      <div className="container" style={{ marginTop: "11%" }}>
        <div className="row g-3">
          <div className="col-12 col-md-6 col-lg-4">
            <img src={services1} alt="services1" className="card-img-top" />
            <h5 className="card-title">TITULO CARD 1</h5>
            <p className="card-text">
              texto explicativo de la card 1- ouwoieuroiwuroiweurom,
              poirpowirpoweirpo ewrwerpworiwpoirpowirpowirpowiero
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <img src={services2} alt="services2" className="card-img-top" />
            <h5 className="card-title">TITULO CARD 2</h5>
            <p className="card-text">
              texto explicativo de la card 2-soipitopier woeiowuroiwuroweuiro
              wwiueroiwuroiweurw wieruow eiuwoiruo wioeurowurowirwirp
              pwoeirpowirpow iro ewr wieruowwwèripwrwrwe weiurowueroiweuro
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <img src={services3} alt="services3" className="card-img-top" />
            <h5 className="card-title">TITULO CARD 3</h5>
            <p className="card-text">
              texto explicativo de la card 3- woeroiwueriowu wieuoiwuroiwuro
              wowieuroiwuro iwur wioeruwioruowi uer oiw ruiowr. wueroiwureoi
              woieru
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
