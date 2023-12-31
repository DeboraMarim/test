import { useContext, useState } from 'react'
import { useOutsideClick } from "@souvik666/react-outside-click-hook";
import { Tooltip } from 'react-tooltip'
import ListCards from './components/ListCards';
import Modal from './components/Modal';
import Menu from './components/Menu';
import DigitalClock from './components/DigitalClock';
import { ModalContext } from './context/modalContext'

import setTimezoneDefault from './utils/setTimezoneDefault'
import setUtcDefault from './utils/setUtcDefault'

import './styles/App.css'
import menuIcon from './images/menu.svg'
import helpIcon from './images/helpIcon.svg'
import quotexButton from './images/quotexButton.svg'
import iqOptionButton from './images/iqOptionButton.svg'
import exnovaButton from './images/exnovaButton.svg'
import pocketOptionButton from './images/pocketOptionButton.svg'
import expertOptionButton from './images/expertOptionButton.svg'

import BinomoButton from './images/Binomo.svg'
import CapitalbearButton from './images/Capitalbear.svg'

import olimpTradeButton from './images/olimpTradeButton.svg'

function App() {
  const { modalIsOpened, openModal } = useContext(ModalContext)
  const currentUTC = parseInt(localStorage.getItem('currentutc'))
  const currentTimezone = parseInt(localStorage.getItem('timezoneId'))
  const [ showMenu, setShowMenu ] = useState('none')

  // eslint-disable-next-line no-unused-vars
  const [ _, ref ] = useOutsideClick({
    callback: () => setShowMenu('none')
  });

  setTimezoneDefault(currentTimezone)
  setUtcDefault(currentUTC)

  return (
    <>
      {
        (modalIsOpened) && (
          <Modal />
        )
      }
      <span ref={ref} style={{display: showMenu}}>
        <Menu />
      </span>
      <div className="container">
        <header>
          <button>
            <img src={menuIcon} onClick={() => setShowMenu('block')} alt='Menu Icon'/>
          </button>
          <button id='help' onClick={()=> openModal()}>
            <img src={helpIcon} alt='Help Icon' />
          </button>
        <span className='helpTooltip'><Tooltip anchorSelect="#help">Information</Tooltip></span>
        </header>
        <div className='main'>
          <aside>
            
              <div className="cards">
                <ListCards />
              </div>
                <DigitalClock />
            
          </aside>
          <div className="topBrokers">
            <div className='content'>
              <div className='brokers'>
                <a href="https://broker-qx.pro/sign-up/?lid=192387" rel="noreferrer" target='_blank'>
                  <img src={quotexButton} alt="Quotex"/>
                </a>
                <a href="https://www.iqoption.com/en?aff=140138" rel="noreferrer" target='_blank'>
                  <img src={iqOptionButton} alt="IQ Option"/>
                </a>
                <a href="https://exnova.org/lp/start-trading/?aff=330594&aff_model=revenue&afftrack" rel="noreferrer" target='_blank'>
                  <img src={exnovaButton} alt="Exnova"/>
                </a>
                <a href="https://po6.cash/smart/bAC2FB7mlcHtwv" rel="noreferrer" target='_blank'>
                  <img src={pocketOptionButton} alt="Pocket Option"/>
                </a>
                <a href="https://r.shortlify.com/?prefid=1004865001" rel="noreferrer" target='_blank'>
                  <img src={expertOptionButton} alt="Expert Option"/>
                </a>
                <a href="https://olymptrade.com/?affiliate_id=1573874&subid1=&subid2=" rel="noreferrer" target='_blank'>
                  <img src={olimpTradeButton} alt="Olymp Trade"/>
                </a>
                <a href="https://binomo.com/pt-pt?a=cbf288f25252&t=0" rel="noreferrer" target='_blank'>
                  <img src={BinomoButton} alt="Binomo"/>
                </a>
                <a href="https://capitalbear.com/" rel="noreferrer" target='_blank'>
                  <img src={CapitalbearButton} alt="Capitalbear"/>
                </a>
              </div>
              <div className='infoBelow'>
                  <h1>Don't have an account ?</h1>
                  <div>
                  <ul>
                    <li>
                       <p>Click the broker button and create an account for <strong>free</strong>.</p>
                    </li>
                    <li>
                      <p>Receive <span class="cor-especial">$10,000.00</span> in your demo/training account.</p>
                    </li>
                  </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          {/* <a href="https://www.binarytraders.net/" target="_blank" rel="noopener noreferrer">
            <img src={binaryTradersLogo} width={30} height={30} alt="Binary Traders logo" />
            <p>binarytraders.net</p>
          </a> */}
        </footer>
      </div>
    </>
  );
}

export default App;
