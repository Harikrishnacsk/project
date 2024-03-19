import NavBar from "./MyAccounts/NavBar";
import Profile from "./MyAccounts/Profile";
import GiftCardAndCoupon from "./MyAccounts/GiftCardAndCoupon";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SizeProfile from "./MyAccounts/SizeProfile";
import ManageAddress from "./MyAccounts/ManageAddress";
import Learn from "./Learn/Learn";
import Basepage from "./Mayilmark/Basepage";
import Basecrud from "./CRUD/basecrud";



function App() {
  return (
    <Basecrud/>
    //<Basepage/>
   // <Learn/>
    //  <BrowserRouter>
    //  <Routes>
    //   <Route path="/" element={<NavBar/>}>
    //   <Route path="profile" element={<Profile/>}/>
    //   <Route path="manageaddress" element={<ManageAddress/>}/>
    //   <Route path="giftcardandcoupon" element={<GiftCardAndCoupon/>}/>
    //   <Route path="sizeprofile" element={<SizeProfile/>}/>
    //  </Route>
    //  </Routes>
    //  </BrowserRouter>
  );
}

export default App;
