import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
<Head>
        <title>FACTFUL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <>
      
   <header>
     <div className="relative font-bold h-10 object-center text-left text-white rounded-xl bg-gray-900 pt-2 pl-6 mb-2">FACTFULL online
       
     </div>
   </header>
  
  
{/* This example requires Tailwind CSS v2.0+ */}


{/* <div className="relative text-gray-900 mb-2">
  <div className="absolute inset-0">
    <img className="w-full h-full object-cover " src="img/spiderfarmerstart2.jpg" alt />
    <div className="absolute inset-0" style={{mixBlendMode: 'multiply'}} aria-hidden="true" />
  </div>
  <div className="relative text-white max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
  <p className=" font-extrabold tracking-tight sm:text-5xl lg:text-6xl">真実を追求する</p>
  <p className=" font-extrabold tracking-tight sm:text-5xl lg:text-6xl">唯一の植物用LEDライト</p>
  <p className=" font-extrabold tracking-tight sm:text-5xl lg:text-6xl">販売サイト</p>
　 <h1 className="text-6xl font-extrabold text-white tracking-tight sm:text-8xl lg:text-8xl">FACTFUL</h1>
  </div>
</div> */}

</>

<>
{/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
// ...
require('@tailwindcss/typography'),
require('@tailwindcss/aspect-ratio'),
    ]
  }
  ```
*/}
<div className=" mb-2 bg-black overflow-hidden">
  <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
    <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
      <div>
        <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">未来を想像するライト販売会社</h2>
        <h1 className="mt-2 sm:text-8xl lg:text-8xlleading-8 font-extrabold tracking-tight text-white ">FACTFUL</h1>
      </div>
    </div>
    <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
      <div className="relative lg:row-start-1 lg:col-start-2">
        <svg className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width={404} height={384} fill="none" viewBox="0 0 404 384" aria-hidden="true">
          <defs>
            <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
        </svg>
        <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
          <figure>
            <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
              <img className="rounded-lg shadow-lg object-cover object-center" src="img/lightonetop4.png" width={1184} height={1376} />
            </div>
            
          </figure>
        </div>
      </div>
      <div className="mt-8 lg:mt-0">
        <div className="text-base max-w-prose mx-auto lg:max-w-none">
          <p className="text-lg text-gray-500">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.</p>
        </div>
        <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
          
        </div>
      </div>
    </div>
  </div>
</div>
</>
<>
{/* This example requires Tailwind CSS v2.0+ */}
<div className="py-16 bg-black overflow-hidden lg:py-24">
  <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
    <div className="relative mt-12 sm:mt-16 lg:mt-24">
      <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="lg:col-start-2">
          <h3 className="text-white text-2xl font-extrabold tracking-tight sm:text-3xl">
            世界の真実
          </h3>
          <p className="mt-3 text-lg text-gray-50">
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
          <img className="relative rounded-lg mx-auto" width={490} src="img/oranda.jpg" alt />
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
        <h3 className="text-white text-2xl font-extrabold tracking-tight sm:text-3xl">
          圧倒的な絶対効率による農作物栽培法
        </h3>
        <p className="mt-3 text-lg text-gray-50">
        オランダでは自国内のみで農作物の生産性を維持するためにさまざまな取り組みを行いました。その結果、植物用LEDライトを用いたハウス栽培。いわゆるスマート農業に方向転換することで、農地の集約化、効率のよい農作物運搬法、エネルギーの省エネ化、生産性の著しい向上をもたらしました。
        </p>
        <dl className="mt-10 space-y-10">
          
          
          
        </dl>
      </div>
      <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
        <svg className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width={784} height={404} fill="none" viewBox="0 0 784 404">
          <defs>
            <pattern id="ca9667ae-9f92-4be7-abcb-9e3d727f2941" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
        </svg>
        <img className="relative rounded-lg mx-auto" width={490} src="img/greenhouse.jpg" alt />
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
          <h3 className="text-white text-2xl font-extrabold tracking-tight sm:text-3xl">
            そこにみるは日本の将来
          </h3>
          <p className="mt-3 text-lg text-gray-50">
          我々日本では自給率が低く現在４割を切るほどしか自給できていません。つまり６割強を海外からの輸入に頼って生活しています。
          </p>
          <p className="mt-3 text-lg text-gray-50">
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
          <img className="relative rounded-lg mx-auto" width={490} src="img/mirai.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</div>
<div className="bg-black relative">
  <br></br>
  
      <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
        いざ新しい農業スタイルへの転換へ
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
      戦後の日本は何もない状況から一時は世界第２位の経済大国にまでのしあがりました。そして今我々は再度新たな武器を手に立ち上がる時なのです。ここに未来を変える最高の要素が準備されています。あとは前進あるのみです。
      </p>
      <br></br>
    </div>
</>

<>
<Link href="/product"><a>
{/* This example requires Tailwind CSS v2.0+ */}
<div className="relative bg-indigo-800 mb-2 mt-2">
  <div className="absolute inset-0">
    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixqx=EqnZfs2epz&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt />
    <div className="absolute inset-0 bg-gray-500" style={{mixBlendMode: 'multiply'}} aria-hidden="true" />
  </div>
  <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 text-center lg:px-8">
    <h1 className="text-4xl font-extrabold tracking-tight text-white  sm:text-5xl lg:text-6xl">未来を変える二つのライトメーカー</h1>
    <p className="mt-6 text-xl text-white">低価格でありながらも最高品質。ぜひ一度ご確認ください</p>
    <p className="mt-6 text-4xl text-white ">製品一覧へ</p>
    {/* <Link href="/product"><a> <p className="mt-6 text-4xl text-white ">→製品一覧へ</p></a></Link> */}
    {/* <Link href="/product3"><a> <p className="mt-6 text-4xl text-white ">→製品一覧へ</p></a></Link> */}
  </div>
</div>
</a></Link>
</>
<>
{/* This example requires Tailwind CSS v2.0+ */}


<div className="bg-gradient-to-b from-white to-gray-900">
  {/* Header */}
  <div className="relative pb-32 bg-gray-700">
    <div className="absolute inset-0">
      <img className="w-full h-full object-cover" src="img/beautiful-plant.jpg" alt />
      <div className="absolute inset-0 bg-white" style={{mixBlendMode: 'multiply'}} aria-hidden="true" />
    </div>
    <div className="relative text-white max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight  md:text-5xl lg:text-6xl">植物が安心、快適に成長できる環境づくり</h1>
      <p className="mt-6 max-w-3xl text-xl ">FACTFUL取扱商品には共通点があります。</p>
    </div>
  </div>
  {/* Overlapping cards */}
  <section className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
    <h2 className="sr-only" id="contact-heading">Contact us</h2>
    <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
    <div className="pt-6">
          <div className="flow-root bg-white rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-red-300 rounded-md shadow-lg">
                  {/* Heroicon name: outline/cloud-upload */}
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">省エネ、簡単使用</h3>
              <p className="mt-5 text-base text-gray-500">
                簡単取り付け、そしてSamsung製チップにより電気代もかなり低コストです。
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flow-root bg-white rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-red-300 rounded-md shadow-lg">
                  {/* Heroicon name: outline/lock-closed */}
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">植物の成長促進</h3>
              <p className="mt-5 text-base text-gray-500">
                安定、そして高品質なLedライトを植物の成長とともにお楽しみください。
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flow-root bg-white rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-red-300 rounded-md shadow-lg">
                  {/* Heroicon name: outline/refresh */}
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">デイジーチェーン接続</h3>
              <p className="mt-5 text-base text-gray-500">
                デイジーチェーン接続の採用により、電源コントロールは一台で可能。
              </p>
            </div>
          </div>
        </div>
        
      
      
    </div>
  </section>
</div>

<div className="bg-gradient-to-b from-white to-gray-900">
  {/* Header */}
  <div className="relative pb-32 bg-gray-700">
    <div className="absolute inset-0">
      <img className="w-full h-full object-cover" src="img/japanese.jpg" alt />
      <div className="absolute inset-0 bg-white" style={{mixBlendMode: 'multiply'}} aria-hidden="true" />
    </div>
    <div className="relative text-green-500 max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight  md:text-5xl lg:text-6xl">完全バックアップ体制</h1>
      <p className="mt-6 max-w-3xl text-xl ">お客様が円滑かつ確実に希望の商品を購入できるよう取り組んでいます。</p>
    </div>
  </div>
  {/* Overlapping cards */}
  <section className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
    <h2 className="sr-only" id="contact-heading">Contact us</h2>
    <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
    <div className="pt-6">
          <div className="flow-root bg-white rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                  {/* Heroicon name: outline/shield-check */}
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">製品購入後の完全サポート</h3>
              <p className="mt-5 text-base text-gray-500">
                製品購入後もトラブルが発生した場合には我々スタッフが全力でサポートいたします。メール、電話どちらの対応も可能です。
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flow-root bg-white rounded-lg px-6 pb-8">
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
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">三年間の絶対保証</h3>
              <p className="mt-5 text-base text-gray-500">
                ３年以内に不具合、または故障が発生した場合、製品の交換対応を行わせていただきます。
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="flow-root bg-white rounded-lg px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                  {/* Heroicon name: outline/server */}
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">完全日本語対応</h3>
              <p className="mt-5 text-base text-gray-500">
                スタッフには日本人のみ、お客様はメーカーとやり取りする必要がないため安心して日本語でのお買い求めが可能です。
              </p>
            </div>
          </div>
        </div>
      
      
    </div>
  </section>
</div>

</>
<>
{/* This example requires Tailwind CSS v2.0+ */}

</>
<>
{/* This example requires Tailwind CSS v2.0+ */}
<div className="relative bg-gradient-to-b from-white to-pink-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  <div className="absolute inset-0">
    <div className="bg-white h-1/3 sm:h-2/3" />
  </div>
  <div className="relative max-w-7xl mx-auto">
    <div className="text-center">
      <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        お客様からの声
      </h2>
      <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        研究機関、農家、大学、さまざまな分野で活躍するLEDライトですが、お客様からも多大な感想をいただいております。
      </p>
    </div>
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      <div className="flex flex-col  shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixqx=EqnZfs2epz&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-red-600">
              <a href="#" className="hover:underline">
                SP3000
              </a>
            </p>
            <a href="#" className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                大学研究用に使用しています。
              </p>
              <p className="mt-3 text-base text-gray-500">
                大学での研究室用に購入にしました。どれにしようか悩みましたが、試験機を貸し出ししていただいたことで実際にどのようなものなのかを体験することができました。製品にも満足しています。
              </p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href="#">
                <span className="sr-only">Roel Aufderehar</span>
                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=EqnZfs2epz&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a href="#" className="hover:underline">
                  Roel Aufderehar
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime="2020-03-16">
                  Mar 16, 2020
                </time>
                <span aria-hidden="true">
                  ·
                </span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col  shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=EqnZfs2epz&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-green-600">
              <a href="#" className="hover:underline">
                SF2000
              </a>
            </p>
            <a href="#" className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                デイジーチェーン対応なのがいいですね
              </p>
              <p className="mt-3 text-base text-gray-500">
                育てている観葉植物用に買ってみました。こういった植物用LEDライトを購入するのは初めてのことでわからないことだらけだったんですが、優しく教えていただき今回SF2000の購入を決めました。
              </p>
            </a>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href="#">
                <span className="sr-only">Brenna Goyette</span>
                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixqx=EqnZfs2epz&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a href="#" className="hover:underline">
                  Brenna Goyette
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime="2020-03-10">
                  Mar 10, 2020
                </time>
                <span aria-hidden="true">
                  ·
                </span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img className="4/5 w-full object-cover" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixqx=EqnZfs2epz&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm text-center font-medium text-yellow-600">
              <a href="#" className="hover:underline">
                REVUE
              </a>
            </p>
            <a href="#" className="block mt-2">
              <p className="text-xl text-center font-semibold text-gray-900">
                他にもたくさんのレビューをお客様からいただいております。
              </p>
              <br></br>
              <p className="mt-3 text-base text-center text-gray-500">
                レビューを確認する。
              </p>
            </a>
          </div>
          {/* <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href="#">
                <span className="sr-only">Daniela Metz</span>
                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixqx=EqnZfs2epz&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a href="#" className="hover:underline">
                  Daniela Metz
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime="2020-02-12">
                  Feb 12, 2020
                </time>
                <span aria-hidden="true">
                  ·
                </span>
                
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</div>
</>
<>
{/* This example requires Tailwind CSS v2.0+ */}
<div className="bg-gradient-to-b from-white to-gray-100">
  {/* Header */}
  <div className="relative pb-32 bg-gray-700">
    <div className="absolute inset-0">
      <img className="w-full h-full object-cover" src="img/support2.jpg" alt />
      <div className="absolute inset-0 bg-gray-300" style={{mixBlendMode: 'multiply'}} aria-hidden="true" />
    </div>
    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">サポート</h1>
      <p className="mt-6 max-w-3xl text-xl text-gray-300">製品購入にあたってのご相談、不具合等おとい合わせいただけます。</p>
    </div>
  </div>
  {/* Overlapping cards */}
  <section className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
    <h2 className="sr-only" id="contact-heading">Contact us</h2>
    <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
      <div className="bg-white rounded-2xl shadow-xl">
        <div className="relative pt-16 px-6 pb-8 md:px-8">
          <div className="absolute top-0 p-5 inline-block bg-gray-500 rounded-xl shadow-lg transform -translate-y-1/2">
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
          <div className="absolute top-0 p-5 inline-block bg-gray-500 rounded-xl shadow-lg transform -translate-y-1/2">
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
