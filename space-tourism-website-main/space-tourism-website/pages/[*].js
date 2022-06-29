
import Head from "next/head"
import NavBar from "./Component/NavBar/navBar"
import useWindowsState from "./Component/Utils/useWindowsState"
import { useRouter } from 'next/router'
import { useState,useRef,useEffect } from "react"
export default function notFound() {
    const router = useRouter()
    useEffect(async () => {
      router.push('/home')

    },[])
      return null
    }