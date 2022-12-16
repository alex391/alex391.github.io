---
layout: post
---
# Preface
This is a collection of settings that have been helpful to me. I realized that all of these have just been sitting in my brain, of no use to anyone else. I don't recommend that you actually *use* all of these settings (except for the [Browsers - in general](#browsers---in-general) settings - they're all good IMO) but I do think that all of them are helpful enough to share.
# Idea (and other Intellij IDEs)
## Turn on save indicator
File -> Settings -> Mark modified(\*)
## Turn on Ligatures
Turns `!=` into `≠` (but wider so that it still takes up both spaces) for better readability
Editor -> Font -> Enable ligatures
# VSCode
## Turn off Telemetry
File -> Preferences -> Telemetry Settings -> off
or search for `@tag:telemetry` in settings
## Change Font
search for `font` then change the font - just like in CSS
I use `"Cascadia Code",Consolas, 'Courier New', monospace`
## Turn on Ligatures
Turns `!=` into `≠` (but wider so that it still takes up both spaces) for better readability
search `ligatures` in settings, then set  `"editor.fontLigatures":` to `true`  
note that your font has to support them - use a font like Cascadia Code, Fira Code, or JetBrains Mono (see [[#Change Font]])
# Browsers - in general
## [uBlock origin](https://ublockorigin.com)
Beware of non-origin uBlock 
## [Secure DNS](https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/encrypted-dns-browsers/)
Also known as DNS over HTTPS (DoH)
## [HTTPS only mode](https://www.eff.org/https-everywhere/set-https-default-your-browser)
# Steam
## Control what content shows up on the store
(Your name next to Big Picture Mode) -> Store Preferences
# Windows
## [PowerToys](https://learn.microsoft.com/en-us/windows/powertoys/)
## Disable mouse acceleration
Also known as "Enhance pointer precision"  
Control Panel -> Search "mouse" -> Mouse -> Pointer Options -> uncheck Enhance pointer precision
## Turn on Toggle Keys
Beep when you turn on caps lock, and the other lock keys.
Either hold down Num Lock for 5 seconds, then click "Yes", or in Control Panel go to Ease of Access -> Ease of Access Center -> Make the keyboard easier to use, and then under "Make it easier to type" check "Turn on Toggle Keys."
## Better volume mixer in Windows 10
This volume mixer is default in Windows 11.
Right click on the speaker icon, then click "Open sound settings", scroll down, and click "App volume and device preferences."
# Obsidian
## Spell check toggle
Settings -> Editor -> Behavior -> Spellcheck
# Git
## Set the editor to nano
```bash
git config --global core.editor nano
```
## Set pull to ff-only
```bash
git config --global pull.ff only
```
[Why?](https://blog.sffc.xyz/post/185195398930/why-you-should-use-git-pull-ff-only#:~:text=How%20Git%20Pull%20%E2%80%93ff-only,forwarded%E2%80%9D%20without%20creating%20new%20commits)
