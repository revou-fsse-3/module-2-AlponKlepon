# How To Automate Changes (auto-deploy) of your website

## 1. Register on Netlify

- Open https://www.netlify.com/, and hit the sign up button
  ![netlify signup](assets/homepage-netlify.png)
- Choose one of sign up option. On this case, Github is more recommended.
  ![netlify signup](assets/sign-up.png)
- Authorize your Github account to Netlify, and here the interface when you success authorized your account.
  ![netlify signup](assets/interface-netlify.png)
- Now, hit the **Sites** menu. After that, press **Add new site** button, and choose **Import an existing project**
  ![netlify signup](assets/pre-deploy.png)
- You can choose one option of deployment source. For now, we using **Deploy with Github**
  ![netlify signup](assets/deploy-menu.png)
- Authorized your Github account. If success, it will displayed like this.
  ![netlify signup](assets/authorized.png)
- Now you can choose repository that you want to deploy.
  ![netlify signup](assets/repository-option.png)
- Setup your base directory by writing name of your directory.  
  ![netlify signup](assets/base-directory.png)
- Now your website is On Air !

## 2. Buy Domain for your website

- After deploying your website, now you try buy domain. There are so many website out there that sell domain, for now we will using **Niagahoster**.
- Open https://www.niagahoster.co.id/, press login button.
  ![netlify signup](assets/niaga-hoster.png)
- After login, hit the **Domains** menu, and choose **Get a new Domain**.
  ![netlify signup](assets/hpanel-hostinger.png)
- Now you can enter name of your domain based on website that you have. Choose domain according to your budget.
  ![netlify signup](assets/domain.png)
- Fill the form for the payment.
  ![netlify signup](assets/niagahoster.png)
- When all ready, you can start setup your domain in **Netlify**.
  ![netlify signup](assets/domain-setup.png)
- Now go to **Netlify** again and choose **Domain** menu. Copy all the name server.
  ![netlify signup](assets/niaga-to-netlify.png)
- Paste it on **DNS/Nameservers** by clicking **Change Nameservers**.
  ![netlify signup](assets/dns.png)
- Now your website can be accessed using the new domain name.

## 3. Final Result

Finnaly, now your website have auto-deploy feature !
You can check one of my website here https://quadrat.biz.id