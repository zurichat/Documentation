# Zuri Chat App (Desktop)
## `Overview`
ZuriChat is a collaboration hub that brings the right people and tools together to get work done. From Fortune 100 companies to corner markets, millions of people around the world use ZuriChat to connect their teams, unify their systems, and drive their business forward.

## `Goals`
Zuri Chat is a DAO set up with the intent of creating a flexible and extensible communication platform for groups.

Zuri Chat is like Slack, but rather than being built like an application, it’s built as a platform where first-class apps are added to the platform, and can extend the functionality in a myriad of ways.

The idea was conceived during a large-scale coder training program - and because it had more than 300 active, co-owning developers, it was decided that it should be built as a distributed autonomous organisation.


## `Requirements`
- DM, Chats and Channels should be working
- All plugins should be functional
- Users should be able to create and join workspaces
- Users should be able to add and remove plugins seamlessly
  
## `Open Questions`
- How do we manage system updates across teams ?
- How can the app support multiple languages and regions ?
- How do we serve companies who aren't tech-savvy ?

## `Approach`
- We are working with team leads of other departments to ensure we update with their works and vice versa?
- We are building flutter-desktop app to support multiple languages and time zones?
- We are building a very user-friendly app to carter for non-tech-savvy companies?

## `Measuring Impact`
- We are periodically sending out surveys to our customers to rate our services, evaluate their satisfaction and identify their problems while using the app
- We are working with the support team, getting feedback from the customers

## `Security and Privacy`
- Users are  asked to provide a password during registration, which will be used to login 
- The app sends an OTP to the user email for confirmation, upon confirmation users can use the app with the password
- Users are advised to keep their password safe and it should be difficult to predict
- Users are advised to change their passwords periodically
- To protect user data, we will include encryptions and firewalls
  
## `Milestones`
The alpha version of the app will be released by the 15th of November 2021

## `Features`
- Onboarding
- ### `Authentication`
  - Signup
  - Login
  - Logout
  - Confirm Password
  - Verify Token
  - Social Login
  - Reset/change password
- ### `Organization`
  - Create/delete a workspace
  - Display a list of orgainization
  - Get organization by url
  - Get all organizations
  - Update organizations
  - Add/remove a plugin from an organozation
  - Get all plugins from an orgainization
  - Add/remove users from  a workspace
  - Create/delete channels
  - Make a channel private/public
  - Reactivate/Deactivate users in an organization
- ### `Plugins`
  - Channels
  - Direct Messages
  - Music Plugin
  - Chess plugins
  - Todo plugins
- ### `Market Place`
  - Get all plugins from the marketplace
  - Get plugins details
  - Delete your plugin from the marketplace
- ### `Blog`
  - Create a blog post
  - Read a blog post
  - Read all blog posts
  - Delete a blog post
  - Update a blog post
  - Comment on a blog post
  - Read all comments on a post
  - Like/unlike a blog post
  - Subscribe to zuri mail

- ### `Contact Us`





## `Technicalities`
 ## `Sign Up` 
**Creating an account can be done in two ways** 

 ### **Email and password** 
 - The password has to be inputed twice.
 -  Click on the terms and conditions, if everything is okay, tick the checkbox.
 -  Click on `Create Account`.
 -   A six digit `OTP` will be sent to your email address, copy and paste the code.
 -   You will be redirected to the [Sign in screen](#sign-in)
  ### **Google** `pending`
  
  ## `Sign In`
  **A registered email and password is used to access the account** 
  *For forgotten password:* To recover forgotten password the user is required to **;**
  - Input the registered email
  - A 6 digit `OTP` is sent to the registered email.
  - Recieve and enter `OTP` 
  - Enter and confirm new password
  - Navigate to [sign in screen](#sign-in)
  - Enter your email and new password
  - You will directed to the [organization screen](#organization)


## **Organization**
It displays the list of organizations  a user belong to and also the option to `add organizations,` `preferencs,` `help.` 
**Add An Organization** 
 This enable the user to **;** 
 - **Create a new organization / Create a workplace**
 1. Click on your verified email.
 1. Add the name of your organization.
 1. Add the project name your team is working on.
 1. Add the email address of team members `or` invite from contacts `or` copy and share your invite link. 
 *another email address can be used.* 


 - **Sign in to another organization or workspace. **
 1. Click on your verified email
 1. Enter organization `url.` 
   *another email address can be used.* 
   
 - **Join another organization / workspace  **
 1.   Click on your verified email.
 1. Enter organization `url.` 
  *another email address can be used.* 

  ## **Preferences**
  ### Languages and region 
  - **Select language** 
  1. click on language 
  1. select the language of your choice
  1. click on okay 


  - **Timezone**
 1. the timezone is generated automatically by default
 1. use the toggle button to set it manually
  
  ### **Theme**
-  theme is set to dark mode by default
-  on click, a pop up with options will be displayed
-  after selecting mode of choice
-  click on set


  ### **Advanced**
  - Emoji Deluxe  *on tap, choose your default skin tone*
  - Show image previews *use the toggle button to set your preference, it's on by default*
  - Open web pages in app *use the toggle button to set your preference, it's on by default*
  - Display typing indictors *use the toggle button to set your preference, it's on by default*
  - Allow animated image and emoji *use the toggle button to set your preference, it's on by default*
  - Optimize image uploads *use the toggle button to set your preference, it's on by default*
  - Reset Cache `Pending`
  - Force Stop *Unsaved data may be lost.*
  
  ## **Send Feedback**
  - On tap, a `compose feedback` popup is displayed
  - typed in your feedback and click `okay`

## **Help Center** `Pending`
## **Privacy & Licences** `Pending`


 

# `Home Screen`
Select organization or join organization, this takes you to the home page
At bottom of the screen, you will find the Home screen, 
[Dm screen](#dm-screen) and [You screen](#you-screen) logo. On the home screen, you will find **;**
-  **Jump to:** It enables user to search 
-  **Threads:** 
-  **Unreads:**
## **Channels:**
- To add a channel, click on the add channel button. 
- The user is directed to new channel screen.
- Add channel name (it must be lowercase and without space).
- Add channel description.
- use the toggle button if you want the channel to be private.
- Then click on the create button.
- This creates the new channel and adds it to the home screen.
  
  ## **DM Screen**
  Send and recieve messages

 ## **You Screen**
 The profile picture and username of the user is displayed. Click on the picture and name will take the user to the `edit profile screen`. Users can set [status,](#status) [pause notifications,](#pause-notification) [set yourself as away,](#set-yourself-as-away--active) [saved item,](#saved-item) [view profile,](#view-profile) notifications and [preferences.](#preferences)

### **Edit Profile Screen**
Users can **;**
- Edit their full name
- Display name (this is the name that will show up in zuri chat)
- What i do (your job or course track)
- Phone
  
### **Status**
Click on `What's your status?` takes the user to a screen **;**
- Emojis can be used 
- custom status are provided
- after adding a status set it to a timed duration (i.e don't clear, clear after today)
- click on save

### **Pause Notification** 
- On click the user is directed to `Do not disturb` page 
- Set the desired duration and save

### **Set Yourself As Away / Active**
Tap on it to change

### **Saved Item**
- On click, the user is directed to another page.
- All files and messages saved will be displayed.

### **View Profile**
- On click, the user is directed to a new screen
- The profile picture and username of user is displayed
- Message (send a message to yourself, create a to-do-list)
- [Edit Profile](#edit-profile)
- What I do i.e profession, course track
- Status (what you are up to currently). You can edit it
- Mobile Number
- Email Address
- Notification `set the sound, general settings`
- [Preferences](#preferences)

 
   



