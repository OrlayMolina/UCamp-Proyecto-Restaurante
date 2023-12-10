import Header from "./Header";
import Footer from "./Footer";

function Layout() {
    return (
        <>
            <Header />
            <main>
                <h2 className="text-6xl">Desde el Main ...</h2>
            </main>
            <Footer />
        </>
      );
      
}

export default Layout;
