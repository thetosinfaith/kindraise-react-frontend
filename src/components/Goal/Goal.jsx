import React from "react";
import "./goal.css";

const Goal = () => {
  return (
    <div className="goalBody">
      <div className="goalTitleBox">
        <h3>Goal</h3>
        <div>Add a goal and progress bar to your campaign.</div>
      </div>
      <div className="goalInputBox">
        <div className="goalInput">
          <div>
            Title<span>*</span>
          </div>
          
          <div className="goalInputContainer">₦<input type="text" onChange={(e) => setTitle(e.target.value)} /></div>
          <div className="goalFirstText">You keep the money you raise, Regardless of whether you hit your goal.</div>
        </div>
        <div className="goalDateBox">
          <div>
            <h3>End Date</h3>
            <div className="goalDateText">Add an end date/countdown to your page</div>
          </div>
          <div>toggle</div>
        </div>
        <div className="SaveBtnBox">
          <button className="goalSaveBtn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Goal;
