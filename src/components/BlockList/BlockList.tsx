
import List from '../List/List.tsx';
import aboutCompanyImg from "../../assets/uploads/about-company.jpg";
import './BlockList.css';


const BlockList = () => {
  return (
    <div className="block-list">
      <div className="block-img">
        <img src={aboutCompanyImg} alt="about company"/>
      </div>

      <List/>
    </div>
  );
};

export default BlockList;