import styles from './page.module.css';

export default function Projects() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Projects</h1>
            <div className={styles.projectsBubbles}>

                {/* QCare */}
                <div className={styles.projectBubble}>
                    <h3>QCare</h3>
                    <p>
                        An emergency room web app that reduces patient wait times by optimizing triage
                        and staff allocation, with live hospital queue visualization powered by React,
                        Firebase, and Google Maps API.
                    </p>
                    <div className={styles.mediaContainer}>
                        <img src="/assets/qcare_1.png" alt="QCare Mobile" className={styles.mediaImage} />
                    </div>
                    <div className={styles.projectTag}>Hackathon Winner</div>
                </div>

                {/* PokerGTO */}
                <div className={styles.projectBubble}>
                    <h3>PokerGTO</h3>
                    <p>
                        A poker AI assistant that simulates tens of thousands of hands to recommend GTO-style plays,
                        boosting win rate versus baseline bots in both single-player and multiplayer (socket-based) modes.
                    </p>
                    <div className={styles.mediaContainer}>
                        <img src="/assets/pokergto_1.png" alt="PokerGTO Game" className={styles.mediaImage} />
                    </div>
                    <div className={styles.projectTag}>AI Simulation</div>
                </div>

                {/* CitadelBreak */}
                <div className={styles.projectBubble}>
                    <h3>CitadelBreak (3D RPG)</h3>
                    <p>
                        A Unity-built open-world RPG with 7 levels, custom bosses, physics-based movement,
                        NPC pathfinding AI, and equipment progression for a fully immersive action experience.
                    </p>
                    <div className={styles.mediaContainer}>
                        <iframe
                            width="100%"
                            height="200"
                            src="https://www.youtube.com/embed/Om69jZceHoY"
                            title="CitadelBreak Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className={styles.projectTag}>Unity Game</div>
                </div>

            </div>
        </div>
    );
}
