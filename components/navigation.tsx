"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass shadow-lg shadow-primary/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-rainbow-pink via-rainbow-peach to-rainbow-yellow rounded-xl opacity-90 group-hover:opacity-100 transition-opacity" />
                <svg
                  viewBox="0 0 40 40"
                  className="relative w-8 h-8 text-white"
                  fill="currentColor"
                >
                  <path d="M20 5C11.716 5 5 11.716 5 20c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm0 27c-6.627 0-12-5.373-12-12S13.373 8 20 8s12 5.373 12 12-5.373 12-12 12z" />
                  <circle cx="20" cy="20" r="5" />
                  <path d="M20 12v-2M20 30v-2M28 20h2M10 20h2M25.66 14.34l1.41-1.41M12.93 27.07l1.41-1.41M25.66 25.66l1.41 1.41M12.93 12.93l1.41 1.41" strokeWidth="1.5" stroke="currentColor" fill="none" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-foreground">
                  Rainbow Kids
                </span>
                <span className="text-xs text-muted-foreground tracking-widest uppercase">
                  Studio
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-rainbow-peach group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="https://wa.me/918498920643"
                target="_blank"
                className="group relative px-6 py-3 bg-gradient-to-r from-primary to-rainbow-peach text-white font-medium rounded-full overflow-hidden shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Book Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rainbow-peach to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-background shadow-2xl pt-24 px-8"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-6 border-t border-border"
                >
                  <Link
                    href="https://wa.me/918498920643"
                    target="_blank"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-primary to-rainbow-peach text-white font-medium rounded-full"
                  >
                    <Phone className="w-4 h-4" />
                    Book Now
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
