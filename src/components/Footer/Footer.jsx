import React from 'react'
import { Link } from 'react-router-dom'
import log from '../../assets/img/log.jpeg'
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="Footer">
        <div className="conteiner">
            <div className="footer-logo">
                <Link style={{display:'flex', justifyContent:'center', alignItems: 'center'}}><img src={log} alt="logo-footer" className="logo-footer" style={{ width: '100px' }}/></Link>
            </div>
            <div className="lorem">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nesciunt fugit voluptates esse doloremque exercitationem, labore, repudiandae possimus sapi</p>
            </div>
            <div className="contacto">
                <ul>
                    <Link><i className="fa-brands fa-facebook" ><FaFacebook/></i></Link>
                    <Link><i className="fa-brands fa-twitter" ><FaTwitter/></i></Link>
                    <Link><i className="fa-brands fa-instagram"> <FaInstagram/></i></Link>
                </ul>
            </div>
        </div>
    </div>
    </>
   
  )
}
/** style={{color: #d6d6d6}}></i>*/
export default Footer