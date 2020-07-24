import Document, { Html, Head, Main, NextScript } from "next/document";

class _Document extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className={`grey darken-4`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

_Document.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);

  return { ...initialProps };
};

export default _Document;
