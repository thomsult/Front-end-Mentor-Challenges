import React,{useEffect} from 'react'
import { useRouter } from 'next/router'

export default function index() {
   const router = useRouter()
   useEffect(async () => {
     router.push('/destination/Moon')

   },[])
   return null
  }
