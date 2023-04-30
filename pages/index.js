import Image from 'next/image'
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {

  const quotesFilePath = path.join(process.cwd(), 'quotes', 'quotes.json');
  const quotesJson = fs.readFileSync(quotesFilePath, 'utf8');
  const quotes = JSON.parse(quotesJson);

  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);

  return {
    props: {quotes, randomQuoteIndex}
  }
}

export default function Home({quotes, randomQuoteIndex}) {


const displayQuotes = ()=> {


  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-2">
    <div className="flex justify-center md:justify-end -mt-16 ">
    <Image
    className="w-25 h-25 object-cover rounded-full border-2 border-indigo-500"
    src={'/images/author-' + (randomQuoteIndex+1)+'.png'}
    alt="author"
    width={150}
    height={150}
    />
    </div>
    <div>
    <h2 className="text-gray-800 text-3xl font-semibold">{quotes[randomQuoteIndex].text}</h2>
    <p className="mt-2 text-gray-600">{quotes[randomQuoteIndex].author}</p>
    </div>
    <div className="flex justify-end mt-4">
    <a href="#" className="text-xl font-medium text-indigo-500">Share</a>
    </div>
    </div>
  )

}

  return (
         <>
         <div className="flex flex-col items-center justify-center min-h-screen py-2">
         {displayQuotes()}
         </div>
         </>
  )
}
