export default function Loading() {
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-[#18272e] to-[#1c3039] text-white overflow-hidden">
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-[#f6ae31] border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  )
}

