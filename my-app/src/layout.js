import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Cat, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPageName]);

  const navItems = [
    { name: "Home", page: "Home" },
    { name: "My Cats", page: "MyCats", icon: Cat },
    { name: "Game Wiki", page: "GameWiki", icon: ScrollText },
    { name: "Links", page: "Links" },
    { name: "Admin", page: "Admin" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#1a0b2e]">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e] via-[#1a0b2e] to-[#2a0f4c]"></div>
      </div>

      <div className="fixed -top-20 -right-20 w-60 h-60 opacity-20 transform rotate-12 animate-float">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/807e60_image.png"
          alt="Pixel Cat"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="fixed -bottom-20 -left-20 w-60 h-60 opacity-20 transform -rotate-12 animate-float-delayed">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/807e60_image.png"
          alt="Pixel Cat"
          className="w-full h-full object-contain"
        />
      </div>

      <header className="relative z-10 border-b border-[#ff00ff]/20 bg-[#1a0b2e]/70 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link
              to={createPageUrl("Home")}
              className="flex items-center space-x-2"
            >
              <div className="relative w-12 h-12">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/807e60_image.png"
                  alt="Logo"
                  className="w-full"
                />
                <div className="absolute -inset-0.5 bg-[#ff00ff]/20 rounded-full blur-md -z-10"></div>
              </div>
              <div className="text-2xl font-bold text-white tracking-wider cyberpunk-text">
                <span className="text-[#ff00ff]">Chibi</span>
                <span className="text-[#00ffff]">Neko</span>
                <span className="text-[#ff00ff]">Purr</span>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.page}
                  to={item.page}
                  isActive={currentPageName === item.page}
                  icon={item.icon}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-[#ff00ff]/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1a0b2e]/95 backdrop-blur-md border-t border-[#ff00ff]/20 p-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <MobileNavLink
                  key={item.page}
                  to={item.page}
                  isActive={currentPageName === item.page}
                  icon={item.icon}
                >
                  {item.name}
                </MobileNavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="relative z-10 container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="relative z-10 border-t border-[#ff00ff]/20 bg-[#1a0b2e]/70 backdrop-blur-md py-6">
        <div className="container mx-auto px-4 text-center text-sm text-[#b892ff]/70">
          <p>
            © {new Date().getFullYear()} ChibiNekoPurr. All rights reserved.
          </p>
          <p className="mt-2">Website made with 💜 for the community</p>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ children, to, isActive, icon: IconComponent }) {
  return (
    <Link
      to={createPageUrl(to)}
      className={`flex items-center gap-2 text-lg font-medium transition-all duration-300 glitch-effect ${
        isActive
          ? "text-[#ff00ff] border-b-2 border-[#ff00ff]/70"
          : "text-white/80 hover:text-[#00ffff] hover:border-b-2 hover:border-[#00ffff]/70"
      }`}
      data-text={children}
    >
      {IconComponent && <IconComponent className="w-4 h-4" />}
      {children}
    </Link>
  );
}

function MobileNavLink({ children, to, isActive, icon: IconComponent }) {
  return (
    <Link
      to={createPageUrl(to)}
      className={`flex items-center gap-3 py-2 px-4 rounded-md transition-all duration-300 ${
        isActive
          ? "bg-[#ff00ff]/20 text-[#ff00ff] font-medium"
          : "text-white/80 hover:bg-white/5 hover:text-[#00ffff]"
      }`}
    >
      {IconComponent && <IconComponent className="w-5 h-5" />}
      {children}
    </Link>
  );
}
