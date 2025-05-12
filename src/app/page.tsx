import { Metadata } from 'next';
import ParticlesBackground from '@/components/ParticlesBackground';
import LinksList from '@/components/LinksList';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Toktorov Links',
  description: 'All links of Toktorov in one place',
};

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-800 via-indigo-900 to-black bg-[length:400%_400%] animate-gradientShift text-white">
      <ParticlesBackground />

      <main className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-4 md:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Toktorov</h1>
          <p className="text-lg opacity-80 mb-4">Welcome to my links collection</p>

          <Image 
            src="/profile.jpg" 
            alt="Toktorov" 
            width={112} // 28 * 4 (for pixel density)
            height={112} // 28 * 4 (for pixel density)
            className="w-28 h-28 rounded-full mx-auto mb-6 border-2 border-white shadow-lg"
          />
        </div>

        <LinksList />

        <footer className="mt-12 text-center opacity-70 text-sm">
          <p>&copy; {new Date().getFullYear()} Toktorov. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}