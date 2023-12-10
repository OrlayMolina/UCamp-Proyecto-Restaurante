import Header from "./Header";
import Footer from "./Footer";
import Index from "../pages/Index";

function Layout() {
    return (
        <>
            <Header />
            <main>
                <h2 className="text-6xl">Desde el Main ...</h2>
            </main>
            <Index />
            <Footer />
        </>
      );
      
}

export default Layout;
