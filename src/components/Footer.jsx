import React from 'react'
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <p>5rd Floor</p>
                <p>123-532 lorem Street</p>
                <p>Tel: 020-123-456</p>
                <p>Email: info@dummy.com</p>

            </div>
            <div className='footer-icons'>
                <a href='https://www.facebook.com/'  target="_blank">
                    <FaFacebook className='icon-style'/>
                </a>
                <a  href='https://x.com/' target="_blank">
                    <FaTwitter className='icon-style' />
                </a>
                <a  href='https://www.instagram.com/'  target="_blank">
                    <FaInstagram className='icon-style'/>
                </a>
            </div>

        </footer>
    )
}

export default Footer
