# Ghost Pepper Bot
Ghost Pepper is a general purpose Discord bot. The way it is currently setup, it will run on your own system and will use your own system resources. If this gets enough stars, then I will host it my self to make it easier for you to use.

## Instalation Instructions
1. Unzip file.
1. Hold SHIFT and right-click in the empty space of the folder and select "Open PowerShell window here".
1. Type `npm --version` and press enter.

    If you get an error, go to nodejs.org and install node. Otherwise continue with the folowing steps.

1. Go to discord.com/developers and sign in with an existing Discord account.
1. Under applications, select "New Application". Title it Ghost Pepper Discord Bot.
1. On the left hand side, select "bot", then "Add Bot" and "Yes, do it!".
1. Click on the discord logo and locate the bots folder and select _icon.png_ (Not Yet availible).
1. Click "Copy" and then create a file in the main Ghost Pepper directory called token.json
1. Paste the following code into the file but replace `your-token-here` with your token you copied from the application page.
```
{
    "token": "your-token-here"
}
```
1. Save the file then navigate to the PowerShell window.
1. In the PowerShell window type `node .`

    The bot is now running. You can start the bot at any time in the same way. To stop the bot, select the window and do CTRL + C.

1. Return to the Discord website and select "OAuth2" on the left hand side.
1. Select "bot" then in the new box that appears, select "Administrator".
1. Select copy and paste the URL into your web browser.
1. Accept the prompts and select the server you wish to invite the bot to.

    The bot has now been added to your server. 

    To remove, simply right click the bot on the left hand side and select "Kick".


## Settings
Anything settings that can be changed will be under config.json.

- Prefix

    The prefix that will be used before any and all commands.
- Version
    
    The current version of the bot (Not to be changed!)
- modRole

    The exact name of your moderators role.

- banMessage

    The message the user is shown when they are banned.

    Variables:
    
    `${message.guild}` - The server name

    `${message.author}` - The person doing the banning

    `${user.tag}` - The person being banned

- kickMessage

    The message the user is shown when they are banned.
    
    Variables:
    
    `${message.guild}` - The server name

    `${message.author}` - The person doing the banning

    `${user.tag}` - The person being banned

-  memberRole

    The role that all of your members will have

- mutedRole

    The role that will be given to a member when they are muted. Make sure to give no permissions except `Real Text Channels & See Voice Channels`.
    

## List of Commands
- Version

    Usage: version

    Aliases: ver

- Kick

    Usage: kick {user}

- Ban

    Usage: ban {user}

- Mute

    Usage: mute {user} {time [s, m, h, d,]}

    Time: s = Seconds, m = Minutes, h = Hours, d = Days.