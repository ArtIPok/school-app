import { ContactDataComponent } from "./ContactDataComponent";
import { GoogleMap } from "./GoogleMap";
import "./ContactComponent.scss";

export const ContactComponent = () =>{
  return (
    <div className="ContactComponent container mt-5" id="contact">
    <div className="row align-items-center">
      <div className="col-12 col-lg-6">
        <GoogleMap />
      </div>
      <div className="col-12 col-lg-6 text-center">
      <ContactDataComponent />
      </div>
    </div>
    </div>
  )
}