const Footer = () => {
    return (
      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container">
          <div className="row">
  
            <div className="col-md-4 mb-3">
              <h5>Book Management System</h5>
              <p>Your trusted platform for managing and organizing book inventory efficiently.</p>
            </div>
  
            <div className="col-md-4 mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light text-decoration-none">Home</a></li>
                <li><a href="#" className="text-light text-decoration-none">Add Book</a></li>
                <li><a href="#" className="text-light text-decoration-none">Manage Books</a></li>
                <li><a href="#" className="text-light text-decoration-none">Categories</a></li>
              </ul>
            </div>
  
            <div className="col-md-4 mb-3">
              <h5>Contact Us</h5>
              <p>Email: support@bookmanager.com</p>
              <p>Phone: +91 98765 43210</p>
            </div>
  
          </div>
  
          <hr className="border-secondary" />
          <p className="text-center mb-0">&copy; {new Date().getFullYear()} Book Management System. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  