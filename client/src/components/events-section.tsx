import { useEvents } from "@/hooks/use-data";
import { Section } from "./ui/section";
import { Loader2, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { format, addDays, addWeeks, startOfWeek } from "date-fns";

export function EventsSection() {
  const { data: events, isLoading } = useEvents();

  // Build a display for next week (Monday -> Sunday) when no remote events exist
  const today = new Date();
  const startNextWeek = startOfWeek(addWeeks(today, 1), { weekStartsOn: 1 }); // next Monday

  const bookedMap: Record<number, string> = {
    1: "Private Party", // Tuesday
    3: "Corporate Event", // Thursday
    4: "Birthday Bash", // Friday
    5: "VIP Night", // Saturday
  };

  const days = Array.from({ length: 7 }).map((_, i) => {
    const d = addDays(startNextWeek, i);
    const name = format(d, "EEEE");
    const date = format(d, "MMM d");
    const status = bookedMap[i] ? "Booked" : "Available";
    const bookedBy = bookedMap[i];
    return { name, date, status, bookedBy };
  });

  if (isLoading) {
    return (
      <Section id="events" className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </Section>
    );
  }

  return (
    <Section id="events" className="relative">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Upcoming Events</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          See what's happening at Balkaz this week. Book your spot before it's gone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {days.map((day, idx) => (
          <motion.div
            key={day.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`
              relative overflow-hidden rounded-lg p-6 min-h-[180px] flex flex-col justify-between
              border border-white/10 bg-white/5 backdrop-blur-sm
              hover:border-primary/50 hover:bg-white/10 transition-all duration-300
              group
            `}
          >
            <div className="flex justify-between items-start z-10">
              <div>
                <h3 className="text-xl font-bold text-white">{day.name}</h3>
                <p className="text-sm text-gray-400">{day.date}</p>
              </div>
              <Calendar className={`w-5 h-5 ${day.status === "Booked" ? "text-primary" : "text-green-500"}`} />
            </div>

            <div className="mt-4 z-10">
              {day.status === "Booked" ? (
                <>
                  <span className="inline-block px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded font-medium mb-2 border border-red-500/20">
                    BOOKED
                  </span>
                  <p className="text-sm font-medium text-white/90 truncate">
                    {day.bookedBy}
                  </p>
                </>
              ) : (
                <>
                   <span className="inline-block px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded font-medium mb-2 border border-green-500/20">
                    AVAILABLE
                  </span>
                  <p className="text-sm font-medium text-white/50">
                    No events scheduled
                  </p>
                </>
              )}
            </div>

            {/* Subtle background glow on hover */}
            <div className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full blur-[50px] transition-opacity duration-500 opacity-0 group-hover:opacity-30 ${day.status === "Booked" ? "bg-primary" : "bg-green-500"}`} />
          </motion.div>
        ))}
      </div>

      {/* Testimonial Quote */}
      <div className="mt-20 text-center max-w-4xl mx-auto border-t border-white/5 pt-12">
        <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-300 leading-relaxed">
          "The atmosphere at Balkaz is unmatched. It's not just a club, it's an experience that stays with you."
        </blockquote>
        <p className="mt-4 font-bold text-primary">— Sarah J., VIP Member</p>
      </div>
    </Section>
  );
}
