import React from 'react';
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
// import { config } from '@fortawesome/fontawesome-svg-core';
// config.autoAddCss = false;

export default async function RootLayout(props: {
  children: React.ReactNode;
  productModal: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>BadSauce</title>
      </head>
      <body>
        {props.children}
        {props.productModal}
      </body>
    </html>
  );
}
