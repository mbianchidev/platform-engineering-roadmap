import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

import viteConfig from '../vite.config.js'

test('builds assets from the custom-domain root', () => {
  assert.equal(viteConfig.base, '/')
})

test('publishes the canonical custom domain', async () => {
  const cname = await readFile(new URL('../public/CNAME', import.meta.url), 'utf8')

  assert.equal(cname.trim(), 'platform-engineering-roadmap.mbianchi.dev')
})
