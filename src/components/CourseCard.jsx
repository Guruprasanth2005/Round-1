import "../styles/CourseCard.css";

import IconStar from "../icons/IconStar.svg";

const CourseCard = ({ course }) => {
  return (
    <div className="courseRow">
      <div
        className="thumb"
        style={{
          background: course.bg,
        }}
      >
        <div className="thumbOverlay"></div>

        <div className="thumbContent">
          <div className="thumbIcon">
            {course.icon}
          </div>

          <div>
            <div className="thumbStart">
              Start:
            </div>

            <div className="thumbDates">
              {course.startDate}
            </div>
          </div>

          <div className="thumbBottom">
            <div className="thumbPriceLabel">
              Price
            </div>

            <div className="thumbPriceValue">
              ${course.price}
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="contentTop">
          <div>
            <h3 className="courseTitle">
              {course.title}
            </h3>

            <p className="desc">
              {course.description}
            </p>
          </div>

          <div className="rating">
            <img
              src={IconStar}
              alt="star"
              width="13"
            />

            <span>{course.rating}</span>
          </div>
        </div>

        <div className="courseFooter">
          <div className="tags">
            {course.tags.map(
              (tag, index) => (
                <span
                  key={index}
                  className="tag"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          <button className="arrowBtn">
            ➜
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;