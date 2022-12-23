import './Rodape.css'


const Rodape = () =>{
    return(
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/imagens/fb.png" alt="Facebook"/>
                        </a>
                    </li>
                    <li>
                        <a href="instagran.com" target="_blank">
                            <img src="/imagens/ig.png" alt="Instagran"/>
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/imagens/tw.png" alt="Twitter"/>
                        </a>
                    </li>
                </ul>

            </section>

            <section>
                <img src="/imagens/logo.png" alt="Logo"/>
            </section>

            <section>
                <p>Desenvolvido por mim</p>
            </section>

            <section/>
        </footer>
    )
}

export default Rodape

//C:\Users\felip\Desktop\FORMAÇÃO_REACT\organo\public\imagens\fundo.png