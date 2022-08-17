import styles from '../styles/Work.module.css'
export default function(){
    return(
        <section className={styles.section}>
            <div className={styles}>
                <div className={styles.work}>
                <div className="wordart italic-outline">
                    <span className="text">OUR WORKS</span>
                    </div> 
                    <br/>
                    <div className="wordart2 italic-outline2">
                    <span className="text">OUR WORKS</span>
                    </div> 
                    </div>
            <div className="text-lvl1">
            <p className="smol-text first-p">Happy clients, are what we seek</p>
            <p className="smol-text second-p">Products we brought to this world !</p>
            </div>
            </div>
            <div className="level2">
                <div className="square1"></div>
                <span className="text-under-box1">Perfection</span>
                <div className="square2"></div>
                <div className="square3"></div>
                <span className="text-under-box2">Professional feel</span>
            </div>
            <div className="level3">
                    <div className="square1-2"></div>
                    <div className="square2-2"></div>
                    <span className="text-under-box5">Digital goodness.</span>
                </div>
        </section>
    )
}