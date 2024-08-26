export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center px-3 py-1 mb-5 text-xs rounded-full bg-white/20 backdrop-blur-lg">
      {children}
    </span>
  );
}
