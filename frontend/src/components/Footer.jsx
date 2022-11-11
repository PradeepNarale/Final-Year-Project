import React from 'react'
import "./fotter.css";
const Footer = () => {
    return (
        <div class="mt-5 pt-5  footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-xs-12 about-company">
                        <h2>ECOMM</h2>
                        <p class="pr-5 text-white-50">mollis quam tristique convallis </p>
                        <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
                    </div>
                    <div class="col-lg-3 col-xs-12 links">
                        <h4 class="mt-lg-0 mt-sm-3">Links</h4>
                        <ul class="m-0 p-0">
                            <div>- <a className='footer_link' href="#">About Us</a></div>
                            <div>- <a className='footer_link' href="#">Contact Us</a></div>
                            <div>- <a className='footer_link'  href="#">Terms & Coditions</a></div>
                            
                        </ul>
                    </div>
                    <div class="col-lg-4 col-xs-12 location">
                        <h4 class="mt-lg-0 mt-sm-4">Location</h4>
                        <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
                        <p class="mb-0"><i class="fa fa-phone mr-3"></i>0000000</p>
                        <p><i class="fa fa-envelope-o mr-3"></i>abc@.com</p>
                    </div>
                </div>
                < hr />
                <div class="row mt-3">
                    <div class="col copyright">
                        <p class="text-center"><small class=" text-white-50">© 2022. All Rights Reserved.</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
