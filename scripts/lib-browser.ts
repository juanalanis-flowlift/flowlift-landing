import { chromium, type Browser } from 'playwright'

// Lanza Chromium. En tu computadora: `npx playwright install chromium` una sola vez.
export function launch(): Promise<Browser> {
  return chromium.launch()
}
