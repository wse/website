const puppeteer = require('puppeteer')
const chalk = require('chalk')
const fs = require('fs')
const fm = require('front-matter')

;(async () => {
  // Find all files in the posts folder
  fs.readdirSync('src/posts').forEach(async (file, index) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({
      width: 1200,
      height: 675,
      deviceScaleFactor: 2,
    })

    const contents = fs.readFileSync(`src/posts/${file}`, 'utf8')
    const frontmatter = fm(contents)

    // Parse the slug from the frontmatter
    const slug = frontmatter.attributes.slug
    console.log(chalk.green('Post #' + (index + 1) + ':' + ' ' + slug))

    // Goto page and take screenshot
    try {
      const url = `http://localhost:8000${slug}/seo`
      const imagePath = `src/images/social-images${slug}.png`

      await page.goto(url)
      await page.waitForSelector('div', { visible: true })
      await page.screenshot({ path: imagePath })
      await browser.close()
    } catch (e) {
      console.log(chalk.red('Error', e))
      await browser.close()
    }
  })
})()
