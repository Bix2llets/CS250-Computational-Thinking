"use client"

import { useEffect, useState } from "react"

interface Posts {
  id: number,
  title: string
  content: string
};


async function fetchMockData() {
  try {

    let fetchResult = await fetch("http://localhost:5000")
    if (!fetchResult.ok) {
      throw Error;
    }
    const data = await fetchResult.json()
    return data as Posts[]
  }
  catch {
    return [] as Posts[]
  }

}

export default function Page() {

  const [pageContent, pageUpdater] = useState<Posts[]>([]);
  const [loadingStatus, loadingUpdater] = useState<boolean>(false)


  // useEffect(() =>
  //   {
  //     const loadContent = async () => {

  //       let fetchContent = await fetchMockData();

  //       pageUpdater(fetchContent)
  //       loadingUpdater(false)
  //     }
  //     loadContent();


  //   }
  //   ,[]
  // )

  if (!loadingStatus) 
    return <div>Loading...Loading...Loading...</div>
  return <div>Testing</div>
}