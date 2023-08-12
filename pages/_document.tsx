import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
   render() {
      console.log('document')
      return (
         <Html lang='en'>
            <Head>
               <link rel='preconnect' href='https://fonts.gstatic.com' />
               <link
                  href='https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap'
                  rel='stylesheet'
               />
            </Head>
            <body className='bg-fixed bg-gradient-to-r from-white to-blue-300 dark:from-dark-500 dark:to-dark-700 dark:text-white'>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}

export default MyDocument