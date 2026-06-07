import React from 'react';
import { Navbar, Footer } from '@alignartistry/ui';

export const metadata = { title: 'Size Guide — AlignArtistry' };

const sizeData = [
  { size: 'XS', bust: '31&ndash;32"', waist: '24&ndash;25"', hip: '34&ndash;35"', inseam: '30"' },
  { size: 'S', bust: '33&ndash;34"', waist: '26&ndash;27"', hip: '36&ndash;37"', inseam: '30.5"' },
  { size: 'M', bust: '35&ndash;36"', waist: '28&ndash;29"', hip: '38&ndash;39"', inseam: '31"' },
  { size: 'L', bust: '37&ndash;38"', waist: '30&ndash;31"', hip: '40&ndash;41"', inseam: '31.5"' },
  { size: 'XL', bust: '39&ndash;40"', waist: '32&ndash;33"', hip: '42&ndash;43"', inseam: '32"' },
];

export default function SizeGuidePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal">Size Guide</h1>
            <p className="mt-3 text-lg text-charcoal/60">Find your perfect fit.</p>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-charcoal/70 mb-8">
              Measurements are in inches. If you&apos;re between sizes, we recommend sizing up for a relaxed fit or
              sizing down for a more tailored look.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-charcoal/20">
                    <th className="text-left py-3 font-medium text-charcoal">Size</th>
                    <th className="text-left py-3 font-medium text-charcoal">Bust</th>
                    <th className="text-left py-3 font-medium text-charcoal">Waist</th>
                    <th className="text-left py-3 font-medium text-charcoal">Hip</th>
                    <th className="text-left py-3 font-medium text-charcoal">Inseam</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeData.map((row) => (
                    <tr key={row.size} className="border-b border-charcoal/10">
                      <td className="py-3 font-medium text-charcoal">{row.size}</td>
                      <td className="py-3 text-charcoal/70" dangerouslySetInnerHTML={{ __html: row.bust }} />
                      <td className="py-3 text-charcoal/70" dangerouslySetInnerHTML={{ __html: row.waist }} />
                      <td className="py-3 text-charcoal/70" dangerouslySetInnerHTML={{ __html: row.hip }} />
                      <td className="py-3 text-charcoal/70" dangerouslySetInnerHTML={{ __html: row.inseam }} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12">
              <h2 className="font-serif text-xl text-charcoal mb-4">How to Measure</h2>
              <div className="space-y-4 text-charcoal/70 leading-relaxed">
                <p><strong className="text-charcoal">Bust:</strong> Measure around the fullest part of your chest, keeping the tape parallel to the floor.</p>
                <p><strong className="text-charcoal">Waist:</strong> Measure around the narrowest part of your natural waistline.</p>
                <p><strong className="text-charcoal">Hip:</strong> Measure around the fullest part of your hips, about 8" below your waist.</p>
                <p><strong className="text-charcoal">Inseam:</strong> Measure from the top of your inner thigh to the bottom of your ankle.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
