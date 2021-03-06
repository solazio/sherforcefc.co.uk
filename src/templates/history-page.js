import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const HistoryPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <section className='hero is-medium is-primary is-slanted--right'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title is-size-2 has-line'>{title}</h1>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <PageContent className='content' content={content} />
          <a className='button is-primary' href='/contact'>
            Join the team
          </a>
        </div>
      </section>
    </>
  );
};

HistoryPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const HistoryPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Helmet titleTemplate={"%s | Sher Force FC"}>
        <title>{post.frontmatter.title}</title>
        <meta name='description' content={post.frontmatter.description} />
        <meta name='title' content={post.frontmatter.title} />
        <meta
          name='description'
          content={post.frontmatter.description}
        />
        <meta
          name='keywords'
          content='Sher Force history, history, Sher Force club history'
        />
        <meta property='og:title' content={post.frontmatter.title} />
        <meta
          property='og:description'
          content={post.frontmatter.description}
        />
        <meta property='twitter:title' content={post.frontmatter.title} />
        <meta
          property='twitter:description'
          content={post.frontmatter.description}
        />
      </Helmet>
      <HistoryPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

HistoryPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HistoryPage;

export const aboutPageQuery = graphql`
  query HistoryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
