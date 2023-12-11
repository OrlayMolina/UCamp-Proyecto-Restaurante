import Header from "./Header";
import Footer from "./Footer";
import Index from "../pages/Index";
import Description from "./Description";
import ReservationForm from './ReservationForm';

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Index />
                <Description />
                <ReservationForm />
            </main>
            
            
            <Footer />
        </>
      );
      
}

export default Layout;
