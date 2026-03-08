import { useEffect } from 'react'

// Désactivé : le widget TrustIndex peut charger du contenu en HTTP et provoquer "connexion non sécurisée".
// Réactiver quand TrustIndex sera 100 % HTTPS ou après vérification en Console (F12).
export const useTrustindex = () => {
  useEffect(() => {
    // Ne pas charger le script pour éviter contenu mixte HTTPS/HTTP
    // if (document.getElementById('trustindex-loader') || window.Trustindex) return
    // const script = document.createElement('script')
    // script.id = 'trustindex-loader'
    // script.src = 'https://cdn.trustindex.io/loader.js?bdd668f624ea6214a4761c20403'
    // script.async = true
    // script.defer = true
    // document.body.appendChild(script)
  }, [])
}



