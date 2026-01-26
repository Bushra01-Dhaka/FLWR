import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PlantCollections from "../Home/Plants/PlantCollections";
import FlowerCollection from "../FlowerCollection/FlowerCollection";

const OurServices = () => {
  return (
    <div className="flex justify-center items-center py-20 lg:px-20 lg:py-40 bg-secondary">
      <div>
        <div className="">
             <h2 className="font-outfit text-center text-4xl pb-10  lg:text-5xl font-bold text-info">Explore Our Services</h2>
        </div>
        <Tabs>
          <TabList className="flex flex-wrap lg:flex-row text-info justify-center items-center gap-4 lg:pb-20 pb-6">
            <Tab className="text-lg p-4 border-1 cursor-pointer border-info">Bouquet Collections</Tab>
            <Tab className="text-lg p-4 border-1 cursor-pointer border-info">Events</Tab>
            <Tab className="text-lg p-4 border-1 cursor-pointer border-info">Plants</Tab>
            <Tab className="text-lg p-4 border-1 cursor-pointer border-info">Hampers</Tab>
            <Tab className="text-lg p-4 border-1 cursor-pointer border-info">Gift Cards</Tab>
          </TabList>

          <TabPanel>
             <FlowerCollection></FlowerCollection>
          </TabPanel>
          <TabPanel>
            <h2>All Events data will show here</h2>
          </TabPanel>
          <TabPanel>
            <PlantCollections></PlantCollections>
          </TabPanel>
          <TabPanel>
            <h2>All Hampers data will show here</h2>
          </TabPanel>
          <TabPanel>
            <h2>All Gift Cards data will show here</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurServices;
