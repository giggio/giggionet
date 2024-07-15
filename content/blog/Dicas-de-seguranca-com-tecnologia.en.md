---
title: "Technology Safety Tips"
date: 2022-02-07T13:00:00-03:00
author: Giovanni Bassi
tags:
  - e-mail
  - android
categories:
  - segurança
  - ti
---

### Introduction

Every now and then I post [on my Twitter](https://twitter.com/giovannibassi) something about security and I usually get
a lot of feedback, many people comment that the tips are useful. I will summarize some of these tips in this post. It is
important to make it clear that I am not a security expert. These tips are practices that I have learned throughout my
life, that I use personally and that I think can be useful, especially for those less technical people, but I invite
those who read me to draw their own conclusions and validate everything I am explaining here.

My main focus will be Windows and Android, but some tips are independent of operating systems, and all of them can be
transferred to other systems.

I will divide the tips into several sections. Let's go.

### Account and password security

#### Don't give your password to anyone

This one is kind of obvious, but a lot of people do it. Someone with your password can impersonate you, understand the
implications of this.

#### Don't repeat passwords or use patterns

Don't use the same password for different accounts. Especially your email password. Never use it anywhere else. You'd be
surprised at how insecure most applications are. Imagine that your password could be saved in plain text in an Excel
spreadsheet, and could be read freely by the owner of the website you're registering on. In many places, it's not much
better than that.

Point to note: if a service offers the option of recovering your password by sending it to you via email, that means its
security is low. If it can send you the password, it can read your password. Avoid this service if you can. The right
thing to do is for the service not to be able to read your password. It should be stored encrypted, so that not even the
technicians operating the service can read it. A password change process in case you forget it should involve generating
a new password, never sending the old password via email. After all, emails are not encrypted by default.

Also, do not use patterns, for example “mymother’sname22”, and then change it to “mymother’sname23” and then to
“mymother’sname24”. If the first password is leaked, the first thing they will try after it will be small variations.

And how do you remember all these passwords? See the next point.

#### Use a password manager service/app

Use a password manager app. This app will save all your passwords, and the only password you will need to remember is
its own.

In this app, save all your passwords. This app will even fill in the passwords for you on websites and apps, both on
your smartphone and on your computer.

Once you have a password manager app, use only random passwords. Every password manager will have a password generator,
where you tell whether you want a password with lowercase characters, uppercase characters, numbers and symbols, and
what the expected length of the password is. This password will be completely random. Generate passwords of 40
characters or more and save them in a password manager. The only exception are applications that run on smart TVs and
require a password to log in, and you have to use that crappy keyboard on the TV. In these cases, use shorter but
equally random passwords. However, many apps today allow you to log in with a code that appears on the TV, or a QR code.

Once you have adopted a password manager, change your old passwords to random ones. This is important.

There is no risk of the password manager service having access to your passwords, because they are encrypted in the
service provider's database and can only be decrypted on your device with your password. For this very reason, if you
forget the password for this service, all the passwords saved there will be lost, because they will be impossible to
decrypt.

I recommend using the [Bitwarden](https://bitwarden.com/) application, which is free software and therefore auditable.
The service is free for personal use, and they monetize themselves by offering the service to companies. It will work on
both smartphones and computers, at no cost.

For the password for this application, choose a long password that is easy to remember. A good tip is to use
“passphrases” instead of “passwords”, that is, phrases instead of words for passwords. For example, if your mother was
born on September 4th, you could use the password “My mother was born on September 4th!”, just like that, with spaces
and everything. A password like that, with almost 40 characters, some accented characters, numbers, uppercase letters,
lowercase letters and a special character, is very difficult to guess or use a brute force application to crack, but it
is easy to remember. Write it down on a piece of paper until you are sure you remember it, and as a last resort, if you
think you might forget it, keep this piece of paper somewhere safe, not exposed to anyone. And use 2FA with the password
manager, this is essential, I explain how to do it below.

##### Disable your browser's password filler

It's common for your browser to offer the option to save passwords for you. This is often not secure, and if your
account is compromised, your passwords may be compromised as well (some browsers back up your account along with your
password so you can use the same saved password on different devices). Since you'll already be using the password
manager mentioned above, disable this feature and delete your passwords. To do this:

- [Edge](https://support.microsoft.com/en-us/microsoft-edge/save-or-remove-passwords-in-microsoft-edge-b4beecb0-f2a8-1ca0-f26f-9ec247a3f336)
- [Firefox](https://support.mozilla.org/en-us/kb/password-manager-memorize-delete-change-accounts-and-passwords)
- [Safari](https://support.apple.com/en-us/HT211145)
- [Chrome](https://support.google.com/chrome/answer/95606?hl=en-us)

#### Enable two-factor authentication

If any of your passwords are leaked, they could be used to access the account they were supposed to be protecting. In
this case, the person who hacks into your account could use the service as if they were you. Imagine the risk of this in
a banking or online shopping app, for example? The person could make a purchase in your name, leaving you at a loss.
Worse, if they access your email, they can steal most of your passwords for other services using email password
recovery.

To avoid this, enable two-factor (or multiple) authentication. This will require, in addition to your password, another
way(s) to prove that you are yourself. There are several ways to do this, and the most practical and secure is to use an
authenticator app. In this app, the website that has the password will show you a QR Code, which you will read with the
authenticator app. With this configured, it will start generating random codes that last about a minute, and which will
be used to log into the sites.

Here's how the login process works:

1. You go to the website (or app) and enter your username and password
2. The website or app asks for the code
3. You open the authentication app, copy the code and paste it into the website/app, and you're granted access.

Please note that if your password is stolen, the thief will not have the app in hand and will not be able to complete
the login process. Even if they have your password, they will not be able to log in. You will also be notified that your
password has been leaked (by the service provider) and will be able to change your password.

It is common for websites to also offer two-factor authentication (2FA) using text messages (SMS), but this is
dangerous. If your line is cloned or your smartphone is stolen, someone could access your account using your line. Avoid
this.

It is also common to use email as a second authentication factor. I do not recommend it. Your email can also be stolen
and used to access all your accounts.

Email and SMS can be used as third or fourth factors, but never as second. In this case, this is what we call MFA
(multi-factor authentication).

When enabling 2FA, you should write down/download recovery codes. These codes allow you to log into your account without
the authentication app, if, for example, your smartphone is stolen. Download them and keep them in a safe place, such as
a pen drive, or print them and keep them in a place where other people cannot access them. This is very important,
because without them, if a theft occurs, you may lose access to the service you were protecting.

Some authentication apps:

- [LastPass](https://lastpass.com/auth/) – backs up to the cloud with your LastPass account
- [Microsoft](https://www.microsoft.com/pt-br/security/mobile-authenticator-app) – backs up to the cloud with your
  Microsoft account
- [Google](https://support.google.com/accounts/answer/1066447?hl=pt-br) – original authentication app

Some services have their own apps, which I also recommend using. Android integrates with Google, and Microsoft
Authenticator is great as an extra layer of authentication, even if you use another app for this.

##### Two-factor authentication on WhatsApp and Telegram

WhatsApp and Telegram register you with your phone number, which means that if they steal your number (clone or steal
your SIM card), they can steal your account. Another very common scam is when someone tries to steal your WhatsApp
transfer code to impersonate you and scam your friends and family.

To avoid this type of problem, both services offer two-factor authentication, where you enter a password in addition to
the code received via SMS. To access your WhatsApp, the person will need the password in addition to the code.

To enable it:

- [WhatsApp](https://faq.whatsapp.com/general/verification/about-two-step-verification/?lang=pt_br)
- [Telegram](https://telegram.org/blog/sessions-and-2-step-verification?setln=pt-br) ([in
  Portuguese](https://canaltech.com.br/apps/como-ativar-a-verificacao-de-duas-etapas-no-telegram/))

#### Check if any of your passwords have been leaked

Some services offer a way to check if your password has been leaked. This is important to know if you need to change
some passwords. Here are some that do this well:

- [Minha Senha](https://minhasenha.com/)
- [Have I been pwned](https://haveibeenpwned.com/) (in English)
- [Firefox Monitor](https://monitor.firefox.com/) (in English)
- [Serasa](https://www.serasa.com.br/premium/darkweb) (paid, but also checks for leaks of Brazilian data, such as CPF,
  etc.)

#### Disable password reset via SMS

Password reset via SMS can be dangerous if the person has access to your number (stolen SIM card or cloned number).
Avoid it, prefer to do it via email, ideally one where you don't have the app installed on your smartphone.

#### Disable email reset using another easily accessible email

Email password reset is important, but not for the email service itself. For example, suppose you have a GMail account
and an [Outlook.com](https://Outlook.com) account, and both are installed on your smartphone, and one is registered as a
recovery account for the other. A thief with access to your smartphone could use one account to change the password for
the other.

Email service password reset (GMail, Outlook, etc.) should be used for an account that is not on your smartphone.
Ideally, one that you rarely use, and that is also protected by 2FA. See the recommendation below about Protonmail.

#### Don't use “security questions”

You know those sites that ask you to enter the name of the first street you lived on, or the name of your first dog, in
order to recover your account in the future? Don't use them. If it is mandatory, choose any question and fill in the
answer text by typing any garbage freely on the keyboard. This information can be used to steal your account.

And, if you use it, be careful not to share this information on social media.

### Security of your smartphone

If your smartphone is stolen, would the thief have access to your entire digital life? How can I avoid this? Here are
some tips that can help you

#### Use the screen lock intelligently

Always require a pattern, PIN, password or biometrics to unlock. A pattern (that drawing of a geometric shape on the
screen) is not very secure, and can easily be memorized by someone else. PIN also has this problem. Passwords are not
very practical. I recommend giving preference to biometric unlocking, with fingerprint, iris or other. Check if the
biometrics offered by the manufacturer of your device are secure, as some have flaws.

Always set it to automatically lock after a period of inactivity, so that if the device is not used for 30 seconds, for
example, the screen locks itself.

Do not show previews of notifications on the lock screen, such as text messages from emails, SMS messages, etc. These
can be used to steal your account without unlocking the device.

#### Set a PIN on your SIM card

If the chip on your line (the SIM card) is stolen, your line can be accessed freely, including to receive password reset
and 2FA SMS messages (see what I said about this earlier). But it may have a password, which we call a PIN. When you buy
the chip, it comes unlocked and with a default PIN (it depends on the carrier). You can change this PIN and set one that
will keep the chip blocked, preventing it from receiving or making calls or receiving or sending SMS messages.

The code will only be displayed when the device is turned on, that is, if someone tries to turn off the device and
insert the chip into another device, they will not be able to.

[This article](https://www.tudocelular.com/seguranca/noticias/n144795/ensina-como-ativar-bloqueio-chip-sim-celular.html)
shows you how to do this.

#### Install an app that blocks apps

If your smartphone is stolen, it is important that the thief does not have access to your apps. Unfortunately, neither
Android nor iOS offer a way to put passwords on apps that do not require it. For example, on your email app, to prevent
the theft of your other accounts.

On Android, you can use apps for this. One that I use and recommend is
[AppLock](https://play.google.com/store/apps/details?id=com.sp.protector.free) which is free (but I paid for the
advanced features). It allows you to put passwords on all apps, or just on some. And it also has automation, for
example, starting the lock when you connect or disconnect from a Wi-Fi or Bluetooth device. In my case, I have it set up
so that whenever I disconnect from my home or work password, it starts blocking, just like when I connect to the car's
or helmet's Bluetooth (I use a communicator on it). This way, if I am robbed with my smartphone unlocked, that is, if I
am forced to unlock it and enter the device's unlock PIN, the apps will always be blocked. Do not use the AppLock PIN as
the same as the unlock PIN, to avoid this problem.

Also install the [AppLock Helper](https://play.google.com/store/apps/details?id=com.sp.protector.helper) which enables
some important security extensions.

I'm not an iOS user, so I don't know if there's a similar app out there, but I imagine there is.

#### Lock your smartphone with macros

Nowadays, it's common for smartphones to be stolen when they're in the car and being used with Waze. To prevent it from
being stolen while unlocked, I created an automation that causes the device to lock if it's disconnected from the
charger. To prevent it from locking every time I'm at home or at work charging, when I disconnect it, I set an
exception: if I'm on my home or work Wi-Fi, I don't perform the action.

The macro also locks it if it's connected to a charger, but it's not connected to a trusted Wi-Fi. It's useful in case
the device is stolen on the street and the thief puts it on to charge. [Download
MacroDroid](https://play.google.com/store/apps/details?id=com.arlosoft.macrodroid&hl=pt_BR&gl=CH). [Install the
macro](http://www.macrodroid.com/macrostore?id=11754) (direct click from your smartphone). Or [download the
macro](https://gist.github.com/giggio/a1627bd276c7b23be9a991f0fa9c3bf0) and then import it using the MacroDroid
Export/Import button.

#### Install the password manager on your smartphone

Install the password manager recommended above on your smartphone as well. Be careful, some apps/services do not allow
you to use it on your computer and smartphone at the same time without paying for the service (such as LastPass).
Bitwarden allows you to do so. Use a PIN different from your smartphone's PIN to unlock the app. Ideally, don't even use
a PIN, use a biometric entry.

#### Disable preview of text messages (SMSs) and emails in notifications

Do not show previews of messages in notifications. If you use AppLock but allow previews, someone could use them to
obtain an access code to your account.

And, as mentioned before, avoid sending SMSs to reset passwords.

#### Protect your phone's storage

Some phone brands allow the device to be fully encrypted. Choose one of them. This means that if the device is opened
and the internal storage chip is accessed, your data cannot be read. Find out about this before buying a new device.

#### Do not root or jailbreak your device

This goes hand in hand with the previous one: if you have jailbroken or rooted your device, it can be freely accessed by
a thief. Don't do it.

#### Security of your banking apps and similar apps

This is a controversial and difficult subject in the Brazilian reality. Almost all banking apps require a password, so
we are already reasonably protected because of this (and it is a shame that those that do not do so by default).
However, in a situation of express kidnapping, you will have to hand over all your data, including your bank passwords.
This means that a thief could move your entire checking account, investments, etc. Imagine someone stealing all your
investments, which you have spent years saving? And speaking of which, avoid investing in the same bank as your checking
account, card, etc., for the same reason. As a side tip, do not invest using banks, they will always profit from you –
and some brokerages too, but I will not dwell on this subject.

To avoid this, the best solution is to not install banking apps on your main smartphone. Take that old smartphone that
you have saved and install it on it. If you don't have another device, some devices offer a way to "hide" apps, such as
Samsung's [Secure Folder](https://www.samsung.com/br/support/mobile-devices/como-configurar-a-pasta-segura/). Set a
password on the secure folder, install banking apps in it, and leave it disabled by default, so it doesn't even appear
among the apps on the device. If you need to access your bank, turn it back on, access it, and use it normally. Windows
11 should soon install Android apps (called [Windows Subsystem for
Android](https://docs.microsoft.com/en-us/windows/android/wsa/)) and we won't need another device for this.

I also recommend leaving a digital bank that you rarely use on your smartphone. In a quick kidnapping, no thief will
believe that you don't have a bank account. Use a digital bank that doesn't charge a fee to open an account and use it
from time to time to make it seem like it's your main bank. For example, pay your electricity bills through it, deposit
part of your salary there, use your card for some purchases, etc. Keep a small balance in that bank so you won't be in
despair if it's stolen. This is also good because it gives you flexibility when you're out and about. If you need to pay
a bill or make a Pix, the app of that digital bank can solve it.

### Keeping your documents safe

If your computer is infected by ransomware, your documents may be encrypted and you will be required to pay a ransom for
your data. For this reason, it is important to have a copy of these documents somewhere. Windows, Mac and Linux offer
good backup solutions, but better than these is to store your documents in the cloud. Use a service that integrates with
your documents, images, videos, desktop folder, etc. This way, whenever you save a file, it will automatically go to the
cloud.

For those using Windows, I recommend using OneDrive, which integrates very well. The [Microsoft 365 family
plan](https://www.microsoft.com/pt-br/microsoft-365/onedrive/compare-onedrive-plans), which includes OneDrive, covers 6
people and currently costs 45 reais per month, that is, less than 8 reais per person, and gives you 1 TB of storage per
person. If you want it for just one person, it costs less, but it is not worth it. For 9 reais you can get 100GB, which
is usually enough for most people, but the family plan also includes the Office suite (the apps themselves, to install
or use on the web), Skype minutes and some advanced features that are worth it. OneDrive is free up to 5GB, but that is
usually not enough.

Other interesting options are Google One (7 reais per month for 100GB) and Dropbox (12 dollars per month for 2TB), but
they do not include Office or Skype.

Install the app on your smartphone, too.

### Security on your computer

There are some basic points that you need to keep turned on, updated and working:

- Antivirus
- Disk encryption
- Firewall
- UAC

The Windows Security application gives you a good overview of all these points. See [your
documentation](https://support.microsoft.com/pt-br/windows/ficar-protegido-com-a-seguran%C3%A7a-do-windows-2ae0363d-0ada-c064-8b56-6a39afb6a963)
for how to use it best.

#### Antivirus

In Windows, it's easy to stay safe with the tools that come installed by default and are free. I recommend using Windows
Defender for antivirus, and it will already check several of the other points below as well.

#### Encryption

Disk encryption in Windows is available by default and is called Bitlocker. If your computer is stolen and it is not
encrypted, the person who stole it can access all of your files. Enabling Bitlocker is as simple as clicking a button
and will prevent this.

Attention for older computers: if your computer does not have a TPM chip, it will need a password to use Bitlocker. When
you turn on Bitlocker for the first time, it will inform you of this. If this happens, I recommend not enabling it, and
checking if your computer has a TPM, since it may be disabled. In this case, enable it in the BIOS, look for the manual
from the computer manufacturer (or the motherboard if your PC is assembled) to understand how to do this. If it does not
have a TPM, you will have to enable it with this password and every time the machine is turned on, it will have to be
informed.

#### Firewall

The Windows firewall is also enabled by default. Just make sure it is working.

#### UAC/Access control

UAC notifies you when an application tries to change a system configuration. For example, a virus, when trying to
install itself, will need this access.

UAC must be turned on and with a recommended configuration. To access, click on “Start” and type “UAC” or “access
control”. The level should always be the second highest, or the first highest. The second highest is recommended.

[In this link](https://docs.microsoft.com/pt-br/mem/intune/user-help/you-need-to-enable-uac-windows) we have the
official documentation.

UAC is important because it should never appear in your day-to-day life, only when you install an application or change
a setting. Did you open a document and the UAC permission window appeared? Deny it, and run your antivirus immediately.
UAC protects us from ourselves, at those times when we access some malicious content that we had not noticed.

#### Protect your login

Use Windows Hello to log in to Windows. Logging in with a PIN is more secure than logging in with a password. If you
have a more modern computer, log in with biometrics, using your fingerprint or facial recognition, and avoid using a PIN
and password. [Learn more about Windows
Hello](https://support.microsoft.com/pt-br/windows/enter-your-microsoft-account-with-windows-hello-or-a-security-key-800a8c01-6b61-49f5-0660-c2159bea4d84).

#### Protect your BIOS

Set a password on your computer's BIOS. If it's stolen, no one will be able to change any security settings. Look up how
to do this in your machine's manual, which you should be able to find online.

#### Enable secure boot in BIOS

If your computer supports it, enable Secure Boot. This will protect you from external attacks, but also from viruses and
other threats. Secure Boot will analyze if the boot files have been corrupted and inform you. [This
article](https://www.tecmundo.com.br/software/226377-habilitar-inicializacao-segura-instalar-windows-11.htm) shows how
to do it, mentioning Windows 11, but it also works on Windows 10 and Linux.

#### Enable memory integrity

If your machine supports it, enable memory integrity. It will protect critical Windows processes with virtualization.
See how to do it [in the official
documents](https://support.microsoft.com/pt-br/windows/prote%C3%A7%C3%A3o-de-dispositivo-na-seguran%C3%A7a-do-windows-afa11526-de57-b1c5-599f-3a4c6a61c5e2).
This document also talks a little about Secure Boot.

#### Sandbox (Windows sandbox)

The Windows sandbox creates a “temporary Windows” for you to run things that you think might be dangerous. In practice,
it is a short-lived [virtual machine](https://pt.wikipedia.org/wiki/M%C3%A1quina_virtual). Use it when you are not sure
if what you are going to do is safe. Whatever runs in it is unable to escape to your machine, but it can escape to your
network, so be careful.

Since it relies on virtualization, you need Windows Pro or Enterprise.

#### Keep your computer up to date

This is the biggest fear of attackers. As well as keeping your security settings up to date, keeping your PC up to date
will solve most problems. It will be unlikely that it will be hacked if it is up to date. Keep Windows Update turned on,
let it update normally, and your chances of problems will be lower.

#### Use Linux

This one is for the technical people: use Linux. Windows' dominance, with about 90% of the PC market in the world, makes
it the main focus for attacks. Using Linux takes you away from this focus. But be warned: if you don't know Linux, the
learning curve is high. For people who are not tech-savvy, it can be very difficult. Start with a more user-friendly
distribution. In this case, I recommend [Ubuntu](https://ubuntu.com/).

Be careful, because keeping everything working properly on Linux can be more difficult than you think. From making Wi-Fi
work, to keeping the firewall enabled, or even disk encryption, everything is more complex. This last point is one that
bothers me in particular: full-disk encryption, which Windows solves trivially and integrates with the TPM, is still
almost nonexistent in Linux. The best you'll get nowadays, without having to reconfigure the entire system via the
command line, is full-disk encryption with a password, without integration with the TPM.

It might seem like I don't like Linux, but it's the opposite: I like it and understand it quite a bit, which is why I'm
making this reservation for those who don't know it yet.

### VPN and Tor browser

These are options for both your smartphone and your computer. They will "hide" you from your access provider. VPNs are
not anonymous, so be careful, the VPN provider may be seeing everything you're doing. Look for a VPN provider that
doesn't keep logs and that is in a country that doesn't have a cooperation agreement with the European Union, Brazil,
and the United States (at least). It's hard to find one, so do your research. I won't recommend it here because this is
a controversial topic.

[Tor Browser](https://www.torproject.org/download/) is a browser that is completely anonymous. Use it to access websites
without being identified and to bypass government bans, for example, accessing a website that has been blocked in your
country.

### Protect your DNS

Enable DNS over HTTPs (DoH) in Windows 11. This will prevent your internet provider from seeing which websites you are
accessing. [These documents](https://docs.microsoft.com/pt-br/windows-server/networking/dns/doh-client-support) show how
to do it. They mention Windows Server, but the process is the same for Windows 11. I don't believe it exists in Windows
10. It also lists the DoH servers of Cloudflare, Google, and Quad9 (I recommend Cloudflare).

#### For the more technically minded

Install your own DNS server and connect to it using DoH or DNS over TLS. One option to do this cheaply is a Raspberry Pi
(I recommend 3 or better) with [Pi-hole](https://pi-hole.net/).

### Understand what HTTPS means

HTTPS means that communication with a website is private, but it does not mean that it is secure, nor that the website
creator is who they say they are. A website accessed via HTTPS prevents your traffic from being read between your
computer and the destination website, and that's it, there are no other guarantees.

Beware of websites that pretend to be other websites, even with HTTPS. Avoid clicking on bank links that you receive by
email, for example; instead, type the address. It is better than typing it in is to have a bookmarks bar, so you avoid
typing incorrectly and ending up on a malicious website. Even if the website appears to be the right website, similar
but not identical characters can mislead you.

For example, can you see the difference between these two words?

- meubanco
- meuᖯanco

Did you notice that the second “b” is different? It is, in fact, an “ᖯ”, code 15F (the correct “b” is code 0062). Have
you ever imagined this in your browser bar? Will you notice the difference?

To see other similar characters, see [Confusables](https://util.unicode.org/UnicodeJsps/confusables.jsp) on the Unicode
website.

### Protect your email

Email on major platforms is read by automated processes to serve you advertising. Furthermore, since they are hosted in
the United States, they can be read freely by the NSA. Current US law prevents providers from informing whether they are
passing data to the NSA, that is, their refusal does not imply that they are not sending this data. I consider this a
step for those who want to take an extra step in protection, it is not something I use for everything. The
recommendation, in this case, is to use [Protonmail](https://protonmail.com/), which is from a Swiss company. All email
is encrypted and they put user protection above all else. There is no way for the NSA to get there. This is a good
option for that password reset email I mentioned earlier.

### Avoid scams

Have you been asked for money online? It doesn't matter who it is, if the phone number is correct, or whatever, confirm
with the person: ask for a call, or better yet, a video call. It may not be who the person says they are.

And be careful with your biometrics. If someone you don't know wants to take a picture of you, refuse. It could be a
bank's biometric verification, which is being used to make loans or something similar.

If you receive a code via SMS, email, WhatsApp (or any other means, really), never send that code to anyone. They could
be using the code to steal your account on some service.

### Don't use pirated software/content

Cracked software has a high chance of bringing with it a Trojan horse. It could be a virus, a cryptocurrency miner, or a
keylogger, which records everything you type, or worse. Brazil is a country that does not handle intellectual property
laws well, so it is a fact that you can use it without the government bothering you, so just a warning to be careful and
not have your computer hacked and your data stolen.

This also applies to using Torrent for pirated videos and music. In this case, it is unlikely that a .avi, .mkv or .mp3
file will have a virus, because the virus would depend on the program running the media file. In this case, on a
smartphone the risk may be greater, as it is a more restricted environment and has more common apps.

### To learn more

[Nic.br](https://www.nic.br/) offers a lot of interesting content on the website
[internetsegura.br](https://internetsegura.br/). It has content for young people, adults, awareness and much more. It is
worth a visit.

### Conclusion

It is hard work to stay safe, right? I hope this was useful. If I forgot or got something wrong, please comment below.
Who knows, maybe there will be a continuation of this post with your tips?
