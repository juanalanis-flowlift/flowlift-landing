import Legal, { type LegalDoc } from './Legal'
import { useLang } from '../i18n/LangContext'
import es from '../content/legal/privacidad.es.json'
import en from '../content/legal/privacidad.en.json'

export default function Privacidad() {
  const doc = (useLang() === 'en' ? en : es) as unknown as LegalDoc
  return <Legal page="privacidad" doc={doc} />
}
