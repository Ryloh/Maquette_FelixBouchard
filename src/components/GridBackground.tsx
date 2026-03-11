export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none flex justify-around opacity-20">
      <div className="w-px h-full bg-white/10" />
      <div className="w-px h-full bg-white/10" />
      <div className="w-px h-full bg-white/10 hidden md:block" />
      <div className="w-px h-full bg-white/10 hidden lg:block" />
      <div className="w-px h-full bg-white/10 hidden xl:block" />
    </div>
  );
}
