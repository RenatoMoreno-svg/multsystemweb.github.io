import { motion } from "motion/react";
import { LucideIcon, Sparkles } from "lucide-react";

interface SectionHeaderProps {
  emoji?: string;
  icon?: LucideIcon;
  badge?: string;
  badgeColor?: string;
  title: string;
  subtitle: string;
  align?: "left" | "center";
  maxWidth?: string;
}

export function SectionHeader({
  emoji,
  icon: Icon,
  badge,
  badgeColor = "text-[#0A84FF]",
  title,
  subtitle,
  align = "center",
  maxWidth = "max-w-3xl",
}: SectionHeaderProps) {
  const alignmentClasses = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
      className={`flex flex-col ${alignmentClasses} ${maxWidth} mb-20`}
    >
      {/* Badge */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 150 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-xl border border-white/60 rounded-full mb-8 shadow-lg relative group"
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A84FF]/20 to-[#4FC3F7]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          
          <div className="relative z-10 flex items-center gap-2">
            {emoji && <span className="text-xl">{emoji}</span>}
            {Icon && (
              <Icon size={18} className={badgeColor} strokeWidth={2.5} />
            )}
            {!emoji && !Icon && (
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles size={16} className="text-[#FF8C42]" />
              </motion.div>
            )}
            <span className={`text-sm ${badgeColor}`}>
              {badge}
            </span>
          </div>
        </motion.div>
      )}

      {/* Title with gradient text option */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 80 }}
        className="text-[#1C1C1E] mb-6 relative"
        style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          lineHeight: "1.2",
          fontWeight: 700,
        }}
      >
        {title}
        
        {/* Subtle gradient underline animation */}
        {align === "center" && (
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-[#0A84FF] via-[#4FC3F7] to-[#0A84FF] rounded-full"
            style={{
              background: "linear-gradient(90deg, transparent, #0A84FF 20%, #4FC3F7 50%, #0A84FF 80%, transparent)",
            }}
          />
        )}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-gray-600 leading-relaxed max-w-2xl"
        style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)" }}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
}
