// components/AboutSection.js
export default function AboutSection() {
    return (
      <div className="bg-black text-white py-12 px-4">
        <div className="container mx-auto  gap-0 items-start"> {/* Reduced gap from 8 to 4 */}
          

          
          {/* Right Side */}
          <div className="pt-4">
            <h2 className="font-courier text-2xl font-bold mb-4">hellish hype!</h2>
            <p className="font-simpfxo text-base mb-4">
            Oh, $Lucifer token, you little devil of the blockchain, sparking fiery interest and hellish hype in the cryptosphere!
            </p>
            <h3 className="font-courier-bold text-xl font-bold">thrives in the flames</h3>
            <ul className="font-simpfxo text-base space-y-2">
  
  <li>• Lucifer: The mischievously volatile token that's not afraid of a little heat in the market - it thrives in the flames of high stakes and high rewards.</li>
  
  <li>• With a pitchfork for market spikes and horns for the bulls, Lucifer is the crypto temptation that even the most angelic investor can't resist.</li>

  <li>• They say money is the root of all evil, but with Lucifer token, it's just the beginning of a sinfully good time in the Solana underworld!</li>
  
</ul>

            <div className="space-y-2 mb-4">

              {/* NFT Address and additional content can be added here */}
            </div>
            <img src="https://i.ibb.co/frFL5t4/sidebargif.gif" alt="Wen Logo" className="mx-auto mb-4"  />
          </div>
        </div>
      </div>
    );
  }
  