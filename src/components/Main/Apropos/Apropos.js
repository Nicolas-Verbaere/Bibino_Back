import React from 'react';
import './Apropos.scss';
import pdpArnaud from '../../../assets/img/PDP arnaud.png';
import pdpStephane from '../../../assets/img/PDP stephane.png';
import pdpEva from '../../../assets/img/PDP eva.jpg';
import pdpNicolas from '../../../assets/img/PDP nicolas.jpg';

function Apropos() {
    return (
        <section className='about'>
            <h1 className='about-title'>A propos de Bibino</h1>
            <p className='about-content'>
                Bibino est un projet de fin de formation de l'école{' '}
                <a
                    className='about-content-linkoclock'
                    href='https://oclock.io/'>
                    O'clock
                </a>
                .
            </p>
            <p className='about-content'>
                Ce projet a été développer par quatres étudiants déshydrater,
                qui souhaitent partager leur expérience zythologique avec le
                reste du monde.
            </p>
            <p className='about-content'>
                L'objectif de Bibino est de proposer aux visiteurs une
                plateforme permettant de noter et donner leur avis sur
                différentes bières.
            </p>
            <p className='about-content'>
                Venez découvrir l'équipe grâce à laquelle Bibino a pu voir le
                jour
            </p>
            {/* <p className='about-content'>
                Nous avions une deadline de 1 mois à respecter.
            </p>
            <p className='about-content'>
                L'idée à été proposé par Nicolas Verbaere et le projet à vu le
                jour grâce au travail de l'équipe.
            </p>
            <p className='about-content'>
                L'objectif de base est de proposer à nos utilisateurs une
                plateforme ou ils pourront voir, noter et donner leur avis sur
                différentes bières.{' '}
            </p> */}
            <section className='about_developers'>
                <article className='about_developers_article'>
                    <img
                        className='about_developers_article-img'
                        src={pdpArnaud}
                        alt=''
                    />
                    <h1 className='about_developers_article-name'>
                        Arnaud Jaureguiberry
                    </h1>
                    <p className='about_developers_article-content'>
                        <strong>Role:</strong> Lead Dev Front
                    </p>
                    <p className='about_developers_article-content'>
                        <strong>Spé:</strong> React
                    </p>
                    <p className='about_developers_article-content'>
                        <strong>Linkedin:</strong>{' '}
                        <a
                            href='https://www.linkedin.com/in/arnaud-jaureguiberry/'
                            target='_blank'
                            rel='noreferrer'>
                            Arnaud-Jaureguiberry
                        </a>
                    </p>
                    <p className='about_developers_article-content'>
                        <strong>Github:</strong>{' '}
                        <a
                            target='_blank'
                            href='https://github.com/Jaureguiberry-Arnaud'
                            rel='noreferrer'>
                            Jaureguiberry-Arnaud
                        </a>
                    </p>
                </article>

                <article className='about_developers_article'>
                    <img
                        className='about_developers_article-img'
                        src={pdpNicolas}
                        alt=''
                    />
                    <h1 className='about_developers_article-name'>
                        Nicolas Verbaere
                    </h1>
                    <p className='about_developers_article-content'>
                        <strong>Role:</strong> Product Owner / Scrum Master
                    </p>
                    <p className='about_developers_article-content'>
                        <strong>Spé:</strong> React
                    </p>
                    <p className='about_developers_article-content'>
                        <strong>Linkedin:</strong>{' '}
                        <a
                            href='https://www.linkedin.com/in/nicolas-verbaere-a71667155/'
                            target='_blank'
                            rel='noreferrer'>
                            nicolas-verbaere-a71667155
                        </a>
                    </p>
                    <p className='about_developers_article-content'>
                        <strong>Github:</strong>{' '}
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://github.com/Nicolas-Verbaere'>
                            Nicolas-Verbaere
                        </a>
                    </p>
                </article>

                <article className='about_developers_article'>
                    <img
                        className='about_developers_article-img'
                        src={pdpEva}
                        alt=''
                    />
                    <h1 className='about_developers_article-name'>
                        Eva Sanchez
                    </h1>
                    <p className='about_developers_article-content'>
                        <strong>Role:</strong> Git Master
                    </p>
                    <p className='about_developers_article-content'>
                        <strong>Spé:</strong> Data
                    </p>
                    <p className='about_developers_article-content'>
                        <strong>Linkedin:</strong>{' '}
                        <a
                            href='https://www.linkedin.com/in/eva-sanchez-83689b203/'
                            target='_blank'
                            rel='noreferrer'>
                            eva-sanchez-83689b203
                        </a>
                    </p>
                    <p className='about_developers_article-content'>
                        <strong>Github:</strong>{' '}
                        <a
                            href='https://github.com/DoesNotCompute2745'
                            target='_blank'
                            rel='noreferrer'>
                            DoesNotCompute2745
                        </a>
                    </p>
                </article>

                <article className='about_developers_article'>
                    <img
                        className='about_developers_article-img'
                        src={pdpStephane}
                        alt=''
                    />
                    <h1 className='about_developers_article-name'>
                        Stéphane Janson
                    </h1>
                    <p className='about_developers_article-content'>
                        <strong>Role:</strong> Lead Dev Back
                    </p>
                    <p className='about_developers_article-content'>
                        <strong>Spé:</strong> Data
                    </p>
                    <p className='about_developers_article-content'>
                        <strong>Linkedin:</strong>{' '}
                        <a
                            href='https://www.linkedin.com/in/stephanejanson/'
                            target='_blank'
                            rel='noreferrer'>
                            stephanejanson
                        </a>
                    </p>
                    <p className='about_developers_article-content'>
                        <strong>Github:</strong>{' '}
                        <a
                            href='https://github.com/StephaneJanson'
                            target='_blank'
                            rel='noreferrer'>
                            StephaneJanson
                        </a>
                    </p>
                </article>
            </section>
        </section>
    );
}
export default React.memo(Apropos);
