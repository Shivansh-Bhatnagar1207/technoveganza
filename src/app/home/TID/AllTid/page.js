'use client'
import React, { useEffect, useState } from 'react';

export default function Page() {

  const fetchTids = async () => {
    const response = await fetch(`/api/TID/AllTid`);
    const data = await response.json();
    console.log("Fetched TIDs:", data);
    console.log(data);
  }
  fetchTids()
  return (
    <div className='text-center font-bold text-3xl py-10'>
      <h1>All TIDs</h1>
    </div>
  );
}
