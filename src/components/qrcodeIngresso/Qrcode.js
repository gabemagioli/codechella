import estaaqui from "./estaaqui.png";


const QrCode = () => {
    <>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap" rel="stylesheet"/>
    </>

    return(
        <main>
            <section>
                <img src={estaaqui} alt="esta aqui seu ingresso" />
                <div>
                    <h6 classname="receber">Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h6>
                </div>
            </section>
        </main>
    );
}

export default QrCode;