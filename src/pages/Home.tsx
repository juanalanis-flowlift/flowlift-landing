import Seo from '../components/Seo'
import { ROUTES_META } from '../content/seo'

// TODO fase 2: reproducir reference-design/Home.dc.html
export default function Home() {
  return (<div className="ed"><Seo meta={ROUTES_META[0]} /><p style={{ padding: 120 }}>Home (fase 2)</p></div>)
}
