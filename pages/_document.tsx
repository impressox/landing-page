import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <meta name="description" content="AI-powered cross-chain intent-based token swaps powered by Eliza and Espresso Sequencer." />
      </Head>
      <body className="!bg-[#0b1324] text-white min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
