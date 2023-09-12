import { useLanguage } from "../context/LanguageContext"


export default function Home() {

  const {language} = useLanguage()

  return (
    <div>
    {language === 'es' ? (
      <h1>Bienvenido a mi sitio web</h1>
    ) : (
      <h1>Welcome to my website</h1>
    )}
    {/* Resto del contenido */}
  </div>
  )
}
