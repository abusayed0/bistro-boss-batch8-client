import { Parallax } from 'react-parallax';
const Cover = ({ bgImg, title }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={bgImg}
            bgImageAlt="the cover"
            strength={-200}
        >
            <div className="hero h-[800px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content bg-[rgba(21,21,21,0.60)]">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;