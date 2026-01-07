import React from 'react';

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  date: string;
  location?: string;
  details?: string;
  category?: 'Keynote' | 'Hacking' | 'Workshop' | 'Social' | 'Deadline';
}

export interface TrackItem {
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}