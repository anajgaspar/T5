import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function NavbarLogo() {
    return (
        <nav className="navbar sticky-top">
            <div className="container-fluid justify-content-end">
                <div className="navbar-brand">
                    <img id="logo" className="img-fluid" src="/logo.png" alt="logo" width={230} />
                </div>
            </div>
        </nav>
    );
};
