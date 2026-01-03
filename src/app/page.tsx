"use client"
import React, { useEffect } from 'react';
import InitialLoading from './components/initialLoading';

export default function Home() {
  useEffect(() => {
    // gallery.cos-mos-f.comにリダイレクト
    window.location.href = 'https://gallery.cos-mos-f.com';
  }, []);

  // リダイレクト中はInitialLoadingを表示
  return <InitialLoading />;
}

