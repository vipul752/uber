const LocationSearchPanel = (props) => {
  console.log(props);

  const location = [
    {
      id: 1,
      name: "24B ,Near Kappors cafe sheryain coding school ,bhopal",
    },
    {
      id: 2,
      name: "2B ,Near bloom school ,bhopal",
    },
    {
      id: 3,
      name: "Aloki hospital,sector-11 pratap vihar ,ghaziabad",
    },
  ];
  return (
    <div>
      {location.map((loc) => (
        <div
          onClick={() => {
            props.setvehicalPanel(true);
            props.setPanelOpen(false);
          }}
          key={loc.id}
          className="flex items-center p-2 border-b border-gray-200"
        >
          <i className="ri-map-pin-line text-xl text-gray-500"></i>
          <h4 className="ml-2">{loc.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
