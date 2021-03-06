import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import { Helmet } from "react-helmet";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <Helmet titleTemplate={"%s | Sher Force FC"}>
          <title>Contact us</title>
          <meta name='title' content='Contact us' />
          <meta
            name='description'
            content='Join Sher Force team, Ask a question'
          />
          <meta
            name='keywords'
            content='Contact us, join sher force team, ask a question, join the team'
          />
          <meta property='og:title' content='Contact us' />
          <meta
            property='og:description'
            content='Join Sher Force team, Ask a question'
          />
          <meta property='twitter:title' content='Contact us' />
          <meta
            property='twitter:description'
            content='Join Sher Force team, Ask a question'
          />
        </Helmet>
        <section className='hero is-medium is-primary is-slanted--right'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title is-size-2 has-line'>Contact</h1>
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='content column is-half'>
                <h2>Get in touch</h2>
                <form
                  name='contact'
                  method='post'
                  action='/contact/thanks/'
                  data-netlify='true'
                  data-netlify-honeypot='bot-field'
                  onSubmit={this.handleSubmit}>
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type='hidden' name='form-name' value='contact' />
                  <div hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name='bot-field' onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className='field'>
                    <label className='label' htmlFor={"name"}>
                      Your name
                    </label>
                    <div className='control'>
                      <input
                        className='input'
                        type={"text"}
                        name={"name"}
                        onChange={this.handleChange}
                        id={"name"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className='field'>
                    <label className='label' htmlFor={"email"}>
                      Email
                    </label>
                    <div className='control'>
                      <input
                        className='input'
                        type={"email"}
                        name={"email"}
                        onChange={this.handleChange}
                        id={"email"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className='field'>
                    <label className='label' htmlFor={"message"}>
                      Message
                    </label>
                    <div className='control'>
                      <textarea
                        className='textarea'
                        name={"message"}
                        onChange={this.handleChange}
                        id={"message"}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className='columns'>
                    <div className='column is-4 field'>
                      <button
                        className='button is-link is-outlined is-fullwidth'
                        type='submit'>
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
