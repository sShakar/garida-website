import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  BellIcon,
  UserIcon,
  CreditCardIcon,
  LogOutIcon,
  ChevronsUpDownIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MobileMenu } from "@/components/layout/MobileMenu";
import GaridaLogoLong from "@/assets/img/garida-logo-long.png";

export default function WebNavbar({ activePage = "", isAuthenticated = false }) {
  const navItems = [
    { label: "Home", link: "/", page: "" },
    { label: "About", link: "/about", page: "about" },
    { label: "Contact", link: "/contact", page: "contact" },
  ];

  const socialMediaItems = [
    { icon: FacebookIcon, link: "https://facebook.com", label: "Facebook" },
    { icon: InstagramIcon, link: "https://instagram.com", label: "Instagram" },
    { icon: LinkedinIcon, link: "https://linkedin.com", label: "LinkedIn" },
  ];

  const authButtons = [
    { label: "Sign in", link: "https://admin.garidaexpress.com/sign-in", variant: "ghost" },
    { label: "Get started", link: "https://admin.garidaexpress.com/sign-up", variant: "default" },
  ];

  const user = {
    name: "Admin User",
    email: "info@garidaexpress.com",
    avatar: "/avatars/admin.jpg",
  };

  const userMenuItems = [
    { label: "Account", icon: UserIcon, link: "/dashboard" },
    { label: "Wallet", icon: CreditCardIcon, link: "/dashboard" },
    { label: "Notifications", icon: BellIcon, link: "/notifications" },
  ];

  const unreadNotifications = 3;

  return (
    <nav className="sticky top-0 z-50 border-b bg-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="cursor-pointer">
            <Image
              src={GaridaLogoLong}
              alt="Garida Express - Worldwide Shipping"
              width={120}
              height={36}
              className="object-contain"
            />
          </Link>
          <div className="flex items-center gap-6">
            {/* Mobile Menu */}
            <MobileMenu activePage={activePage} />

            {/* Navigation Links - Desktop */}
            <div className="hidden items-center gap-6 md:flex">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className={`cursor-pointer text-sm transition-colors ${
                    activePage === item.page ? "text-primary font-medium" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Social Media Links - Desktop */}
            <div className="hidden items-center gap-2 sm:flex">
              {socialMediaItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target="_blank"
                  aria-label={item.label}
                  className="hover:bg-primary flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-slate-100 transition-colors hover:text-white"
                >
                  <item.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>

            {/* Auth Buttons or User Menu - Desktop */}
            <div className="hidden items-center gap-3 md:flex">
              {isAuthenticated ? (
                <>
                  {/* Notifications Icon */}
                  <Link href="/notifications" className="relative cursor-pointer">
                    <Button variant="ghost" size="icon" className="relative cursor-pointer">
                      <BellIcon className="h-5 w-5" />
                      {unreadNotifications > 0 && (
                        <Badge
                          variant="default"
                          className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full p-0 text-xs"
                        >
                          {unreadNotifications}
                        </Badge>
                      )}
                    </Button>
                  </Link>

                  {/* User Menu */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex cursor-pointer items-center gap-2 px-2">
                        <Avatar className="h-8 w-8 rounded-lg">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback className="rounded-lg">
                            <UserIcon className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="hidden flex-col items-start text-left lg:flex">
                          <span className="text-sm font-medium">{user.name}</span>
                          <span className="text-muted-foreground text-xs">{user.email}</span>
                        </div>
                        <ChevronsUpDownIcon className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" sideOffset={8}>
                      <DropdownMenuLabel className="p-0 font-normal">
                        <div className="flex items-center gap-2 px-2 py-1.5 text-left text-sm">
                          <Avatar className="h-8 w-8 rounded-lg">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback className="rounded-lg">
                              <UserIcon className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                          <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-medium">{user.name}</span>
                            <span className="text-muted-foreground truncate text-xs">{user.email}</span>
                          </div>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        {userMenuItems.map((item, index) => (
                          <DropdownMenuItem key={index} asChild>
                            <Link href={item.link} className="cursor-pointer">
                              <item.icon className="h-4 w-4" />
                              <span>{item.label}</span>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="cursor-pointer">
                        <LogOutIcon className="h-4 w-4" />
                        Log out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <>
                  {authButtons.map((button, index) => (
                    <Button key={index} variant={button.variant} size="sm" asChild>
                      <Link href={button.link} target="_blank" className="cursor-pointer">
                        {button.label}
                      </Link>
                    </Button>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
