/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class ContactForm extends React.Component {

  render() {
      let formspreeURL= "https://formspree.io/mwkvggga"
      return (
        <Container>
          <div>
              {/* <form action={this.formSpree()} method="POST"> */}
              <form id="contactform" method="POST" action={formspreeURL}>
                  <fieldset>
                    <legend><h1>Get in touch!</h1></legend>
                    <label>Name
                    <input id="name" name="text" type="text" placeholder="Name"></input>
                    </label> 
                    <label>Email
                    <input name="email" label="Email" placeholder="Email" type="email" />
                    </label>
                    <label>Phone
                    <input name="phone" label="Phone" placeholder="Phone" />
                    </label>
        
                    <label htmlFor="message" className="form-label">
                        Message
                        <textarea id="message" name="message" placeholder="Your Message" />
                    </label>
        
                    <p>
                        <button class="btn" type="submit" id="submit">Send message</button>
                    </p>
                  </fieldset>
                </form>
          </div>
        </Container>
      );
  }
}

module.exports = ContactForm;