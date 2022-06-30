import './Histoire.scss';

function Histoire({ el }) {
    console.log(el);
    return (
        <>
        {/* <article className='article'>
            {el.beer && (
            <img
                className='biereHstoire_Beerimg'
                src={process.env.PUBLIC_URL + `/../img/${el.beer}.jpg`}
                alt=''
            />
            )}
            <div className='biereHstoire_contain'>
                <h1 className='biereHstoire_contain-title'>{el.title}</h1>
                <p className='biereHstoire_contain-content'>{el.content}</p>
            </div>
        </article> */}

        <article className='histoire'>
                {el.beer && (
                    <img
                        className='histoire-img'
                        src={process.env.PUBLIC_URL + `/../img/${el.beer}.jpg`}
                        alt=''
                    />
                )}
                <div className='histoire_contain'>
                    <h1 className='histoire_contain-name'>{el.title}</h1>
                    <p className='histoire_contain-description'>
                        {el.content}
                    </p>
                    
                </div>
            </article>
       </> 
    );
}
export default Histoire;
