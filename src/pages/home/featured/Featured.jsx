import SectionTitle from "../../../shared-components/section-title/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./featured.css"
const Featured = () => {
    return (
        <section className="featured-container py-20 text-white mb-20">
            <SectionTitle heading="FROM OUR MENU" subHeading="Check it out" />
            <div className="flex flex-col md:flex-row gap-5 items-center w-4/5 mx-auto">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <h4>March 20, 2023</h4>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-0 border-b-4">Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;