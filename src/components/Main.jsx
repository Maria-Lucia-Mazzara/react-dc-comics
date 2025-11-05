import COMICS from '../assets/img/buy-comics-digital-comics.png';
import MERCHANDISE from '../assets/img/buy-comics-merchandise.png';
import SUBSCRIPTION from '../assets/img/buy-comics-subscriptions.png';
import SHOP from '../assets/img/buy-comics-shop-locator.png';
import POWER from '../assets/img/buy-dc-power-visa.svg';
import Serie from './Series';

function Main() {
    return (
        <main>
            <section className="sfondo_main">
                <div className="container pt-3 pb-3 link-light" >
                    <Serie />
                </div>
                <div className="blue-bar">
                    <div className="container d-flex justify-content-between align-items-center py-4">
                        <div className="d-flex align-items-center gap-2">
                            <img src={COMICS} alt="digital comics" />
                            <span>
                                DIGITAL COMICS
                            </span>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <img src={MERCHANDISE} />
                            <span>
                                DC MERCHANDISE
                            </span>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <img src={SUBSCRIPTION} />
                            <span>
                                SUBSCRIPTION
                            </span>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <img src={SHOP} />
                            <span>
                                COMIC SHOP LOCATOR
                            </span>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <img src={POWER} />
                            <span>
                                DC POWER VISA
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main