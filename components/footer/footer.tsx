import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Logo from "../header/logo"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="sr-only">Inkwire</span>
              <Logo/>
            </Link>
            <p className="text-lg">
              Get Inkwire updates delivered directly to your inbox.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-gray-400">
              By subscribing you agree to our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Features</h3>
            <ul className="space-y-2">
              {["Create", "Write", "Grow", "Monetize", "Analyze"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-blue-300 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Company</h3>
            <ul className="space-y-2">
              {["Careers", "Pricing", "Shop", "Compare", "About"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-blue-300 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-100">Connect</h3>
            <div className="flex space-x-4">
              {["Twitter", "Facebook", "Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-blue-300 transition-colors"
                  aria-label={social}
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Inkwire, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}