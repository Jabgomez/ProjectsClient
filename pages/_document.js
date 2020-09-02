import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="description" content="He-llo projects. Administrador de proyectos internos del team He-llo"/>
            <meta name="keywords" content="Administrador de proyectos, Project Manager, He-llo solutions"/>
            
            <link rel="stylesheet" href="/css/index.css"/>
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
            <link href="https://fonts.googleapis.com/css?family=Raleway:400,900|Roboto:300,400,700&display=swap" rel="stylesheet"/>
            
        </Head>
        <body>
          <Main/>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
