import pythonPanamaLogo from "../../assets/img/logo.png"

export function MenuComponent() {
    return (
        <>
           <div id="header" className="header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyChangeLogo': true, 'stickyStartAt': 30, 'stickyHeaderContainerHeight': 70}">
                <div className="header-body">
                    <div className="header-container container">
                        <div className="header-row">
                            <div className="header-column">
                                <div className="header-row">
                                    <div className="header-logo">
                                        <a href="#">
                                            <img alt="Python Panama"  width="250" height="55" src={pythonPanamaLogo}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="header-column justify-content-end">
                                <div className="header-row">
                                    <div
                                        className="header-nav header-nav-line header-nav-top-line header-nav-top-line-with-border order-2 order-lg-1">
                                        <div
                                            className="header-nav-main header-nav-main-square header-nav-main-effect-2 header-nav-main-sub-effect-1">
                                            <nav className="collapse">
                                                <ul className="nav nav-pills" id="mainNav">
                                                    <li className="dropdown">
                                                        <a href="/" className="dropdown-item dropdown-toggle active">Inicio</a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a href="https://pycon.pa/" className="dropdown-item dropdown-toggle active">PyCon Panamá</a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a href="/contacto" className="dropdown-item dropdown-toggle">Contáctanos</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <button className="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main nav">
                                            <i className="fas fa-bars"></i>
                                        </button>
                                    </div>
                                    <div className="header-nav-features order-1 order-lg-2">
                                        <div className="header-nav-feature header-nav-features-social-icons d-inline-flex">
                                            <ul className="header-social-icons social-icons d-none d-sm-block social-icons-clean ml-0">
                                                <li className="social-icons-facebook">
                                                    <a href="https://www.facebook.com/profile.php?id=100078380970388" target="_blank"
                                                        title="Facebook"><i className="fab fa-facebook"></i></a>
                                                </li>
                                                <li className="social-icons-twitter">
                                                    <a href="https://www.instagram.com/pythonpanama/" target="_blank" title="Instagram"><i
                                                        className="fab fa-instagram"></i></a>
                                                </li>
                                                <li className="social-icons-twitter">
                                                    <a href="https://twitter.com/PythonPanama" target="_blank" title="Telegram">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="social-icons-discord">
                                                    <a href="https://discord.gg/EF5SQCT9" target="_blank" title="Discord"><i
                                                        className="fab fa-discord"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}