import './App.css'
import { Folder } from './components/folder/Folder'
import { DocWindow } from './components/window/DocWindow'
import { ImageWindow } from './components/window/ImageWindow'
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
        <ImageWindow
          source="./images/mask.jpeg"
          alt="Going to Venice, you need to be prepared!"
          title="always_prepared.jpg"
          _className='image-1'
        />
        <ImageWindow
          source="./images/greece.jpeg"
          alt="An image of me visiting some relatives in Greece"
          title="greece_family.jpg"
          _className='image-2'
        />
        <ImageWindow
          source="./images/snow.jpeg"
          alt="Neuschwanstein Castle, what is that?!"
          title="what_is_that.jpg"
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
          {/* <div className="folders--desktop">
            <Folder title="projects" type="html" />
            <Folder title="contact" type="html" />
          </div> */}

        </div>
      </main>
    </VisibilityProvider>
  )
}

export default App
