import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ContestsData from "./ContestsData";
import IplCricket from "./IplCricket";
import Footer from "../footer/Footer";
import { getResponse } from "../../Components/Api/CommonAPI";

function Home() {
  const [data, setData] = useState([]);

  const GetData = async () => {
    const response = await getResponse(`api/category`, {});
    setData(...data, response?.data?.data);
  };

  useEffect(() => {
    GetData();
  }, []);


  return (
    <div className="container">
      <section className="advertize">
        <div className="container">
          <div className="advert-wrapper gray-box undefined p-8">
            <span>Sponsored </span>
            <div className="d-flex justify-content-center addvert-code">
              <div style={{ width: "100%", backgroundColor: "black" }}>
                <h1>advertise portion</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="quizContent">
        <Tabs className="tabs_quizContent">
          <TabList className="tabList_quizContent">
            <Tab
              className="tab_quizContent context-menu"
              selectedtabclassname="react-tabs__tab--selected"
            >
              {data[0]?.cat_name}
            </Tab>

            <Tab
              className="tab_quizContent context-menu"
              selectedtabclassname="react-tabs__tab--selected"
            >
              {data[1]?.cat_name}
            </Tab>
          </TabList>
          <TabPanel>
            <ContestsData />
          </TabPanel>
          <TabPanel>
            <IplCricket />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Home;
