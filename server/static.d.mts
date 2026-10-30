import type { Server } from 'node:http'
export function serve(opts?: { port?: number; host?: string; root?: string }): Promise<Server>
