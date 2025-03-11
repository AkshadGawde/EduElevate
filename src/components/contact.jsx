import React from "react";
// const initialState = {
//   name: "",
//   email: "",
//   message: "",
// };

export const Contact = (props) => {
  // const [{ name, email, message }, setState] = useState(initialState);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setState((prevState) => ({ ...prevState, [name]: value }));
  // };

  // const clearState = () => setState({ ...initialState });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Submitted:", { name, email, message });
  //   clearState();
  // };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>Press the button to open a WhatsApp chat with us</p>
              </div>
              {/* <div className="btn-container">
                <a
                  href="https://wa.me/917208549842"
                  className="btn btn-custom btn-lg"
                >
                  Contact us on WhatsApp
                </a>
              </div> */}
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <span>
                <i className="fa fa-map-marker"></i> Address
              </span>{" "}
              <a href="https://g.co/kgs/Ya49vZC">
                <span> {props.data ? props.data.address : "loading"}</span>
              </a>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <span>
                <i className="fa fa-envelope-o"></i> Email
              </span>{" "}
              <a href="mailto:advanceclasses01@gmail.com">
                <span>{props.data ? props.data.email : "loading"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p className="mt-8 text-xl text-center">
            © 2024{" "}
            <a
              href="https://67d065cd6cf1e58161d75911--silver-sfogliatella-7c260f.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              EDUELEVATE
            </a>{" "}
            - All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};
