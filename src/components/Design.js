import React from "react";

function Design({ finalCroppedImage }) {
  return (
    <>
      <div class="container mb-5 social_section" id="main-container">
        <div class="row h-100">
          <div class="col-lg-5 insta_profile overflow-scroll">
            <img
              className=""
              src={require("../assets/img/inst.png")}
              alt="image"
            />
            {finalCroppedImage != "" && finalCroppedImage != null && (
              <img className="profile" src={finalCroppedImage} alt="image" />
            )}
          </div>
          <div class="col-lg-5 whatsapp_profile overflow-scroll">
            <img
              className=" "
              src={require("../assets/img/whatsapp.jpeg")}
              alt="image"
            />
            {finalCroppedImage != "" && finalCroppedImage != null && (
              <>
                <img className="profile2" src={finalCroppedImage} alt="image" />
                <img className="profile3" src={finalCroppedImage} alt="image" />
              </>
            )}
          </div>

          <div class="col-lg-2 social_add h-auto d-flex justify-content-center align-items-center fw-bolder">add space</div>
        </div>
        <div className="col-12 mt-5 mb-5 d-flex flex-column justify-content-center align-items-center">
          <h5 className="fw-bold">important</h5>
          <p className="imp_instr text-center">
            we do not save any data or pictures. We care about privacy and
            therefore you can use our tools securely.{" "}
          </p>
        </div>
        <div className="upload_sec_add fw-bolder col-12 mt-4 d-flex justify-content-center align-items-center">
          ad space
        </div>
      </div>
    </>
  );
}

export default Design;
