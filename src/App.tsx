import './App.css'
import { Folder } from './components/folder/Folder'
import { ContactWindow } from './components/window/ContactWindow'
import { DocWindow } from './components/window/DocWindow'
import { ImageWindow } from './components/window/ImageWindow'
import { PortfolioWindow } from './components/window/PortfolioWindow'
import { PrizesWindow } from './components/window/PrizesWindow'
import { TerminalWindow } from './components/window/TerminalWindow'
import { VisibilityProvider } from './hooks/VisibilityProvider'

function App() {

  return (
    <VisibilityProvider>
      <main className='main__wrapper'>
        <TerminalWindow />
        <DocWindow />
        <PrizesWindow />
        <PortfolioWindow />
        <ContactWindow />
        <ImageWindow
          source="./images/mask.jpeg"
          alt="Me with a diving mask on a train!"
          title="always_prepared.jpg"
          _className='image-1'
        />
        <ImageWindow
          source="./images/frankfurt.png"
          alt="A picture from where I live!"
          title="i_live_in_frankfurt.jpg"
          _className='image-2'
        />
        <ImageWindow
          source="./images/rio de janeiro.png"
          alt="A picture from the place I'm from"
          title="im_from_rio.jpg"
          _className='image-3'
        />
        <div className="folders">
          <div className="folders--mobile">
            <Folder title="CV" type="txt" _className="cv" />
            <Folder title="prizes" type="txt" _className="prizes" />
            <Folder title="portfolio" type="html" _className="portfolio" />
            <Folder title="contact" type="html" _className="contact" />
            <Folder title="photo-1" type="png" _className="image-1" />
            <Folder title="photo-2" type="png" _className="image-2" />
            <Folder title="photo-3" type="png" _className="image-3" />
          </div>

        </div>
      </main>
    </VisibilityProvider>
  )
}

export default App
