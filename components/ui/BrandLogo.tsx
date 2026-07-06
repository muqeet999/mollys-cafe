export default function BrandLogo({ 
  className = "", 
  light = true,
  align = "center" 
}: { 
  className?: string; 
  light?: boolean;
  align?: "left" | "center" | "right";
}) {
  const textColor = light ? "text-[#FDFBF7]" : "text-[#2C1E16]";
  const lineColor = light ? "bg-[#FDFBF7]/40" : "bg-[#2C1E16]/40";
  
  const alignClass = 
    align === "left" ? "items-start" : 
    align === "right" ? "items-end" : 
    "items-center";

  return (
    <div className={`flex flex-col ${alignClass} justify-center ${className} ${textColor}`}>
      {/* 
        Using the loaded Pinyon Script font, but styling it in a much more 
        premium, tightly controlled lockup rather than a loose text node.
      */}
      <span className="font-cursive text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.7] tracking-normal capitalize select-none">
        Molly&apos;s
      </span>
      <div className={`flex items-center gap-3 mt-3 opacity-90 select-none ${align === 'left' ? 'pl-1' : ''}`}>
        <span className={`w-3 h-[1px] ${lineColor}`} />
        <span className="font-sans text-[7px] md:text-[8px] uppercase tracking-[0.5em] font-medium">
          Cafe
        </span>
        <span className={`w-3 h-[1px] ${lineColor}`} />
      </div>
    </div>
  );
}
