import React, { useEffect, useState } from "react";
import "./css/create.css";
import useLocalStorage from "use-local-storage";
import Content from "../components/Content/Content";
import Goal from "../components/Content/Goal";
import Share from "../components/Content/Share";
import { useNavigate } from "react-router-dom";

const CreateCampaign = () => {
  const Nav = useNavigate()
  // useEffect(()=>{
  //   setActiveHead('content')
  //   // fetch data from local storage and set state
  // },[])
  const [title, setTitle] = useState()
  // console.log(Number(title))

  const [activeComponent, setActiveComponent] = useLocalStorage('A');
  const [activeHead, setActiveHead] = useLocalStorage('A')
  useEffect(()=>{
    if (activeComponent === "B") {
      setActiveComponent("B");
    } else if (activeComponent === "C"){
      setActiveComponent("C");
    } else {
      setActiveComponent("A");
    }
  },[])

  const renderComponent = () => {  
    switch (activeComponent) {  
        case 'A':  
            return <Content setTitle={setTitle}/>;  
        case 'B':  
            return <Goal />;  
        case 'C':  
            return <Share />;  
        default:  
            return <Content />;  
    }  
}; 


  const content =()=>{
    setActiveHead('A')
    setActiveComponent('A')
  }
  const goal =()=>{
    setActiveHead('B')
    setActiveComponent('B')
  }
  const sharing =()=>{
    setActiveHead('C')
    setActiveComponent('C')
  }

  return (
    <div className="createBody">
      <h2 className="createName">Create a New Campaigns</h2>
      <div className="createContent">
        <div className="createHead">
          <div className="createSmallHeader">
            <div onClick={content} className={activeComponent==="A"? "active" : "notActive"}>Content</div>
            <div onClick={goal} className={activeComponent==="B"? "active" : "notActive"}>Goal</div>
            <div onClick={sharing} className={activeComponent==="C"? "active" : "notActive"}>Sharing</div>
          </div>
          <div>hello</div>
        </div>

        <div className="create">
        {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
