import React,{useRef,useEffect} from "react";
import { Select, Space } from "antd";

import BackButtonIcon from "../assets/images/Chat/BackButtonIcon.svg";
import "../styles/CreateFolder.scss";
import ProfilePicIcon from "../assets/images/Chat/ProfilePicIcon.svg";
import Icon from "../assets/icons.svg";

const { Option } = Select;



const CreateFolder = (props) => {

  const handleChange = (x) => {
    console.log(x);
  };
  const usersArray = [
    {
      name: "Sameed",
    },
    {
      name: "Abdullah",
    },
    {
      name: "Zia",
    },
    {
      name: "Awais",
    },
    {
      name: "Bilal",
    },
    {
      name: "Ali",
    },
    {
      name: "Faraz",
    },
    {
      name: "Hassan",
    },
    {
      name: "Salman",
    },
  ];

  const userSearch = [];
  usersArray.map((item, index) => {
    userSearch.push(
      <Option key={index} value={item.name} label={item.name}>
        <Space
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            color:"#fff",
            // width:"100%",
            // background:"none"
            
          }}
        >
          <img
            src={ProfilePicIcon}
            alt="ProfileIcon"
            style={{ width: "30px" }}
          />
          {item.name}
        </Space>
      </Option>
    );
  });

  return (
    <div className="create-folder-container">
      <div className="create-folder-header" onClick={()=>props.back()}>
        <img
          src={BackButtonIcon}
          alt="backButtonIcon"
          style={{ width: "12px", margin: "2px 2px 2px 20px" }}
        />
        <p className="folder-text">Create Folder</p>
      </div>
      <div className="folder-label-and-input-div">
        <label className="folder-label">
          Folder Name <label style={{ color: "rgba(249, 53, 53, 1)" }}>*</label>
        </label>
        <input className="folder-input" />
      </div>
      <div className="add-contacts-label-and-icon-div">
        <label className="assign-icon-label">Assign Icon</label>
        <div className="icon-div">
          <img src={Icon} alt="Icon" style={{width:"100%"}} />
        </div>
      </div>
      <div className="add-contacts-label-and-search-div">
        <label className="add-contacts-label">
          Add Contacts{" "}
          <label style={{ color: "rgba(249, 53, 53, 1)" }}>*</label>
        </label>
        <Select
        // ref={dropdownRef}
        // onDropdownVisibleChange={handleDropdownVisibleChange}
          mode="multiple"
          style={{ width: "100%" }}
          // open={true}
          // popupClassName="folder-dropdown"
          className="add-contacts-search-div"
          onChange={(x) => handleChange(x)}
          clearIcon={true}
          suffixIcon={false}
          listHeight={"100px"}
          dropdownStyle={{
            background:" rgba(38, 38, 41, 1)",
            color:"#fff",
            width:"90%",
            // maxHeight:150,
            // zIndex:1
            // background:"none"

          }}
          // optionLabelProp="label"
          // dropdownRender={(menu) => (
          //   <div
          //     style={{
          //       ...menu,
          //       backgroundColor: "rgba(38, 38, 41, 0.60)",
          //       color: "#fff",
          //       background: "none",
          //     }}
          //   >
          //     {menu}
          //   </div>
          // )}
        >
          {userSearch}
        </Select>
      </div>
      <div className="add-folder-btn-div">
      Create Folder +
      </div>
    </div>
  );
};

export default CreateFolder;
