import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import ItineraryModule from '@/components/modules/ItineraryModule';
import DiaryModule from '@/components/modules/DiaryModule';
import ExpensesModule from '@/components/modules/ExpensesModule';
import GamificationModule from '@/components/modules/GamificationModule';
import SafetyModule from '@/components/modules/SafetyModule';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ItineraryModule />
      <DiaryModule />
      <ExpensesModule />
      <GamificationModule />
      <SafetyModule />
    </main>
  );
};

export default Index;
