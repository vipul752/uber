const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.setvehicalPanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-fill text-3xl bg-white"></i>
      </h5>
      <h4 className="text-2xl font-semibold mb-5">Choose a Vehicle</h4>
      <div
        onClick={() => {
          props.setconfirmRidePanel(true);
        }}
        className="flex border-2 mb-3  active:border-black  rounded-xl w-full p-3 items-center justify-between "
      >
        <img
          className="h-10"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 min Away</h5>
          <p className="font-normal text-xs text-gray-600">
            Afforable, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">$193.20</h2>
      </div>
      <div
        onClick={() => {
          props.setconfirmRidePanel(true);
        }}
        className="flex border-2 mb-3  active:border-black rounded-xl w-full p-3 items-center justify-between "
      >
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill">2</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 min Away</h5>
          <p className="font-normal text-xs text-gray-600">
            Afforable, motorcycle rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">$93.20</h2>
      </div>
      <div
        onClick={() => {
          props.setconfirmRidePanel(true);
        }}
        className="flex border-2 mb-3  active:border-black rounded-xl w-full p-3 items-center justify-between "
      >
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            Auto{" "}
            <span>
              <i className="ri-user-3-fill">3</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 min Away</h5>
        </div>
        <h2 className="text-xl font-semibold">$13.20</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
