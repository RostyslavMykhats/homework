import React from 'react'
import styles from './Hero.module.scss'
import icon from './coolicon.png'


const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.hero__bg}>
                <div className={styles.hero__content}>
                    <h1 className={styles.hero__title}>Lorem ipsum dolor sit amet consectetur.</h1>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <p className={styles.hero__text}>Lorem ipsum dolor sit amet consectetur. Lorem consequat nunc non nisl montes mi sed etiam. <br /> Dignissim nunc nulla placerat cursus magna. Donec auctor metus tortor ornare blandit dapibus.</p>
                        <button className={styles.hero__btn}>Learn more <img style={{ paddingLeft: '10px' }} className={styles.btnicon} src={icon} /> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero