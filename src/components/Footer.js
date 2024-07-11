// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <div id="footer-bottom" className="wpex-py-20 wpex-text-sm wpex-surface-dark wpex-text-center wpex-print-hidden">
      <div id="footer-bottom-inner" className="container">
        <div className="footer-bottom-flex wpex-clr">
          <div id="copyright" className="wpex-last-mb-0">
            Quartz Insurance Brokers Ltd - Registered in England No. 06737067 - Authorised and Regulated by the Financial Conduct Authority.
            Website: <a target="_blank" rel="noopener noreferrer" href="https://www.fca.org.uk/">www.fca.org.uk</a>
            <br /><br />
            Authority for General Insurance Distribution activities and as a credit broker. We do not charge any up-front fees for arranging credit.
            <br /><br />
            Our services are covered by the Financial Ombudsman Service. If you cannot settle a complaint with us, eligible complainants may be entitled to refer it to the Financial Ombudsman Service for an independent assessment. The FOS Consumer Helpline is on 0800 023 4567 and their address is:
            Financial Ombudsman Service, Exchange Tower, London E14 9SR. Website: <a target="_blank" rel="noopener noreferrer" href="https://www.financial-ombudsman.org.uk/">www.financial-ombudsman.org.uk/</a>
            <br /><br />
            © 2024 All rights reserved - Quartz Insurance Brokers Ltd
            <br /><br />
            <a style={{ textDecoration: 'none', fontSize: '0.9em' }} href="https://www.casparritchie.com/">Design & Development: Caspar Ritchie (Bordeaux)</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
