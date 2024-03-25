import { expect, test } from '@playwright/test'

test('display the begin of the game', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  expect(page.getByText('Players Hand')).toBeVisible()
  expect(page.getByText('Dealers Hand')).toBeVisible()
  expect(page.getByRole('button', { name: 'Hit' })).toBeVisible()
  expect(page.getByRole('button', { name: 'Stand' })).toBeVisible()
})

test('should allow the player to hit and receive a card', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  await page.getByRole('button', { name: 'Hit' }).click()

  expect(page.getByText('Players Hand')).toBeVisible()
})

test('should allow the player to stand and end the game', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  await page.getByRole('button', { name: 'Stand' }).click()

  expect(page.getByText('Players Hand')).toBeVisible()
})
