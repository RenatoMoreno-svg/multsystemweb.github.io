import { LucideIcon } from "lucide-react";

export interface NavigationItem {
  label: string;
  id: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  oldPrice?: string;
  image: string;
  rating: number;
  badge?: string;
  reviews?: number;
}

export interface Service {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  image: string;
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Category {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
  delay?: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}
