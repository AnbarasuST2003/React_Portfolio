import Summary from "./components/Summary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import AddDetail from "./AddDetail";
import AddSkill from "./AddSkills";
import { useEffect, useState } from "react";
import MyDataService from "./services/my.services";
import ProList from "./components/ProjectList";

function App() {
  const [projectId, setProjectId] = useState([]);

  const getProjectIdHandler = (id) => {
    console.log("The id is", id);
    setProjectId(id);
  };
  // Details

  const [details, setDetails] = useState([]);

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const data = await MyDataService.getAllDetails();
    console.log(data);
    setDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  //id is printed but unable to kniw how to get the data as per id try from karthick
  return (
    <BrowserRouter>
      <Routes>
        {details.map((doc) => {
          return (
            <>
              <Route
                path="/"
                element={
                  <Main
                    hometext={doc.hometext}
                    mobile={doc.mobile}
                    name={doc.name}
                    role={doc.role}
                    mail={doc.mail}
                    abouttext={doc.abouttext}
                    skilltext={doc.skilltext}
                    getProjectIdHandler={getProjectIdHandler}
                  />
                }
              />
              <Route path="/adddetail" element={<AddDetail />} />
              <Route path="/addskill" element={<AddSkill />} />
              <Route
                path="/summary"
                element={
                  <Summary
                    mobile={doc.mobile}
                    name={doc.name}
                    role={doc.role}
                    mail={doc.mail}
                  />
                }
              />
              <Route path="/projectsummary/:projectId" element={<ProList />} />
              {/* <Route
                path="/projectsummary"
                element={<ProList projectId={projectId} />}
              /> */}
            </>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
