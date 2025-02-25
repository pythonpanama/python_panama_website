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
                                        <a href="/">
                                            <img alt="Python Panama"  width="250" height="55" src="public/assets/img/logo.png"/>
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
                                                        <a href="/codigo-de-conducta" className="dropdown-item dropdown-toggle active">Código de Conducta</a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <a href="/contacto" className="dropdown-item dropdown-toggle active">Contáctanos</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <button className="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main nav">
                                            <i className="fas fa-bars"></i>
                                        </button>
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