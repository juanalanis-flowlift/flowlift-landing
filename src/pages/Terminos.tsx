import Legal, { type LegalDoc } from './Legal'
import { useLang } from '../i18n/LangContext'
import es from '../content/legal/terminos.es.json'
import en from '../content/legal/terminos.en.json'

export default function Terminos() {
  const doc = (useLang() === 'en' ? en : es) as unknown as LegalDoc
  return <Legal page="terminos" doc={doc} />
}
