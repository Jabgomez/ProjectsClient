import App from 'next/app'

//Context
import ProyectoState from '../context/proyectos/proyectoState'
import TareaState from '../context/tareas/tareaState'
import AlertaState from '../context/alertas/alertaState'
import AuthState from '../context/autenticacion/authState'

function MyApp({ Component, pageProps }) {
    return (
        <ProyectoState>
            <TareaState>
                <AlertaState>
                    <AuthState>
                        <Component {...pageProps} />
                    </AuthState>
                </AlertaState>
            </TareaState>
        </ProyectoState>
    )
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp
  