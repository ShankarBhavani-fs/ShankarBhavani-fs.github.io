// src/components/Footer.tsx
import React, { useState } from "react";
import { 
  FaLinkedin, 
  FaGithub, 
  FaMedium, 
  FaHandshake, 
  FaEnvelope,
  FaPaperPlane,
  FaTimes,
  FaChartLine,
  FaUserCircle,
  FaQrcode
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import qrCodeImage from "../assets/bhavani-shankar.png";
import emailjs from '@emailjs/browser';
import AnalyticsModal from "./AnalyticsModal";
import "./Footer.css";

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage('');

    try {
      await emailjs.send(
        'service_gbiuzwr',
        'template_v3vg9r8',
        {
          name: 'Bhavani Shankar',
          time: new Date().toLocaleString(),
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'pTp65dpRqTkpMTAN2'
      );
      
      setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setIsModalOpen(false);
        setStatusMessage('');
      }, 2000);
    } catch (error) {
      setStatusMessage('Failed to send message. Please try again or email directly.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <footer id="footer" className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Connect With Me</h3>
          <div className="footer-social-links">
            <a
              href="https://www.linkedin.com/in/shankar-bhavani"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link linkedin"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ExperimenterX"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link github"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://medium.com/@shankar-bhavani"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link medium"
              aria-label="Medium Blog"
            >
              <FaMedium />
            </a>
            <a
              href="https://uic.joinhandshake.com/profiles/shankar-bhavani"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link handshake"
              aria-label="Handshake Profile"
            >
              <FaHandshake />
            </a>
            <a
              href="https://leetcode.com/u/shankar-bhavani/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link leetcode"
              aria-label="LeetCode Profile"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://gravatar.com/iambhavanishankar"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link gravatar"
              aria-label="Gravatar Profile"
            >
              <FaUserCircle />
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="footer-social-link contact-btn"
              aria-label="Contact Me"
            >
              <FaEnvelope />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-text">
            © {new Date().getFullYear()} Bhavani Shankar. All rights reserved.
          </p>
          <button 
            className="analytics-btn" 
            onClick={() => setIsAnalyticsOpen(true)}
            aria-label="View Analytics"
          >
            <FaChartLine />
            <span>Analytics</span>
          </button>
        </div>
      </div>

      {/* Analytics Modal */}
      <AnalyticsModal 
        isOpen={isAnalyticsOpen} 
        onClose={() => setIsAnalyticsOpen(false)} 
      />

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="contact-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
            >
              <FaTimes />
            </button>
            
            <h2 className="modal-title">Get In Touch</h2>
            <p className="modal-subtitle">Let's discuss your project or opportunity</p>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
                <p className="email-note">
                  ⚠️ Please double-check your email address so I can get back to you!
                </p>
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="form-textarea"
                />
              </div>
              
              {statusMessage && (
                <div className={`status-message ${statusMessage.includes('success') ? 'success' : 'error'}`}>
                  {statusMessage}
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={isSending}
                className="submit-btn"
              >
                <FaPaperPlane />
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="contact-divider">
              <span>OR</span>
            </div>

            <div className="qr-section">
              <FaQrcode className="qr-icon" />
              <h3 className="qr-title">Scan to Connect</h3>
              <p className="qr-subtitle">Quick access to all my profiles</p>
              <img 
                src={qrCodeImage} 
                alt="QR Code - Bhavani Shankar Contact" 
                className="qr-code-image"
              />
              <p className="qr-description">
                Scan with your phone to save my contact and access all social profiles
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
