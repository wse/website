---
slug: '/blog/ghost-gatsby-part-4-setting-up-aws-codebuild-for-auto-deploying-the-site'
date: '2019-02-04'
title: 'Ghost & Gatsby Part 4 - Setting up AWS CodeBuild for auto deploying the site'
---

This is the last part of the [series of posts](https://nishantdania.com/blog/guide-to-setup-ghost-gatsby-website) to setup your personal website using GatsbyJS and Ghost deployed on AWS.

Create a git repository for your project and push the code that we generated in the previous post to this repo.

Open the [CodeBuild console](https://console.aws.amazon.com/codesuite/codebuild/projects?region=us-east-1). Make sure that the Region selected in the top left corner is that same as your S3 bucket. In my case, it is `N. Virginia`.

Click `Create Build Project`.

Enter a `Name`.

Choose `Github` in the `Source provider` field.

Click `Connect to Github` and grant access.

Choose `Repository in my GitHub account` option.

Select the repository of your Gatsby project.

Click `Additional Configuration` in the Source section and click `Rebuild every time a code change is pushed to this repository`. This will send a webhook to rebuild your project when you push any change.

Choose `Ubuntu` in the `Operating system` field.

Choose `Nodejs` as the `Runtime`.

Choose the `10.14.1` in the `Runtime version` field.

Choose `New Service Role` in the `Service role` section.

Leave everything else to default and click `Create Build Project`.

# Giving CodeBuild the access to the S3 bucket

Open the [IAM console](https://console.aws.amazon.com/iam/home).

Click `Policies` in the sidebar.

Search for `AmazonS3FullAccess` policy.

Click the `Policy usage` tab.

If you can see your codebuild role that you created earlier in the list here, you can skip attaching it again. Else continue.

Click `Attach`.

Select the codebuild role that you created in the previous section and click `Attach Policy`.

# Adding a buildspec.yml file

Create a file called `buildspec.yml` in the root of your project and enter the following (Replace `aotd.co` with your bucket name):

```
version: 0.1
phases:
  install:
    commands:
    - npm install --global yarn
    - npm install --global gatsby-cli
    - yarn
    - gatsby build
    - aws s3 sync public s3://aotd.co --delete
```

Commit this file and push to master branch. This will trigger a build in the AWS CodeBuild.

You should now have a running Gatsby site on your domain.

Whenever you publish an new blog from the Ghost editor, you can head over to the CodeBuild Dashboard and click `Start Build`. This will create the new static files from your Ghost blog and deploy your site.

I hope this series was useful to you.
You can now configure your website in whichever way you want. The code for my personal blog is hosted at [Github](https://github.com/nishantdania/website). Feel free to use this as a reference if you want.
For any questions/doubts/issues, head over to the [Ghost Gatsby Spectrum channel](https://spectrum.chat/ghost-gatsby).

Cheers !
