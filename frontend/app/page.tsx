"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
interface Posts {
  id: number,
  title: string
  content: string
};


async function fetchMockData() {
  // console.log("Called")
  try {

    let fetchResult = await fetch("http://localhost:5000/api/posts")
    if (!fetchResult.ok) {
      throw Error;
    }
    const data = await fetchResult.json()
    console.log(data)
    return data as Posts[]
  }
  catch {
    return [] as Posts[]
  }

}

export default function Page() {

  const [pageContent, pageUpdater] = useState<Posts[]>([]);
  const [loadingStatus, loadingUpdater] = useState<boolean>(false)
  // console.log("Called Page")
  // console.log(fetchMockData())
  useEffect(() => {
    const loadContent = async () => {

      // console.log("load content called")
      let fetchContent = await fetchMockData();
      // console.log("Finished loading")
      pageUpdater(fetchContent)
      loadingUpdater(true)
    }
    loadContent();

  }
    , []
  )

  if (!loadingStatus)
    return <div>Loading...Loading...Loading...</div>
  return (<div className="bg-white-500">
    <Button>Test button</Button>
    This is the page
    <form>
      <FieldGroup>
        <Field>
          <FieldLabel>
            This is the name
          </FieldLabel>
          <Input placeholder = "Fill ur name here" required>
          
          </Input>
        </Field>
      </FieldGroup>
    </form>
  </div>)}