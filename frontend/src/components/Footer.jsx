import React from 'react'
import "./fotter.css";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
    return (
        <div className="footer-section mt-5">
            <div className="footer-item">
                <h2> Compony </h2>
                <p> <a href=""> about Us</a></p>
                <p> <a href=""> Contact Us</a></p>
                <p> <a href=""> Our Services</a></p>
                <p> <a href="">Privacy Policy</a></p>
            </div>
            <div className="footer-item">
                <h2> Get Help</h2>
                <p> <a href=""> FAQ</a></p>
                <p> <a href=""> Shipping</a></p>
                <p> <a href=""> Returns</a></p>
                <p> <a href="">Payment Option </a></p>
            </div>
            <div className="footer-item">
                <h2> Online Shop </h2>
                <p> <a href="">Blog</a></p>
                <p> <a href=""> Watch</a></p>
                <p> <a href=""> Shoes</a></p>
                <p> <a href="">Bress</a></p>
            </div>
            <div className="footer-item social">
                <h2>Follow Us</h2>
                <div className='item'>
                    <p> <FacebookSharpIcon fontSize="large" />  </p>
                    <p> <GitHubIcon fontSize="large" /></p>
                    <p> <GoogleIcon fontSize="large" /></p> 
                    </div>
            </div>
        </div>
    )
}

export default Footer
