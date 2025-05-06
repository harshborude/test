import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';

export const HeroSection = () => {
  const orbitSizes = [620, 820, 1020, 1220];

  const starsConfig = [
    { orbit: 'w-[700px] h-[700px]', dur: '60s', star: 'size-24', opacity: 'opacity-100', rotate: 'rotate-[12deg]' },
    { orbit: 'w-[600px] h-[600px]', dur: '75s', star: 'size-20', opacity: 'opacity-80', rotate: 'rotate-[47deg]' },
    { orbit: 'w-[500px] h-[500px]', dur: '90s', star: 'size-16', opacity: 'opacity-60', rotate: 'rotate-[133deg]' },
    { orbit: 'w-[400px] h-[400px]', dur: '120s', star: 'size-14', opacity: 'opacity-50', rotate: 'rotate-[76deg]' },
    { orbit: 'w-[550px] h-[550px]', dur: '100s', star: 'size-12', opacity: 'opacity-30', rotate: 'rotate-[200deg]' },
    { orbit: 'w-[650px] h-[650px]', dur: '110s', star: 'size-10', opacity: 'opacity-70', rotate: 'rotate-[22deg]' },
    { orbit: 'w-[300px] h-[300px]', dur: '105s', star: 'size-9', opacity: 'opacity-40', rotate: 'rotate-[170deg]' },
    { orbit: 'w-[350px] h-[350px]', dur: '115s', star: 'size-8', opacity: 'opacity-60', rotate: 'rotate-[310deg]' },
    { orbit: 'w-[800px] h-[800px]', dur: '70s', star: 'size-26', opacity: 'opacity-50', rotate: 'rotate-[88deg]' },
    { orbit: 'w-[450px] h-[450px]', dur: '95s', star: 'size-13', opacity: 'opacity-40', rotate: 'rotate-[290deg]' },
    { orbit: 'w-[520px] h-[520px]', dur: '85s', star: 'size-15', opacity: 'opacity-30', rotate: 'rotate-[180deg]' },
    { orbit: 'w-[380px] h-[380px]', dur: '100s', star: 'size-11', opacity: 'opacity-70', rotate: 'rotate-[270deg]' },
    { orbit: 'w-[480px] h-[480px]', dur: '93s', star: 'size-17', opacity: 'opacity-60', rotate: 'rotate-[310deg]' },
    { orbit: 'w-[340px] h-[340px]', dur: '102s', star: 'size-9', opacity: 'opacity-50', rotate: 'rotate-[120deg]' },
    { orbit: 'w-[590px] h-[590px]', dur: '87s', star: 'size-14', opacity: 'opacity-80', rotate: 'rotate-[33deg]' },
    { orbit: 'w-[430px] h-[430px]', dur: '77s', star: 'size-12', opacity: 'opacity-40', rotate: 'rotate-[10deg]' },
    { orbit: 'w-[370px] h-[370px]', dur: '98s', star: 'size-11', opacity: 'opacity-60', rotate: 'rotate-[250deg]' },
    { orbit: 'w-[310px] h-[310px]', dur: '108s', star: 'size-10', opacity: 'opacity-50', rotate: 'rotate-[300deg]' },
  ];

  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0">
      {/* Background grain */}
      <div
        className="absolute inset-0 -z-30 opacity-20"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      />

      {/* Concentric borders */}
      {orbitSizes.map((size, i) => (
        <div
          key={i}
          className={`absolute inset-0 w-[${size}px] h-[${size}px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5`}
        />
      ))}

      {/* Orbiting stars */}
      {starsConfig.map((config, i) => (
        <div
          key={i}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${config.rotate} -z-10`}
        >
          <div className={`animate-spin ${config.orbit}`} style={{ animationDuration: config.dur }}>
            <div
              className={`inline-flex animate-spin ${config.opacity}`}
              style={{ animationDuration: `${parseFloat(config.dur) / 12}s` }}
            >
              <StarIcon className={`text-emerald-300 ${config.star}`} />
            </div>
          </div>
        </div>
      ))}

      {/* Hero content */}
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="Person peeking" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large "></div>
              </div>
            
            <div className="text-sm font-medium">Available for new Projects</div>
          </div>

          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
              Building Exceptional User Experiences
            </h1>
          </div>

          <p className="mt-4 text-center text-white/60 md:text-lg">
            Creative and detail-oriented individual with a passion for innovative problem-solving. Skilled in
            delivering impactful solutions through design, technology, and research. Always learning, adapting, and
            striving for meaningful work.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore my Work here</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span className="font-semibold">Lets Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
