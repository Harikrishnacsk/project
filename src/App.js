import NavBar from "./MyAccounts/NavBar";
import Profile from "./MyAccounts/Profile";
import GiftCardAndCoupon from "./MyAccounts/GiftCardAndCoupon";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SizeProfile from "./MyAccounts/SizeProfile";


function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<NavBar/>}>
      <Route index element={<Profile/>}/>
      <Route path="giftcardandcoupon" element={<GiftCardAndCoupon/>}/>
      <Route path="sizeprofile" element={<SizeProfile/>}/>
     </Route>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
