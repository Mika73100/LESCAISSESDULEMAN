import { useEffect } from 'react'

export const useTrustindex = () => {
  useEffect(() => {
    if (document.getElementById('trustindex-loader') || window.Trustindex) return

    const script = document.createElement('script')
    script.id = 'trustindex-loader'
    script.src = 'https://cdn.trustindex.io/loader.js?bdd668f624ea6214a4761c20403'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  }, [])
}

