import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import ProductLink from '../components/ProductLink';

export default function Home() {
  return (
    <div>
<Head>
        <title>FACTFUL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      
      
   <header>
     {/* <div className="relative font-bold h-10 object-center text-center text-white rounded-xl bg-gray-900 pt-2 pl-6 mb-2">植物用LEDライト販売所　FACTFULL onlineshop
       
     </div> */}
   </header>
   
   <>
   
{/* This example requires Tailwind CSS v2.0+ */}
<div className="min-h-screen bg-white">
  <nav className="bg-white border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex">
          <div className="flex-shrink-0 flex items-center">
            <img className="block lg:hidden h-16 w-auto" src="img/flower.png" alt="flower" />
            <img className="hidden lg:block h-16 w-auto" src="img/flower.png" alt="flower" />
          </div>
          <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
            <a href="#" className="border-green-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              FACTFUL
            </a>
            <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            　製品一覧
            </a>
            <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              製品貸し出しについて
            </a>
            <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              サポート
            </a>
          </div>
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:items-center">
          
          {/* Profile dropdown */}
          <div className="ml-3 relative">
            
            {/*
        Dropdown menu, show/hide based on menu state.

        Entering: "transition ease-out duration-200"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      */}
            {/* <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                Your Profile
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                Settings
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                Sign out
              </a>
            </div> */}
          </div>
        </div>
        <div className="-mr-2 flex items-center sm:hidden">
          {/* Mobile menu button */}
          <button type="button" className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            {/*
        Heroicon name: outline/menu

        Menu open: "hidden", Menu closed: "block"
      */}
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/*
        Heroicon name: outline/x

        Menu open: "block", Menu closed: "hidden"
      */}
            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    {/* Mobile menu, show/hide based on menu state. */}
    <div className="sm:hidden" id="mobile-menu">
      <div className="pt-2 pb-3 space-y-1">
        {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
        <a href="#" className="bg-indigo-50 border-green-500 text--700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
          FACTFUL
        </a>
        <a href="#" className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
          製品一覧
        </a>
        <a href="#" className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
          製品貸し出しについて
        </a>
        <a href="#" className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
          サポート
        </a>
      </div>
      {/* <div className="pt-4 pb-3 border-t border-gray-200">
        <div className="flex items-center px-4">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=EqnZfs2epz&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-gray-800">Tom Cook</div>
            <div className="text-sm font-medium text-gray-500">tom@example.com</div>
          </div>
          <button className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="sr-only">View notifications</span>
            {/* Heroicon name: outline/bell */}
            {/* <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
        <div className="mt-3 space-y-1">
          <a href="#" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
            Your Profile
          </a>
          <a href="#" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
            Settings
          </a>
          <a href="#" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
            Sign out
          </a>
        </div>
      </div> */} 
    </div>
  </nav>
  <div className="py-10">
    <header>
      
    </header>
    <main>
    <div className="relative  bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
         
          
        </nav>
      </div>
      
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text6xl">
            <span className="block xl:inline">貴方はご存知ですか？</span>
            <span className="block text-black xl:inline">世界の<span className="text-red-900">真実</span>を</span>
            <span className="block text-black xl:inline">そして</span>
            <span className="block text-black xl:inline">日本の<span className="text-green-700">真実</span>を。</span>
          </h1>
          {/* <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p> */}
          
          
        </div>
      </main>
    </div>
  </div>
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="img/harvest.jpg" alt="harvest" />
  </div>
</div>
    </main>
  </div>
</div>
</>
<>
{/* This example requires Tailwind CSS v2.0+ */}

</>

<>
{/* This example requires Tailwind CSS v2.0+ */}
<div className="py-16 bg-white  overflow-hidden lg:py-6">
  <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
    <div className="relative mt-12 sm:mt-16 lg:mt-24">
      <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="lg:col-start-2">
          <h3 className="text-green-900  text-2xl font-extrabold tracking-tight sm:text-3xl">
            世界の真実
          </h3>
          <p className="mt-3 text-lg text-gray-900">
          ご存知でしょうか。オランダは国土面積が九州と同程度にもかかわらす、農産物輸出額に関してはアメリカにつぐ世界第二位の額を誇ります。そこには他の国にはない強力なハウス栽培法が存在しました。
        </p>
          <p className="mt-3 text-lg text-gray-50">
          </p>
          <dl className="mt-10 space-y-10">
            
            
          </dl>
        </div>
        <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
          {/* <svg className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width={784} height={404} fill="none" viewBox="0 0 784 404" aria-hidden="true">
            <defs>
              <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
          </svg> */}
          <img className="relative rounded-lg mx-auto" width={490} src="img/oranda.jpg" alt="oranda" />
        </div>
      </div>
    </div>
    
    
    <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
    {/* <svg className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width={404} height={784} fill="none" viewBox="0 0 404 784" aria-hidden="true">
      <defs>
        <pattern id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
          <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
    </svg> */}
      <div className="relative">
        <h3 className="text-red-700 text-2xl font-extrabold tracking-tight sm:text-3xl">
          圧倒的な絶対効率による農作物栽培法
        </h3>
        <p className="mt-3 text-lg text-gray-900">
        オランダでは自国内のみで農作物の生産性を維持するためにさまざまな取り組みを行いました。その結果、植物用LEDライトを用いたハウス栽培。いわゆるスマート農業に方向転換することで、農地の集約化、効率のよい農作物運搬法、エネルギーの省エネ化、生産性の著しい向上をもたらしました。
        </p>
        <dl className="mt-10 space-y-10">
          
          
          
        </dl>
      </div>
      <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
        <svg className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width={784} height={404} fill="none" viewBox="0 0 784 404">
          {/* <defs>
            <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs> */}
          <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
        </svg>
        <img className="relative rounded-lg mx-auto" width={490} src="img/greenhouse.jpg" alt="greenhouse" />
      </div>
    </div>
    {/* <svg className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width={404} height={784} fill="none" viewBox="0 0 404 784" aria-hidden="true">
      <defs>
        <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
          <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
    </svg> */}
    <div className="relative mt-12 sm:mt-16 lg:mt-24">
      <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="lg:col-start-2">
          <h3 className="text-indigo-600 text-2xl font-extrabold tracking-tight sm:text-3xl">
            そこに見るは日本の将来
          </h3>
          <p className="mt-3 text-lg text-gray-900">
          我々日本では自給率が低く現在４割を切るほどしか自給できていません。つまり６割強を海外からの輸入に頼って生活しています。
          </p>
          <p className="mt-3 text-lg text-gray-900">
          では今後日本が生き残っていく上でどうすればいいのでしょうか。やはり今後も世界の他の国から輸入することでしか我々の生き残る術はないのでしょうか？いえ、先ほど話したオランダの件を思い出してください。そこに今後の日本が世界で生き残っていくためのヒントが隠されています。
          </p>
          <dl className="mt-10 space-y-10">
            
            
          </dl>
        </div>
        <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
          {/* <svg className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width={784} height={404} fill="none" viewBox="0 0 784 404" aria-hidden="true">
            <defs>
              <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
          </svg> */}
          <img className="relative rounded-lg mx-auto" width={490} src="img/mirai.jpg" alt="future" />
        </div>
      </div>
    </div>
  </div>
  {/* <div className=" relative">
  <br></br>
  <br></br>
      <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
        いざ新しい農業スタイルへの転換へ
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-50">
      戦後の日本は何もない状況から一時は世界第２位の経済大国にまでのしあがりました。そして今我々は再度新たな武器を手に立ち上がる時なのです。ここに未来を変える最高の要素が準備されています。あとは前進あるのみです。
      </p>
      <br></br>
    </div> */}
</div>

</>

<>
<Link href="/product"><a>
{/* This example requires Tailwind CSS v2.0+ */}
<div className="relative bg-indigo-800 mb-2">
  <div className="absolute inset-0">
    <img className="w-full h-full object-cover" src="img/682.jpg" alt />
    <div className="absolute inset-0 bg-gray-500" style={{mixBlendMode: 'multiply'}} aria-hidden="true" />
  </div>
  <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 text-center lg:px-8">
  <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-yellow-200 sm:text-4xl">
        いざ新しい農業スタイルへの転換へ
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-50">
      戦後の日本は何もない状況から世界第２位の経済大国にまでのしあがりました。そして我々は再度立ち上がる時にきています。
      </p>
      <br></br>
      <p className="text-center pt-1 text-5xl  font-extrabold  text-white">ここに未来を変える二つのライトがあります。</p>
    <p className="mt-6 text-4xl text-white "></p>
    {/* <Link href="/product"><a> <p className="mt-6 text-4xl text-white ">→製品一覧へ</p></a></Link> */}
    {/* <Link href="/product3"><a> <p className="mt-6 text-4xl text-white ">→製品一覧へ</p></a></Link> */}
  </div>
</div>
</a></Link>
</>
<>
{/* This example requires Tailwind CSsS v2.0+ */}
<div className="relative bg-white pt-16 pb-32 overflow-hidden">
  <div className="relative">
    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
      <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
        <div>
          <div>
            <span className="h-12 w-12 rounded-md flex items-center justify-center bg-green-600">
              {/* Heroicon name: outline/inbox */}
              <img className="h-11 w-11 text-white" src="img/mars.png" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"/>
                
            </span>
          </div>
          <div className="mt-6">
          
            <h2 className="text-7xl  md:text-xl font-extrabold tracking-tight text-gray-900">
              MARSHYDRO
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              多くの実績を持つ植物用LEDライトメーカーです。お客様には絶対の信頼性と、安心感を提供できることをお約束します。多種多様な植物、そしてさまざまな部屋のサイズに合わせたものまでご提供が可能の植物用LEDライトメーカーです。
            </p>
            <div className="mt-6">
              <a href="#" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-indigo-700">
                MARSHYDRO 製品一覧
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6">
          {/* <blockquote>
            <div>
              <p className="text-base text-gray-500">
                “Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut.”
              </p>
            </div>
            <footer className="mt-3">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt />
                </div>
                <div className="text-base font-medium text-gray-700">
                  Marcia Hill, Digital Marketing Manager
                </div>
              </div>
            </footer>
          </blockquote> */}
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
          <img className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="img/hero.jpg" alt="Inbox user interface" />
        </div>
      </div>
    </div>
  </div>
  <div className="mt-24">
    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
      <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
        <div>
          <div>
            <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
              {/* Heroicon name: outline/sparkles */}
              <img className="h-11 w-11 text-white" src="img/slogo.png" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"/>
                
              
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-7xl font-extrabold tracking-tight text-gray-900">
            SPIDERFARMER
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              まさに新進気鋭、超新星のごとく現れました。これまでの植物用LEDライトの定義を覆します。種類はMarshydroに比べると少ないですが、植物及び使い手様に新たな体験を提供してくれる植物用LEDライトメーカーです。
            </p>
            <div className="mt-6">
              <div className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-indigo-700">
              {/* <ProductLink id="SPIDERFARMER製品一覧" /> */}
              SPIDERFARMER製品　一覧
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
        <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
          <img className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none" src="img/sfshiyourei.jpg" alt="spiderfarmer" />
        </div>
      </div>
    </div>
  </div>
</div>
</>
<>
{/* This example requires Tailwind CSS v2.0+ */}


<div className="bg-white">
  {/* Header */}
  <div className="relative pb-32 bg-gray-700">
    <div className="absolute inset-0">
      <img className="w-full h-full object-cover" src="img/beautiful-plant.jpg" alt />
      <div className="absolute inset-0 bg-white" style={{mixBlendMode: 'multiply'}} aria-hidden="true" />
    </div>
    <div className="relative text-white max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
    <p className="mt-6 text-red-500 text-center text-2xl pb-2">我々FACTFULが取扱う商品には共通点があります。</p>
      <h1 className="text-4xl font-extrabold tracking-tight text-center md:text-5xl lg:text-6xl">植物が安心、快適に成長できる環境づくり</h1>
      
    </div>
  </div>
  {/* Overlapping cards */}
  <section className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
    <h2 className="sr-only" id="contact-heading">Contact us</h2>
    <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
    <div className="pt-6">
          <div className="flow-root bg-white rounded-lg ring-2 ring-gray-300 px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg">
                  {/* Heroicon name: outline/cloud-upload */}
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </span>
              </div>
              <h3 className="mt-8 text-lg font-bold text-gray-900 tracking-tight">省エネ、簡単使用</h3>
              <p className="mt-5 text-base text-gray-500">
                簡単取り付け、そしてSamsung製チップにより電気代もかなり低コスト。財布に優しいしようとなっています。
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flow-root bg-white rounded-lg ring-2 ring-gray-300 px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg">
                  {/* Heroicon name: outline/lock-closed */}
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
              </div>
              <h3 className="mt-8 text-lg font-bold text-gray-900 tracking-tight">植物の成長促進</h3>
              <p className="mt-5 text-base text-gray-500">
                高品質LEDライトで安定、高速で植物の成長を促進。日々目に見えるスピードで植物が成長するため、植物観察がより楽しくなります。
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flow-root bg-white ring-2 ring-gray-300 rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg">
                  {/* Heroicon name: outline/refresh */}
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </span>
              </div>
              <h3 className="mt-8 text-lg font-bold text-gray-900 tracking-tight">デイジーチェーン接続</h3>
              <p className="mt-5 text-base text-gray-500">
                デイジーチェーン接続の採用により、簡単増設。ケーブルを差し込むだけで複数台を一台で電源コントロール可能。
              </p>
            </div>
          </div>
        </div>
        
      
      
    </div>
  </section>
</div>
<div className="relative max-w-7xl mx-auto">
    <div className="text-center">
      <h2 className="text-3xl tracking-tight font-extrabold text-indigo-700 sm:text-4xl">
        日本でのスマート農法の効果は未知数
      </h2>
      <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-900 sm:mt-4">
      日本よりも面積の小さい国でありながら日本以上の農作物益をあげてるオランダのスマート農法、そしてモノづくりの日本の力が合わされば鬼にに金棒のような気もしますが、実際のところなぜスマート農法が流行っていないのでしょうか？
      </p>
    </div>
    </div>
<div>
  <p></p></div>
<div className="py-16 bg-white  overflow-hidden lg:py-6">
  <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
    <div className="relative mb-16 mt-12 sm:mt-16 lg:mt-24">
      <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="lg:col-start-2">
          <h3 className="text-red-700  text-2xl font-extrabold tracking-tight sm:text-3xl">
            まだまだ日本での認知度は低い
          </h3>
          <p className="mt-3 text-lg text-gray-900">
          スマート農法は海外では注目されている農法ですが日本ではまだまだです。それどころかSNSやウェブ上では肯定的な意見比べると懐疑的、もしくは否定的な意見が多いのも事実です。
        </p>
          <p className="mt-3 text-lg text-gray-50">
          </p>
          <dl className="mt-10 space-y-10">
            
            
          </dl>
        </div>
        <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
          {/* <svg className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width={784} height={404} fill="none" viewBox="0 0 784 404" aria-hidden="true">
            <defs>
              <pattern id="e80155a9-dfde-425a-b5ea-1f6fadd20131" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
          </svg> */}
          <img className="relative rounded-lg mx-auto" width={490} src="img/house-plant.jpg" alt="planthouse" />
        </div>
      </div>
    </div>
    </div>
   </div>

</>

<div className="relative bg-indigo-800 mb-2">
  <div className="absolute inset-0">
    <img className="w-full h-full object-cover" src="img/evolution.jpg" alt />
    <div className="absolute inset-0 bg-gray-500" style={{mixBlendMode: 'multiply'}} aria-hidden="true" />
  </div>
  <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 text-center lg:px-8">
  <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-blue-200 sm:text-4xl">
        変化は怖いもの
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-50">
      これまでの自分から別の自分へ変わるというのは怖いものです。しかしその変化の先にあるのはより時代に沿った『進化』です。そんな進化をお助けするために我々は独自のサービスを用意しています。
      </p>
      <br></br>
      <p className="text-center pt-1 text-5xl  font-extrabold  text-yellow-200 text-white">ぜひ進化への一端を体感してみてください。</p>
    <p className="mt-6 text-4xl text-white "></p>
    {/* <Link href="/product"><a> <p className="mt-6 text-4xl text-white ">→製品一覧へ</p></a></Link> */}
    {/* <Link href="/product3"><a> <p className="mt-6 text-4xl text-white ">→製品一覧へ</p></a></Link> */}
  </div>
</div>
<>
{/* This example requires Tailwind CSS v2.0+ */}
<div className="relative bg-white">
  <div className="relative bg-white shadow">
    
    {/*
Mobile menu, show/hide based on mobile menu state.

Entering: "duration-200 ease-out"
  From: "opacity-0 scale-95"
  To: "opacity-100 scale-100"
Leaving: "duration-100 ease-in"
  From: "opacity-100 scale-100"
  To: "opacity-0 scale-95"
    */}
    <div className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden">
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        
       
      </div>
    </div>
  </div>
  <main className="lg:relative">
    <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
      <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span className="block xl:inline">研究者、開発機関向け</span>
          <span className="block text-green-600 xl:inline">試用機の貸し出しサービス</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
          我々が取り扱っている製品の良さを実際に体験してもらうため、製品購入前に試用機の貸し出しを行っております。 製品のクオリティ、またお客様が使用を予定されている環境に合うか、検討のためにもぜひご利用ください。
        
        </p>
        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">もちろん一般の方でも、このサイトをみてご連絡いただいた方であれば喜んで貸し出しいたします。</p>
        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">※数に限りがございます。ご注意ください。</p>
        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-300 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
              試してみる
            </a>
          </div>
          {/* <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
              Live demo
            </a>
          </div> */}
        </div>
      </div>
    </div>
    <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
      <img className="absolute rounded-lg inset-0 w-full h-full object-cover" src="img/freetrialforuni.jpg" alt="freetrial" />
    </div>
  </main>
</div>
</>
<>
{/* This example requires Tailwind CSS v2.0+ */}
<div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  <div className="absolute inset-0">
    <div className="bg-white h-1/3 sm:h-2/3" />
  </div>
  <div className="relative max-w-7xl mx-auto">
    <div className="text-center">
      <h2 className="text-3xl tracking-tight font-extrabold text-pink-500 sm:text-4xl">
        お客様からの声
      </h2>
      <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-900 sm:mt-4">
        研究機関、農家、大学、さまざまな分野で活躍するLEDライトですが、お客様からも多大な感想をいただいております。
      </p>
    </div>
    <>
{/* This example requires Tailwind CSS v2.0+ */}
<>
{/* This example requires Tailwind CSS v2.0+ */}
<section className="bg-white overflow-hidden">
  <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
    <svg className="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden" width={784} height={404} fill="none" viewBox="0 0 784 404" aria-hidden="true">
      <defs>
        <pattern id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
          <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width={784} height={404} fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />
    </svg>
    <svg className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2" width={404} height={784} fill="none" viewBox="0 0 404 784" aria-hidden="true">
      <defs>
        <pattern id="56409614-3d62-4985-9a10-7ca758a8f4f0" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
          <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width={404} height={784} fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />
    </svg>
    <div className="relative lg:flex lg:items-center">
      <div className="hidden lg:block lg:flex-shrink-0">
        <img className="h-64 w-64 rounded-full xl:h-80 xl:w-80" src="img/catsle.jpg" alt="okayamacatsle" />
      </div>
      <div className="relative lg:ml-10 rounded-lg ring-4 ring-green-500 p-8">
        <blockquote className="relative">
          <div className="text-2xl leading-9 font-medium text-gray-900">
            <p>
              大学の研究用に購入しました。最初はどの製品がいいのかもまったくわかりませんでしたが、こちらの相談にも細かいところまで持っていただき、一台購入前に貸し出しいただいことでその製品に決めました
            </p>
          </div>
          <footer className="mt-8">
            <div className="flex">
              <div className="flex-shrink-0 lg:hidden">
                <img className="h-12 w-12 rounded-full" src="img/catsle.jpg" alt="okayamacatsle" />
              </div>
              <div className="ml-4 lg:ml-0">
                <div className="text-base font-medium text-gray-900">岡山大学農学部</div>
                <div className="text-base font-medium text-black">Okayama University,department of agriculture </div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
    
  </div>
</section>

</>
</>
  </div>
</div>
</>
<div className="bg-white">
  {/* Header */}
  <div className="relative pb-32 bg-white">
    <div className="absolute inset-0">
      <img className="w-full h-full object-cover" src="img/japanese3.jpg" alt="japanese" />
      <div className="absolute inset-0 bg-white" style={{mixBlendMode: 'multiply'}} aria-hidden="true" />
    </div>
    <div className="relative text-gray-900 max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
    <p className="mt-6 max-w-4xl text-pink-500 pb-2 text-2xl ">試用機貸し出し意外にも、常にお客様への安心感を念頭に動いています。</p>
      <h1 className="text-4xl font-extrabold tracking-tight  md:text-5xl lg:text-6xl">他の会社にはない完全バックアップ体制</h1>
      
    </div>
  </div>
  {/* Overlapping cards */}
  <section className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
    <h2 className="sr-only" id="contact-heading">Contact us</h2>
    <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
    <div className="pt-6">
          <div className="flow-root bg-white rounded-lg ring-2 ring-gray-300 px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-green-500  rounded-md shadow-lg">
                  {/* Heroicon name: outline/shield-check */}
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
              </div>
              <h3 className="mt-8 text-lg font-bold text-gray-900 tracking-tight">製品購入後の完全サポート</h3>
              <p className="mt-5 text-base text-gray-500">
                製品購入後もトラブルが発生した場合には我々スタッフが全力でサポートいたします。メール、電話どちらでもお客様のご都合の良い方法でお問い合わせください。
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flow-root bg-white rounded-lg ring-2 ring-gray-300 px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                  {/* Heroicon name: outline/cog */}
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
              </div>
              <h3 className="mt-8 text-lg font-bold text-gray-900 tracking-tight">三年間の絶対保証</h3>
              <p className="mt-5 text-base text-gray-500">
                ３年以内に不具合、または故障が発生した場合、製品の交換対応を行わせていただきます。お客様に損はさせません。
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flow-root bg-white rounded-lg ring-2 ring-gray-300 px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                  {/* Heroicon name: outline/server */}
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </span>
              </div>
              <h3 className="mt-8 text-lg font-bold text-gray-900 tracking-tight">完全日本語対応</h3>
              <p className="mt-5 text-base text-gray-500">
                スタッフには日本人のみ、お客様はメーカーとやり取りする必要がないため安心して日本語でのお買い求めが可能です。
              </p>
            </div>
          </div>
        </div>
      
      
    </div>
  </section>
</div>
<div className="relative max-w-7xl mx-auto mb-20">
    <div className="text-center">
      <h2 className="text-3xl tracking-tight font-extrabold text-yellow-600 sm:text-4xl">
        お客様が楽しく植物を栽培できること
      </h2>
      <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-900 sm:mt-4">
      植物用ライトを通じてお客様が笑顔になり、植物の成長を楽しんでいただくことが我々にとっても最高の喜びです。そのために我々は存在します。
      </p>
    </div>
    </div>
<div></div>
<>
{/* This example requires Tailwind CSS v2.0+ */}
<div className="bg-gradient-to-b from-white to-gray-100">
  {/* Header */}
  <div className="relative pb-32 bg-gray-700">
    <div className="absolute inset-0">
      <img className="w-full h-full object-cover" src="img/support2.jpg" alt="support" />
      <div className="absolute inset-0 bg-gray-300" style={{mixBlendMode: 'multiply'}} aria-hidden="true" />
    </div>
    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1 className="text-4xl text-yellow-300 font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">サポート</h1>
      <p className="mt-6 max-w-3xl text-xl text-yellow-50">製品購入にあたってのご相談、不具合等、なんでもお問い合わせください。スタッフが共に解決します</p>
    </div>
  </div>
  {/* Overlapping cards */}
  <section className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
    <h2 className="sr-only" id="contact-heading">Contact us</h2>
    <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
      <div className="bg-white rounded-2xl shadow-xl">
        <div className="relative pt-16 px-6 pb-8 md:px-8">
          <div className="absolute top-0 p-5 inline-block bg-yellow-400 rounded-xl shadow-lg transform -translate-y-1/2">
            {/* Heroicon name: outline/phone */}
            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-900">販売</h3>
          <p className="mt-4 text-base text-gray-500">製品購入を検討、またはどの製品を買えばいいのかわからないといった疑問までお気軽にお問い合わせください。</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
          <a href="#" className="text-base text-right font-medium text-gray-700 hover:text-indigo-600">相談する<span aria-hidden="true"> →</span></a>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-xl">
        <div className="relative pt-16 px-6 pb-8 md:px-8">
          <div className="absolute top-0 p-5 inline-block bg-yellow-400 rounded-xl shadow-lg transform -translate-y-1/2">
            {/* Heroicon name: outline/support */}
            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-900">テクニカルサポート</h3>
          <p className="mt-4 text-base text-gray-500">製品ご購入後に発生した不具合や、使用中における疑問などお気軽にお問い合わせください。</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
          <a href="#" className="text-base font-medium text-right text-gray-700 hover:text-indigo-600">相談する<span aria-hidden="true"> →</span></a>
        </div>
      </div>
      
    </div>
  </section>
</div>
</>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
