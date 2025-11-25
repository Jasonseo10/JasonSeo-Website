'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.css';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);



    const projects = [
        {
            id: 'qcare',
            title: 'QCare',
            description: 'An emergency room web app that reduces patient wait times by optimizing triage and staff allocation, with live hospital queue visualization powered by React, Firebase, and Google Maps API.',
            tag: 'Hackathon Winner',
            images: ['/assets/qcare_1.png', '/assets/qcare_2.png'],
            type: 'image'
        },
        {
            id: 'pokergto',
            title: 'PokerGTO',
            description: 'A poker AI assistant that simulates tens of thousands of hands to recommend GTO-style plays, boosting win rate versus baseline bots in both single-player and multiplayer (socket-based) modes.',
            tag: 'AI Simulation',
            images: ['/assets/pokergto_1.png', '/assets/pokergto_2.png'],
            type: 'image'
        },
        {
            id: 'citadel',
            title: 'CitadelBreak (3D RPG)',
            description: 'A Unity-built open-world RPG with 7 levels, custom bosses, physics-based movement, NPC pathfinding AI, and equipment progression for a fully immersive action experience.',
            tag: 'Unity Game',
            video: 'https://www.youtube.com/embed/Om69jZceHoY',
            type: 'video'
        }
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Projects</h1>
            <div className={styles.projectList}>

                {/* QCare */}
                <div className={styles.projectItem}>
                    <div className={styles.imageWrapper}>
                        <img src="/assets/qcare_1.png" alt="QCare Mobile" className={styles.projectImage} />
                    </div>
                    <div className={styles.projectBubble} onClick={() => setSelectedProject(projects[0])}>
                        <h3>QCare</h3>
                        <p>
                            An emergency room web app that reduces patient wait times by optimizing triage
                            and staff allocation, with live hospital queue visualization powered by React,
                            Firebase, and Google Maps API.
                        </p>
                        <div className={styles.projectTag}>Hackathon Winner</div>
                    </div>
                </div>

                {/* PokerGTO */}
                <div className={styles.projectItem}>
                    <div className={styles.imageWrapper}>
                        <img src="/assets/pokergto_1.png" alt="PokerGTO Game" className={styles.projectImage} />
                    </div>
                    <div className={styles.projectBubble} onClick={() => setSelectedProject(projects[1])}>
                        <h3>PokerGTO</h3>
                        <p>
                            A poker AI assistant that simulates tens of thousands of hands to recommend GTO-style plays,
                            boosting win rate versus baseline bots in both single-player and multiplayer (socket-based) modes.
                        </p>
                        <div className={styles.projectTag}>AI Simulation</div>
                    </div>
                </div>

                {/* CitadelBreak */}
                <div className={styles.projectItem}>
                    <div className={styles.imageWrapper}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/Om69jZceHoY"
                            title="CitadelBreak Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className={styles.projectVideo}
                        ></iframe>
                    </div>
                    <div className={styles.projectBubble} onClick={() => setSelectedProject(projects[2])}>
                        <h3>CitadelBreak (3D RPG)</h3>
                        <p>
                            A Unity-built open-world RPG with 7 levels, custom bosses, physics-based movement,
                            NPC pathfinding AI, and equipment progression for a fully immersive action experience.
                        </p>
                        <div className={styles.projectTag}>Unity Game</div>
                    </div>
                </div>

            </div>



            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
                <Link href="/contact" className={styles.button}>
                    Get in Touch
                </Link>
            </div>

            {/* Modal */}
            {
                selectedProject && (
                    <div className={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
                        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                            <button className={styles.closeButton} onClick={() => setSelectedProject(null)}>×</button>

                            <div className={styles.modalHeader}>
                                <h2>{selectedProject.title}</h2>
                                <div className={styles.projectTag}>{selectedProject.tag}</div>
                            </div>

                            <p className={styles.modalDescription}>{selectedProject.description}</p>

                            <div className={styles.modalMedia}>
                                {selectedProject.type === 'image' ? (
                                    selectedProject.images.map((img, index) => (
                                        <img key={index} src={img} alt={`${selectedProject.title} ${index + 1}`} className={styles.modalImage} />
                                    ))
                                ) : (
                                    <iframe
                                        width="100%"
                                        height="400"
                                        src={selectedProject.video}
                                        title={selectedProject.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className={styles.modalVideo}
                                    ></iframe>
                                )}
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
}
