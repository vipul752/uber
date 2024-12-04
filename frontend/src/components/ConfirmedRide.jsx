const ConfirmedRide = (props) => {
  return (
    <div className="h-[530px] relative overflow-hidden">
      <h5
        className="p-1 text-center w-[93%] absolute top-0 "
        onClick={() => {
          props.setconfirmRidePanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-fill text-3xl bg-white"></i>
        <h4 className="text-2xl font-semibold mb-5">Confirm your Ride</h4>

        <div className="flex gap-2 justify-between flex-col items-center">
          <img
            className="h-20"
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
            alt="cars"
          />
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium text-left">562/11-A</h3>

                <p className="text-sm -mt-1 text-gray-500 ">
                  Kaikondrahalli,Bengulurur,Karanataka
                </p>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="text-lg ri-square-fill"></i>
              <div>
                <h3 className="text-lg font-medium text-left">562/11-A</h3>

                <p className="text-sm -mt-1 text-gray-500 ">
                  Kaikondrahalli,Bengulurur,Karanataka
                </p>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 ">
              <i className="text-lg ri-wallet-line"></i>
              <div>
                <h3 className="text-lg font-medium text-left">$193.50</h3>

                <p className="text-sm text-left -mt-1 text-gray-500 ">Cash</p>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <button
            onClick={() => {
              props.setVehicleFound(true);
              props.setconfirmRidePanel(false);
            }}
            className="w-full text-white bg-black font-semibold p-2 rounded-lg "
          >
            Confirm
          </button>
        </div>
      </h5>
    </div>
  );
};

export default ConfirmedRide;
