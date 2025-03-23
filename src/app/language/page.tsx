// import { useEffect, useRef, useState } from 'react';
// import { useCookies } from 'react-cookie';
// import { ActionFunctionArgs, Outlet, ParamParseKey, Params } from 'react-router-dom';
// import { HandleGapiLoad } from '../../google/services/AuhorizationService';
// import { setLanguage } from '../../redux/slices/language';
// import { ModuleOptionsState, setOptions } from '../../redux/slices/moduleOptions';
// import store from '../../redux/store';
// import Paths from '../../router/Paths';
// import { EasySpeechInit } from '../../services/EasySpeechHandlers';
// import Language from '../../types/Language';
// import Footer from '../Footer';
// import Header from '../Header';
// import './Hub.scss';
// import { useAudioPlayer } from 'react-use-audio-player';
//import { GetStaticPaths } from 'next';
//npm start
//npm run deploy

// interface Args extends ActionFunctionArgs {
//   params: Params<ParamParseKey<typeof Paths.hub>>;
// }

// let firstLoaded = true;


// export async function loader({ params }: Args): Promise<boolean> {
//   if (firstLoaded) {
//     firstLoaded = false;
//     await FirstLoaded();
//   }

//   const languageName = params.language;

//   if (!languageName) {
//     throw new Error("missing language");
//   }

//   let language = languageName as Language;

//   store.dispatch(setLanguage(language));

//   return true;
// }

// async function FirstLoaded() {
//   HandleGapiLoad();
//   await EasySpeechInit();
// }
export async function generateStaticParams() {
  return []
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { language } = params as { language: string };
//   return {
//     props: {
//       language,
//     },
//   };
// };

export default async function Page({ params }: {
  params: Promise<{ language: string }>
}) {
  console.log("Hub");
   const { language } = await params
   console.log(language);
  // const [cookies] = useCookies(['view-options']);


  // useEffect(() => {
  //   const viewOptionsCookie = cookies['view-options'] as ModuleOptionsState | undefined;

  //   if (viewOptionsCookie) {
  //     store.dispatch(setOptions(cookies['view-options']));
  //   }
  // }, []);

  // const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <>
      {/* <Header></Header> */}

      <section className='hub__sections'>
        <section className='hub__left-section'>
        </section>

        <section className='hub__main-section'>
Schaboszczak
          {/* <Outlet /> */}
        </section>

        <section className='hub__right-section'>
        </section>
      </section>

      {/* <Footer></Footer> */}
    </>
  );
}