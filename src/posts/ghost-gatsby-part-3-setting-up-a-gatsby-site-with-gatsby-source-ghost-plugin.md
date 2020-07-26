---
slug: '/blog/ghost-gatsby-part-3-setting-up-a-gatsby-site-with-gatsby-source-ghost-plugin'
date: '2019-02-04'
title: 'Ghost & Gatsby Part 3 - Setting up a Gatsby site with gatsby-source-ghost plugin'
---

This is the third part of the [series of posts](https://nishantdania.com/blog/guide-to-setup-ghost-gatsby-website) to setup your personal website using GatsbyJS and Ghost deployed on AWS.

I'll go into some details of how the Ghost plugin for Gatsby works in a later post. For now, we'll just use a basic starter project to connect it your Ghost blog.

# Generated an API key from Ghost

Visit the admin page of your blog. It it the `/ghost` route of your blog. E.g. `ghost.aotd.co/ghost`.

Click `Integrations` in the sidebar.

Scroll down and click `Add custom integration`.

Give it any name.

Click `Create`

Copy the API key that gets generated.

# Using the starter project

We will use the [ghost-gatsby-starter-mini](https://github.com/nishantdania/ghost-gatsby-starter-mini) project which is just a trimmed down version of the official [starter project](https://github.com/TryGhost/gatsby-starter-ghost). Feel free to use any of these, the trimmed version just removes any components or CSS that Ghost created by default to give you a cleaner start.

Open your terminal and install Gatsby cli

`npm install --global gatsby-cli`

Install the starter project (Replace `personal blog` with the name of your blog):

`gatsby new personal-blog https://github.com/nishantdania/ghost-gatsby-starter-mini`

Enter the project directory:

`cd personal-blog`

There is a `.ghost.json` file inside this folder. We will now edit this file to set the API key of your project.

Open that file and change the `apiUrl` value to your Ghost blog url for both production and development environments E.g. `ghost.aotd.co`

Set the `contentApiKey` to the API key you generated in the Ghost Integrations.

Thats it. Your Gatsby site will now pull data from your Ghost blog.

To run this project, use the following command:

`gatsby develop`

This will pull the data from your blog and create static files from it.

If you used the mini-starter project, you'll see a basic index page and the corresponding post pages at `http://localhost:8000/`.

In the [last part](https://nishantdania.com/blog/ghost-gatsby-part-4-setting-up-aws-codebuild-for-auto-deploying-the-site) of this series, we'll deploy this site to your AWS S3 bucket using AWS CodeBuild which allows an auto deploy of your code from Github.

For any questions/doubts/issues, head over to the [Ghost Gatsby Spectrum channel](https://spectrum.chat/ghost-gatsby).
