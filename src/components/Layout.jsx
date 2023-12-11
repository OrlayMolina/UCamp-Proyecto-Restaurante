import Header from "./Header";
import Footer from "./Footer";
import Index from "../pages/Index";
import ReservationForm from './ReservationForm';

function Layout() {
    return (
        <>
            <Header />
            <Index />
            <main>
                <ReservationForm />
            </main>
            
            
            <Footer />
        </>
      );
      
}

export default Layout;
