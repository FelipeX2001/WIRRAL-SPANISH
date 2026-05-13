import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  price?: string;
  image: string;
  features: string[];
}

export interface Review {
  name: string;
  text: string;
  location: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  image: string;
  date: string;
  category: string;
  keywords: string[];
}