import { Helmet, HelmetProvider } from "react-helmet-async";

const Seo = ({titleText}) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Bistro Boss | {titleText}</title>
            </Helmet>
        </HelmetProvider>
    );
};

export default Seo;