import { TeacherComponent } from "./TeacherComponent";
import Carousel from "components/carousel/Carousel";
import { useEffect, useState } from "react";
import useWindowSize from "hooks/useWindowSize";


const TeachersCarousel = ({ teachers }: {teachers: Teacher[]}) => {
  const [visibleSlides, setVisibleSlides] = useState<number>(4);

  const width = useWindowSize();

  useEffect(() => {
    if (width < 500) return setVisibleSlides(1);
    if (width < 1400) return setVisibleSlides(3);
    else if (teachers.length < 4) return setVisibleSlides(3);
    else return setVisibleSlides(4);
  }, [width, teachers.length]);

  return (
    <Carousel
      totalSlides={teachers.length}
      infinite={false}
      visibleSlides={visibleSlides}
      sx={{
        maxWidth: { xs: 300, sm: 1200, xl: 1400 },
        display: "flex",
        position: "relative",
        ".carousel__inner-slide": {
          marginLeft: 0,
          maxWidth: "max-content",
          ":first-child": {
            margin: "0 auto",
          },
        },
      }}
    >
      {teachers.map((item) => (
        <TeacherComponent key={item.TeacherId} teacher={item} />
      ))}
    </Carousel>
  );
};

export { TeachersCarousel };
