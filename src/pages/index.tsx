import { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import "../styles/headers.css";
import "../styles/utility.css";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import "../styles/hero.css";
import Camera from "../assets/Camera.svg";
import Wand from "../assets/wand.svg";
import Tree from "../assets/tree.svg";
import Card from "../components/Card";
import sen2 from "../assets/images/sen2.jpg";
import sen3 from "../assets/images/sen3.jpg";



export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
        return () => {
            if (html) {
                html.style.overflow = "auto";
            }
        };
    }, [showMobileMenu]);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="" width={220} height={80} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li><a href="#">Home</a></li>
                            <li><a href="#solution">Soluções</a></li>
                            <li><a href="#testimonials">Depoimentos</a></li>
                            <li><a href="#pricing">Preços</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                        <div className="desktop-only">
                            {/* <div className="flex items-center">
                                <a className="reverse-color ml-lg" href="">Login</a>
                                <Button text="Cadastre-se" />
                            </div> */}
                        </div>
                        <div className="mobile-menu">
                            {showMobileMenu ? (
                                <div className="mobile-menu-content">
                                    <div className="container flex">
                                        <ul>
                                            <li><a onClick={() => setShowMobileMenu(false)} href="#">Home</a></li>
                                            <li><a onClick={() => setShowMobileMenu(false)} href="#solution">Soluções</a></li>
                                            <li><a onClick={() => setShowMobileMenu(false)} href="#testimonials">Depoimentos</a></li>
                                            <li><a onClick={() => setShowMobileMenu(false)} href="#pricing">Preços</a></li>
                                            <li><a onClick={() => setShowMobileMenu(false)} href="#contact">Contato</a></li>
                                        </ul>
                                        <span onClick={() => setShowMobileMenu(false)} className="btn-wrapper">
                                            <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <span onClick={() => setShowMobileMenu(true)} className="btn-wrapper">
                                    <img src={Menu} alt="ícone menu" width={24} height={24} />
                                </span>
                            )}
                        </div>
                    </div>
                </nav>
            </header>

            <section id="hero">

                <div className="container content" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ margin: "50px", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
                        <p className="desktop-only"></p>
                        <h1>Transforme momentos em memórias eternas.</h1>
                        <br></br>
                        <p>
                            No nosso estúdio, cada clique é pensado para capturar a sua essência com beleza, emoção e autenticidade. Seja um ensaio, um evento ou um retrato especial, aqui sua história ganha luz própria.                        </p>
                    </div>
                    <div className="flex">
                    
                    </div>
                </div>
                <div className="hero-image" style={{ marginRight: "-100px"}}>
                    <img src={sen2} alt="imagem de fundo" width={300} height={250}/>
                    <img src={sen3} alt="imagem de fundo" width={300} height={250}/>

                </div>
            </section>

            <section className="container" id="solution" style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
                <header>
                    <span>
                        <span className="desktop-only">
                            <h2>Sensum Fotografia</h2>
                        </span>
                    </span>
                    <p>
                        Transformando seus sonhos em memórias eternas!
                    </p>
                </header>
            </section>

            <section className="container py-lg flex flex-wrap justify-center gap-4" style={{ justifyContent: "center", alignItems: "center", display: "flex", gap: "20px" }}>
                {[
                    {
                        icon: Camera,
                        title: "Eventos",
                        content: "Registre cada detalhe e emoção dos seus eventos especiais com fotografias que contam histórias inesquecíveis."
                    },
                    {
                        icon: Tree,
                        title: "Ensaios Externos",
                        content: "Explore a beleza da natureza e cenários únicos enquanto capturamos momentos autênticos e inesquecíveis em ensaios ao ar livre."
                    },
                    {
                        icon: Wand,
                        title: "Ensaios Tematicos",
                        content: "Dê vida à sua imaginação com ensaios temáticos personalizados, onde cada detalhe é pensado para criar cenários únicos e memoráveis."
                    }
                ].map((card, index) => (
                    <Card
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        content={card.content}
                    />
                ))}
            </section>
        </>
    );
}
