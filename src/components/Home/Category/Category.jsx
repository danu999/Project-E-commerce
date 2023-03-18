import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories, innerPage, headingText  }) => {
    const navigate = useNavigate();

    return (
        <div className="shop-by-category">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className="categories">
                {categories?.data?.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="category"
                            onClick={() => navigate(`/category/${item.id}`)}
                        >
                            <img
                                src={
                                    process.env.REACT_APP_DEV_URL +
                                    item.attributes.img.data[0].attributes.url} alt=""
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Category;
