import { Window } from "./Window"

export const PortfolioWindow = () => {
  return (
    <Window type="page" title="portfolio.html" _className="portfolio">
      <>
        <div className="window__body__text__block">
          <h1 className="window__body__header">
            Welcome to my portfolio!
          </h1>
        </div>
        <div className="window__body__text__block">
          <h2 className="window__body__section-text">
            This portfolio highlights mainly side projects and companies where I’ve acted as a co-founder. I’m a Senior Fullstack Developer with solid experience building scalable, distributed systems using Node.js, Python, React, SQL/NoSQL, and the AWS stack.
          </h2>
          <h2 className="window__body__section-text">
            While I'm not bound by any NDA, I prefer to share details about my work at previous employers in more private or direct conversations, out of professional respect and discretion.
          </h2>
          <h2 className="window__body__section-text">
            Check the contact.html file to see how to reach me!<br />
            Thiago
          </h2>
        </div>
        <article className="window__body__project-section">
          <div className="window__body__text__block">
            <h2 className="window__body__section-title">
              TalkTerms
            </h2>
          </div>
          <div className="window__body__text__block">
            <h3 className="window__body__section-stack">
              TypeScript · SocketIO · Blessed.js · Redis
            </h3>
          </div>
          <img src="./images/portfolio/TalkTerms.gif" alt="A GIF showing TalkTerms project working" className="window__body__image" />
          <div className="window__body__text__block">
            <h2 className="window__body__section-text">
              TalkTerms is a terminal-based real-time chat application that brings a nostalgic, keyboard-driven chat experience to your CLI. Built with Node.js, Socket.IO, and Blessed, it features dynamic room management, scrollable message logs, keyboard navigation, and inline clickable links — all in your terminal.
            </h2>
            <h2 className="window__body__section-text">
              The CLI client is fully open source, inviting community contributions and customization. On the backend, TalkTerms is evolving toward a Redis-based pub-sub architecture to support scalable multi-instance deployments, making it suitable for both local fun and distributed chat infrastructures.
            </h2>
          </div>
        </article>
        <article className="window__body__project-section">
          <div className="window__body__text__block">
            <h2 className="window__body__section-title">
              Chisels
            </h2>
          </div>
          <div className="window__body__text__block">
            <h3 className="window__body__section-stack">
              Expo · React Native · TypeScript · NestJS · PostgreSQL · Cloudinary · Docker  · OCI
            </h3>
          </div>
          <div className="window__images__display">
            <img src="./images/portfolio/chisels.png" alt="An image of my mobile app called chisels" className="window__body__image" />
            <img src="./images/portfolio/chisels-1.png" alt="An image of my mobile app called chisels" className="window__body__image" />
            <img src="./images/portfolio/chisels-2.png" alt="An image of my mobile app called chisels" className="window__body__image" />
          </div>
          <div className="window__body__text__block">
            <h2 className="window__body__section-text">
              Chisels is a mobile-first habit tracker built with React Native (Expo) and TypeScript, designed to help users build routines and stay consistent. The app features daily habit check-ins, streak tracking, and profile management through a clean and intuitive interface.
            </h2>
            <h2 className="window__body__section-text">
              The backend is powered by NestJS with a PostgreSQL database, structured using clean architecture principles. Authentication uses an access/refresh token strategy, with interceptors and session-aware logic to handle token expiration gracefully. Media uploads (e.g., profile pictures) are supported via Cloudinary, abstracted through a dedicated upload service.
            </h2>
            <h2 className="window__body__section-text">
              The project emphasizes modularity and scalability, and was built to support future features like notifications, referrals, and analytics.
            </h2>
          </div>
        </article>
        <article className="window__body__project-section">
          <div className="window__body__text__block">
            <h2 className="window__body__section-title">
              Welcomy
            </h2>
          </div>
          <div className="window__body__text__block">
            <h3 className="window__body__section-stack">
              React · Python · Flask · Cloudinary · Docker · AWS
            </h3>
          </div>
          <img src="./images/portfolio/welcomy.png" alt="An image of my webapp called Welcomy" className="window__body__image" />
          <div className="window__body__text__block">
            <h2 className="window__body__section-text">
              Welcomy GmbH was founded by me and three other friends. Among the three co-founders, I and another teammate were the technical founders of the company. Welcomy was a SaaS startup launched during the COVID-19 pandemic. Initially, we aimed to provide infection case traceability, and as the hospitality industry began to reopen, we transitioned to offering touchless solutions for hotels and restaurants.
            </h2>
            <h2 className="window__body__section-text">
              After the pandemic, Welcomy pivoted into a micro-portal solution for products and companies. This allowed businesses to fine-tune QR-code–based interactions, tailoring the experience depending on what the user scanned. Users could also interact with a context-aware GPT assistant that supported them in resolving product or service-related issues.
            </h2>
            <h2 className="window__body__section-text">
              As a technical co-founder, my primary responsibility was leading frontend development by building a rich, customizable user interface for our clients. Clients could create dynamic pages using a collection of pre-built blocks provided by Welcomy. They were also able to design adaptive forms that responded to user input. Additional tools such as PDF document generation and personalized links were also available as part of our offering.
            </h2>
          </div>
        </article>
        <article className="window__body__project-section">
          <div className="window__body__text__block">
            <h2 className="window__body__section-title">
              Lodyge
            </h2>
          </div>
          <div className="window__body__text__block">
            <h3 className="window__body__section-stack">
              React · TypeScript · HTML · SASS
            </h3>
          </div>
          <div className="window__images__display--full">
            <img src="./images/portfolio/lodyge.png" alt="An image of my mobile app called chisels" className="window__body__image" />
            <img src="./images/portfolio/lodyge-2.png" alt="An image of my mobile app called chisels" className="window__body__image" />
            <img src="./images/portfolio/lodyge-3.png" alt="An image of my mobile app called chisels" className="window__body__image" />
          </div>
          <div className="window__body__text__block">
            <h2 className="window__body__section-text">
              I was brought in to collaborate with a small team on a proof-of-concept frontend for Lodyge, a platform focused on luxury apartment rentals. We successfully delivered the project as scoped, but it appears the company chose not to move forward with the product beyond the PoC stage.
            </h2>
          </div>
        </article>
      </>
    </Window >
  )
}
