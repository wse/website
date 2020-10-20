---
slug: '/blog/ghost-gatsby-part-2-setting-up-a-ghost-blog-on-aws-ec2'
date: '2019-02-04'
title: 'Ghost & Gatsby Part 2 - Setting up a Ghost blog on AWS EC2'
---

This is the second part of the [series of posts](https://nishantdania.com/blog/guide-to-setup-ghost-gatsby-website) to setup your personal website using GatsbyJS and Ghost deployed on AWS.

# Setup an EC2 instance to host Ghost

Open the [EC2 console](https://console.aws.amazon.com/ec2/v2/home).

Click `Launch Instance`.

Choose the `Ubuntu Server 18.04 LTS (HVM), SSD Volume Type, 64 bit x86` option and click `Select`.

Choose the `t2.micro` as the instance type.

Click `Configure Security Group` tab on the top.

Choose `Create a new security group` in the `Assign a security group` section. You can use the defaults provided.

Click `Add Rule` and select `Http`.

Click `Add Rule` again and select `Https`.

Keep the `SSH` rule as is.

Click `Review and Launch`.

Click `Launch` on the next screen.

Choose `Create a new key pair` option in the modal and give it a name.

Click `Download Key Pair` and save the private key in a secure place. You'll need this to connect to the EC2 instance via SSH. Also, change the permissions of this file using this command in the terminal of your computer `chmod 400 /path-to/my-key-pair.pem`. This is needed since AWS wont allow you to connect to this instance otherwise.

Click `Launch Instances`.

It'll take a few minutes for your instance to get deployed.

Visit the EC2 Home page and click on `Instances` in the sidebar.

Click on the instance that you just created to view its settings.

Copy the `IPv4 public IP`. We'll host the ghost blog on this address.

# Setup the DNS record for the ghost blog

Open the [Route53 console](https://console.aws.amazon.com/route53/home).

Click on `Hosted Zones` in the sidebar.

Click on your domain name to enter the settings for that domain.

Click `Create Record Set`.

In the `Name` field, you'll set the name to be where you want your Ghost admin to be installed. In my case, it'll be `ghost.aotd.co`. This is where you'll access your ghost editor later. Type in `ghost` in the `Name` field, or whatever you feel like.

In the `value` field, enter the IP address of your EC2 instance that you just created.

Click `Create`.

# Setup Ghost on the EC2 instance

Open your terminal and connect to your instance using this command:

`ssh -i /path/my-key-pair.pem ubuntu@EC2_IP_THAT_YOU_COPIED`

Type `yes` for the RSA fingerprint message.

You are now connected to your instance. You'll now install Ghost on this instance.

Run the following commands one by one in the EC2 terminal, enter `Yes` whenever asked in the process:

```
sudo apt-get update
sudo apt-get upgrade (A modal might appear, press Enter to use the default value)
sudo apt-get install nginx
sudo ufw allow 'Nginx Full'
sudo apt-get install mysql-server
```

If you are running Ubuntu 18.x, the following additional steps are required:

```
sudo mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
quit
```

Install NodeJS:

```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash
sudo apt-get install -y nodejs
```

Install Ghost CLI:

```
sudo npm install ghost-cli@latest -g
```

Install Ghost admin:

```
sudo mkdir -p /var/www/ghost
sudo chown ubuntu:ubuntu /var/www/ghost
sudo chmod 775 /var/www/ghost
cd /var/www/ghost
ghost install
```

For this question: `Enter your blog URL`, enter the full https url you created earlier. In my case, it is `https://ghost.aotd.co`

Enter the value for `Enter your MySQL hostname` as `localhost`

Enter `ubuntu` as the `username`. Enter a password for the same.

For the question `Do you wish to set up "ghost" mysql user?` type `n`.

Type `Y` for the next steps.

Enter your email address when asked for the SSL setup.

Generating the SSH keys will take a few minutes. Type `Yes` for setting up systemmd and starting Ghost when asked.

Thats it. You'll now have a Ghost Blog running on your domain e.g. `ghost.aotd.co`. Go to that URL and setup our blog.

Head over to the [next part](https://nishantdania.com/blog/ghost-gatsby-part-3-setting-up-a-gatsby-site-with-gatsby-source-ghost-plugin) to connect this blog to a Gatsby site.

For any questions/doubts/issues, head over to the [Ghost Gatsby Spectrum channel](https://spectrum.chat/ghost-gatsby).
