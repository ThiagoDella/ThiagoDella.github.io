import { Window } from "./Window"

import { useEffect, useState } from "react"

const starters = [
  "Ask me about scaling APIs or building with TypeScript.",
  "Got a side project you're hacking on? Let's talk DIY builds!",
  "Ever tried combining a ESP32 and some sensors? I have thoughts.",
  "Any cool Raspberry Pi projects?.",
  "Into videomaking? Me too — let's exchange tips.",
  "Any favorite bands or albums lately? I'm always hunting new sounds.",
  "Been playing or watching any sports recently?",
  "If you’ve built something weird or clever, I wanna hear about it.",
]

export const TalkStarter = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % starters.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="window__body__contact__footer">
      <p className="window__body__contact__footer__text">
        💬 <em>{starters[index]}</em>
      </p>
    </div>
  )
}


export const ContactWindow = () => {
  return (
    <Window type="page" title="contact.html" _className="contact">
      <>
        <div className="window__body__contact__wrapper">
          <img src="./images/travel.png" alt="LinkedIn" className="window__body__contact__image" />
          <div>
            <div className="window__body__text__block">
              <h1 className="window__body__header">
                Hey, wanna talk?!
              </h1>
            </div>
            <div className="window__body__text__block">
              <h2 className="window__body__section-text">
                Here you can find some links to reach out to me!
              </h2>
            </div>
            <div className="window__body__contact__links">
              <a href="https://www.linkedin.com/in/thiagodellaliberamoreira" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
              </a>

              <a href="https://dev.to/speakuptech" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/-Dev.to-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white" alt="Dev.to" />
              </a>

              <a href="https://bsky.app/profile/tri-dev.bsky.social" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/-Bluesky-1DA1F2?style=for-the-badge&logo=bluesky&logoColor=white" alt="Bluesky" />
              </a>

              <a href="https://github.com/ThiagoDella" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
              </a>
            </div>
            <div className="window__body__text__block">
              <h2 className="window__body__section-text">
                My favorite topics are software development, DIY, maker culture, music and sports!
              </h2>
            </div>
            <div className="window__body__text__block">
              <h2 className="window__body__section-text">
                Need an idea for a talk? I've got you covered!
                <TalkStarter />

              </h2>
            </div>
          </div>
        </div>
      </>
    </Window >
  )
}
