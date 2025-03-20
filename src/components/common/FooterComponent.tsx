export function FooterComponent() {
    return (
        <>             
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-5">

                <div className="container">		
                    <div className="row text-center">						
                        <div className="col-lg-12 col-sm-12 col-xs-12">					
                            <div className="footer_profile">
                                <ul>
                                    <li><a href="https://www.facebook.com/profile.php?id=100078380970388">
                                        <i className="fa-brands fa-facebook fa-xl"></i></a>
                                    </li>
                                    <li><a href="https://www.instagram.com/pythonpanama/">
                                        <i className="fa-brands fa-instagram fa-xl"></i></a>
                                    </li>
                                    <li><a href="https://twitter.com/PythonPanama">
                                        <i className="fa-brands fa-x-twitter fa-xl"></i></a>
                                    </li>
                                    <li><a href="https://www.meetup.com/python-panama/">
                                        <i className="fa-brands fa-meetup fa-2xl"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer_copyright">
                                <a>© 2020 - 2025 Copyright: Python Panamá</a>
                            </div>							
                        </div>					
                    </div>				
                </div>
            </footer>
        </>
    )
}