import React from 'react';
import PropTypes from 'prop-types';
import './scss/gatstrap.scss';
import 'animate.css/animate.css';
import 'prismjs/themes/prism-okaidia.css';
import 'font-awesome/css/font-awesome.css';

const HTML = ({ headComponents, body, postBodyComponents }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {headComponents}
      <link
        href="/img/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link href="/img/favicon.ico" rel="icon" type="image/x-icon" />
    </head>
    <body>
      <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
      <script
        async
        src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
    </body>
  </html>
);

HTML.propTypes = {
  headComponents: PropTypes.array.isRequired,
  body: PropTypes.array.isRequired,
  postBodyComponents: PropTypes.array.isRequired,
};

export default HTML;