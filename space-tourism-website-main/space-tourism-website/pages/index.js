

import { useRouter } from 'next/router'
import { useState,useRef,useEffect } from "react"
export default function IndexPage() {
    const router = useRouter()
    useEffect(async () => {
      router.push('/home')

    },[])
      return null
    }