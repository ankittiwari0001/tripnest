import {
  LayoutDashboard,
  Heart,
  User,
  Settings,
  LogOut,
  CalendarDays,
  Hotel,
  UtensilsCrossed,
  Bot,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Hotels",
    href: "/hotels",
    icon: Hotel,
  },
  {
    title: "Restaurants",
    href: "/restaurants",
    icon: UtensilsCrossed,
  },
  {
    title: "Saved Places",
    href: "/saved",
    icon: Heart,
  },
  {
    title: "My Bookings",
    href: "/dashboard/bookings",
    icon: CalendarDays,
  },
  {
    title: "AI Assistant",
    href: "/assistant",
    icon: Bot,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];