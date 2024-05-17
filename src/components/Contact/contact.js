/*
import React, { useRef } from 'react';
import "./contact.css";
import instgramIcon from '../images/instagramIcon.png';
import facebookIcon from '../images/facebookIcon.png';
import youtubeIcon from '../images/youtubeIcon.png';
import twitterIcon from '../images/twitterIcon.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lh27fpm', 'template_iuq59pr', form.current, 'csm-0oOdcXJR0KpqV')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent !');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contactPage">
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Have a project in mind? Let's talk!<br/>Please fill out the form below to discuss work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='from_name' />
                <input type='email' className='email' placeholder='Your Email' name='from_email' />
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <a href="https://www.instagram.com/therealkikiwaters/">
                        <img src={instgramIcon} alt='Instagram' className='link' />
                    </a>
                    <a href="https://www.facebook.com/kiki.waters.169/?locale=sw_KE">
                        <img src={facebookIcon} alt='Facebook' className='link' />
                    </a>
                    <a href="https://www.youtube.com/@kwaters0998">
                        <img src={youtubeIcon} alt='YouTube' className='link' />
                    </a>
                    <a href='https://www.twitter.com/kikiwatersmusic'>
                        <img src={twitterIcon} alt='Twitter' className='link' />
                    </a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
*/

import React, { useRef, useEffect } from "react";
import "./contact.css";
import instgramIcon from "../images/instagramIcon.png";
import facebookIcon from "../images/facebookIcon.png";
import youtubeIcon from "../images/youtubeIcon.png";
import twitterIcon from "../images/twitterIcon.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    // Set focus to the first input field when the form is loaded
    form.current.querySelector(".name").focus();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lh27fpm",
        "template_iuq59pr",
        form.current,
        "csm-0oOdcXJR0KpqV"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Have a project in mind? Let's talk!
          <br />
          Please fill out the form below to discuss work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
            aria-label="Your Name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
            aria-label="Your Email"
            required
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
            aria-label="Your Message"
            required
          ></textarea>
          <button type="submit" className="submitBtn">
            Submit
          </button>
          <div className="links" role="navigation">
            <a
              href="https://www.instagram.com/therealkikiwaters/"
              aria-label="Instagram"
            >
              <img src={instgramIcon} alt="Instagram" className="link" />
            </a>
            <a
              href="https://www.facebook.com/kiki.waters.169/?locale=sw_KE"
              aria-label="Facebook"
            >
              <img src={facebookIcon} alt="Facebook" className="link" />
            </a>
            <a href="https://www.youtube.com/@kwaters0998" aria-label="YouTube">
              <img src={youtubeIcon} alt="YouTube" className="link" />
            </a>
            <a
              href="https://www.twitter.com/kikiwatersmusic"
              aria-label="Twitter"
            >
              <img src={twitterIcon} alt="Twitter" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
