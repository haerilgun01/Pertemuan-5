import styles from "./Hero.module.css";

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Spiderman</h2>
                    <h3 className={styles.hero__genre}>
                        Genre:Thriller,Drama,Romance
                    </h3>
                    <p className={styles.hero.description}>lorem lorem
                    </p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className="hero__right">
                    <img
                    className={styles.hero__image}
                    src="http://picsum.photos/536/354"
                    alt="placeholder"
                    />
                </div>
            </section>
        </div>
    );
}

export default Hero;