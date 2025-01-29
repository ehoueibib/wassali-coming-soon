import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CountdownTimer from "../components/CountdownTimer";
import EmailForm from "../components/EmailForm";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log("Landing page mounted");
  }, []);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    console.log("Language changed to:", lang);
  };

  // Language flag mapping
  const languageFlags: { [key: string]: string } = {
    en: "en.png",
    fr: "fr.png",
    ar: "mr.png", // Arabic uses 'mr.png'
  };

  return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
        {/* Language Dropdown */}
        <motion.div
            className="absolute top-4 right-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
              <img
                  src={`assets/flags/${languageFlags[i18n.language] || "en.png"}`}
                  alt={i18n.language}
                  className="w-5 h-5 rounded-full object-cover"
              />
              <span className="text-sm font-medium">
              {i18n.language.toUpperCase()}
            </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {Object.entries(languageFlags).map(([lang, flag]) => (
                  <DropdownMenuItem
                      key={lang}
                      onClick={() => handleLanguageChange(lang)}
                      className="cursor-pointer"
                  >
                    <img src={`assets/flags/${flag}`} alt={lang} className="w-5 h-5 rounded-full mr-2" />
                    {lang === "en" ? "English" : lang === "fr" ? "Français" : "العربية"}
                  </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>

        {/* Main Content */}
        <motion.div className="max-w-4xl w-full text-center space-y-8 z-10">
          {/* Logo */}
          <motion.div className="flex justify-center mb-6">
            <img
                src="assets/lovable-uploads/bf307c4e-6e88-4bf6-8782-334e90eebbe8.png"
                alt="Wassali Logo"
                className="h-16 md:h-20"
            />
          </motion.div>

          {/* Typewriter Tagline */}
          <motion.p className="text-xl md:text-2xl text-gray-600 font-semibold">
            <Typewriter
                words={[t("tagline")]} // Dynamically translate tagline
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={20}
            />
          </motion.p>

          {/* Countdown Timer */}
          <CountdownTimer />

          {/* Email Form */}
          <EmailForm />

          {/* App Store & Google Play Buttons */}
          <motion.div className="flex flex-wrap justify-center gap-6 mt-8">
            <motion.div className="w-40 h-12 flex justify-center items-center">
              <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us"
                  alt="Download on App Store"
                  className="object-contain h-full"
              />
            </motion.div>

            <motion.div className="w-40 h-12 flex justify-center items-center">
              <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="object-contain h-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
  );
};

export default Index;
