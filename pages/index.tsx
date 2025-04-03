import { Geist } from "next/font/google";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`w-full max-w-[1366px] mx-auto px-6 py-8 !${geistSans.variable} !font-geist-sans`}>
      <Head>
        <title>ImpressoX – AI Agents for Cross-Chain DeFi</title>

        <meta name="description" content="ImpressoX is your AI execution layer for cross-chain DeFi, powered by Espresso for fast, private, and fair swaps." />

        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content="ImpressoX – AI Agents for Cross-Chain DeFi" />
        <meta itemProp="description" content="AI handles your token swaps across chains with privacy, scalability, and fairness. Built on Espresso." />
        <meta itemProp="image" content="https://impressox.ai/images/impressox-card.png" />

        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ImpressoX – AI Agents for Cross-Chain DeFi" />
        <meta name="twitter:description" content="Trade smarter with AI across Ethereum, Arbitrum, OP, and more. Powered by Espresso for private, fair execution." />
        <meta name="twitter:image" content="https://impressox.ai/images/impressox-card.png" />
        <meta name="twitter:site" content="@ImpressoX" />
        <meta name="twitter:creator" content="@ImpressoX" />

        {/* Facebook Open Graph */}
        <meta property="og:title" content="ImpressoX – AI Agents for Cross-Chain DeFi" />
        <meta property="og:description" content="Execute secure, intelligent swaps across chains with AI. No bridges. No apps. Just message your AI." />
        <meta property="og:image" content="https://impressox.ai/images/impressox-card.png" />
        <meta property="og:url" content="https://impressox.ai/" />
        <meta property="og:type" content="website" />
      </Head>
      {/* Header */}
      <header className="flex items-center justify-between w-full mb-12">
        <div className="flex items-center space-x-2">
          <img src="/impressox-logo.png" alt="Logo" className="w-6 h-6" />
          <span className="text-white font-semibold text-xl">Impresso<span className="text-[#2EC4A4]">X</span></span>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-white">
          <a href="#" className="hover:text-[#2EC4A4]">About</a>
          <a href="#" className="hover:text-[#2EC4A4]">Features</a>
          <a href="#" className="hover:text-[#2EC4A4]">Docs</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
        <div className="flex-1 w-full">
          <h1 className="text-white text-4xl lg:text-5xl font-extrabold leading-tight">
            AI Agents for <br />
            <span className="text-white">Cross-Chain Swaps</span>
          </h1>
          <p className="text-[#d5d5d5] mt-6 text-base max-w-xl">
            Join ImpressoX to get early access to the multi-chain AI swap infrastructure:
          </p>

          <ul className="text-white mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-[#2EC4A4] mt-1">
                <i className="fas fa-check-circle"></i>
              </span>
              <span>24/7 initial agent agents for optimal trading</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2EC4A4] mt-1">
                <i className="fas fa-check-circle"></i>
              </span>
              <span>Secure and trustless transactions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2EC4A4] mt-1">
                <i className="fas fa-check-circle"></i>
              </span>
              <span>Powered by Eliza and Espresso Sequencer</span>
            </li>
          </ul>

          <button className="mt-6 bg-[#2EC4A4] hover:bg-[#32a78d] text-white cursor-pointer px-6 py-3 rounded-lg font-medium flex items-center gap-3 shadow-lg" onClick={() => window.open('https://t.me/impressox_bot', '_blank')}>
            <i className="fab fa-telegram-plane"></i> Chat With AI Agent
          </button>
        </div>

        <div className="w-full lg:w-1/2">
          <img src="./images/ai-agent-avatar.png" alt="AI Agent" className="w-full border-none rounded-4xl max-w-[500px] mx-auto" />
        </div>
      </section>

      {/* Feature Cards */}
      <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {/* Card 1 */}
        <div className="bg-[#101a2f] rounded-xl overflow-hidden shadow-md flex flex-col">
          <div className="aspect-[6/5] overflow-hidden">
            <img src="/images/cross-chain.png"
              alt="Cross Chain" className="w-full h-full object-cover" />
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <div className="flex items-center gap-2 text-[#2EC4A4] mb-1">
              <i className="fas fa-link"></i>
              <h3 className="text-lg font-semibold text-white">Cross-Chain</h3>
            </div>
            <p className="text-sm text-[#d5d5d5]">Swap across Ethereum, Arbitrum, OP, Base and more in one command</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#101a2f] rounded-xl overflow-hidden shadow-md flex flex-col">
          <div className="aspect-[6/5] overflow-hidden">
            <img src="/images/ai-agent.png"
              alt="AI Agents" className="w-full h-full object-cover" />
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <div className="flex items-center gap-2 text-[#2EC4A4] mb-1">
              <i className="fas fa-robot"></i>
              <h3 className="text-lg font-semibold text-white">AI Agents</h3>
            </div>
            <p className="text-sm text-[#d5d5d5]">Our AI executes trades for you intelligently and safely.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#101a2f] rounded-xl overflow-hidden shadow-md flex flex-col">
          <div className="aspect-[6/5] overflow-hidden">
            <img src="/images/multi-platform.png"
              alt="Multi-Platform" className="w-full h-full object-cover" />
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <div className="flex items-center gap-2 text-[#2EC4A4] mb-1">
              <i className="fas fa-comments"></i>
              <h3 className="text-lg font-semibold text-white">Multi-Platform</h3>
            </div>
            <p className="text-sm text-[#d5d5d5]">Get AI-powered swaps, insights, and alerts on Telegram, Discord, X, and more.</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#101a2f] rounded-xl overflow-hidden shadow-md flex flex-col">
          <div className="aspect-[6/5] overflow-hidden">
            <img src="/images/real-time-insights.png"
              alt="Real-time Insights" className="w-full h-full object-cover" />
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <div className="flex items-center gap-2 text-[#2EC4A4] mb-1">
              <i className="fas fa-chart-line"></i>
              <h3 className="text-lg font-semibold text-white">Real-time Insights</h3>
            </div>
            <p className="text-sm text-[#d5d5d5]">Track trends and predictions from your personal AI</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-sm text-[#cfcfcf] text-center space-y-4 w-full">
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:text-[#2EC4A4]">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-[#2EC4A4]">Terms</a>
        </div>
        <div className="flex justify-center gap-6 text-xl text-white mt-2">
          <a href="https://x.com/Impressodotai" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-discord"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
        </div>
        <p className="text-xs text-[#888]">
          © 2025 impressoX – AI Agents powering DeFi
        </p>
      </footer>
    </div>
  );
}
