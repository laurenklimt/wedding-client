# wedding-client
I built a RSVP website for my wedding using React. The client connects to the server which can be found at https://github.com/laurenklimt/wedding-server.

The purpose of the website was to to provide guests with event details and collect RSVPs. It was important for the website to be mobile responsive and easy for guests to navigate around.

## View the website
To view the website, please visit https://laurenbenjiwedding.com/

The website was built so that only people who were invited to the wedding can see the contents. Invitations were sent to guests with a personalised website link so that they were authenticated automatically when they visited the website and they were only able to RSVP for the members in their party. If the guest lost their personalised link, they were able to authernticate themselves using the email adress that their invitation was sent to.

Therefore, there are two ways to access the website as a test guest:
  1. Navigate to the personalised link https://laurenbenjiwedding.com/?id=66541747441638d19d0efa41
  2. Navigate to the home page https://laurenbenjiwedding.com/ and authenticate using the email adress **test@email.com**

Both authentication methods store the userID in localhost so that the guest will remain authenicated on their device when they revisit the website. To test both authentication methods, use incognito mode in your browser.

## Website features
Autentication page - desktop
![image](https://github.com/laurenklimt/wedding-client/assets/30426876/f5d15b63-271b-4d6b-9368-f4e6014eb3b7)

Autentication page - mobile (error message)
![image](https://github.com/laurenklimt/wedding-client/assets/30426876/a47bd4c4-2fdb-4945-b101-bdda8d773b79)


Home page - desktop with nav bar
![image](https://github.com/laurenklimt/wedding-client/assets/30426876/9556185c-95f0-44b3-a1ca-8953b7d00d69)

Home page - mobile with sticky hamburger menu
![image](https://github.com/laurenklimt/wedding-client/assets/30426876/cfec52da-677a-4875-813a-7129aa8f4068)


RSVP page - desktop

The RSVP form populates on load with the last submitted data
![image](https://github.com/laurenklimt/wedding-client/assets/30426876/f94d8da8-0623-48ad-94cb-cef7ea0d0864)

RSVP page - mobile

![image](https://github.com/laurenklimt/wedding-client/assets/30426876/1f141898-48ba-43ee-9901-5e58aa45b44f)
